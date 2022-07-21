import React from 'react';
import { Provider } from 'react-redux';
import { List } from './components/list';
import Test from './components/test';
import store from './store';
function Main() {
	return (
		<Provider store={store}>
			<Test />
			<List />
		</Provider>
	);
}

export default Main;
