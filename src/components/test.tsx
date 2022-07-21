import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/store';
import { login, logout } from 'src/store/app/reducer';

const Test = () => {
	const dispatch = useDispatch();

	const { isLogin } = useSelector((state: RootState) => state.app);

	const handler = () => {
		if (isLogin) {
			dispatch(logout());
		} else {
			dispatch(login());
		}
	};
	return (
		<div>
			<div>Пользователь {isLogin ? 'авторизован' : 'неавторизован'}</div>
			<div>
				<button onClick={handler}>login</button>
				<button onClick={handler}>log out</button>
			</div>
		</div>
	);
};
export default Test;
