import { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { Item, MemorizedItem } from './item';

export type TItem = {
	userId: string;
	id: number;
	title: string;
	body: string;
};

export const List = () => {
	const [toggle, setToggle] = useState(false);
	const [loading, setLoading] = useState(false);
	const [posts, setPosts] = useState<TItem[] | []>([]);

	console.log('render list');

	useEffect(() => {
		console.log('useEffect list');
		setLoading(true);
		fetch('https://jsonplaceholder.typicode.com/posts', { method: 'GET' })
			.then((res: any) => res.json())
			.then((res: TItem[]) => {
				setPosts(res);
				setLoading(false);
			});
	}, []);

	//useCallback
	//если handler передаём дочернему компоненту а он в свою очередь обёрнут в memo
	const handler = useCallback(
		(title: string) => {
			console.log(title);
		},
		[posts],
	);
	// const handler = (title: string) => {
	// 	console.log(title);
	// };

	//useMemoесли есть перебор массива (большого)
	//будет пересчитывася когда поменяется значение в зависимостях
	//также если дочерний компонент обёрнут в memo и мы в
	//качестве пропсов передаём не приметивы то их надо обернуть в useMemo
	const list = useMemo(() => {
		console.log('useMemo');
		return posts;
	}, [posts]);

	return (
		<div style={{ padding: '50px' }}>
			<button
				onClick={(e: any) => {
					setToggle(!toggle);
				}}
			>
				toggle {toggle}
			</button>
			{loading && 'loading'}
			{/* {!loading && posts.map((el) => <Item key={el.id} body={el.body} title={el.title} />)} */}
			{!loading &&
				list.map((el) => (
					<MemorizedItem key={el.id} handler={handler} body={el.body} title={el.title} />
				))}
		</div>
	);
};
