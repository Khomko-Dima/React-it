import { createSlice } from '@reduxjs/toolkit';

export type TState = {
	isLogin: boolean;
};
const initialState: TState = {
	isLogin: false,
};
export const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		login: (state) => {
			state.isLogin = true;
		},
		logout: (state) => {
			state.isLogin = false;
		},
	},
});
export const { login, logout } = appSlice.actions;
export default appSlice.reducer;
