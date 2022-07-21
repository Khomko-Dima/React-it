import React, { FC, memo } from 'react';
import { TItem } from './list';

type ItemProps = { handler: (title: string) => void } & Pick<TItem, 'title' | 'body'>;

export const Item: FC<ItemProps> = ({ title, body, handler }) => {
	console.log('render Item');

	return (
		<div>
			<h1 onClick={(e: any) => handler(title)}>{title}</h1>
			<p>{body}</p>
		</div>
	);
};

//castom functions
//если передаём пропсы в виде примитиво то просто memo, иначе можно определить функцию сравнения
//или значения являющимся не приметивами обернуть в useMemo и функции в useCallback
// export const MemorizedItem = memo(Item, (prev, next) => {
// 	return prev.title === next.title;
// });

export const MemorizedItem = memo(Item);
