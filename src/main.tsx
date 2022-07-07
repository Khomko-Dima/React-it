import React from 'react';
import { Provider } from 'react-redux';
import Test from './components/test';
import store from './store';
function Main() {
	return (
		<Provider store={store}>
			<Test />
		</Provider>
	);
}

export default Main;
