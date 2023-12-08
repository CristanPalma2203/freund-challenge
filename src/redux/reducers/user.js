import createReducer from "../createReducer";
import * as type from "../actions/types";

const defaultState = {
	user_id: -1,
	email: "",
	name: "",
	last_name: "",
	authenticated: false,
	passwordChanged: false,
	token: "",
	menu: [],
	permissions: [],
};

export default createReducer(defaultState, {
	[type.LOGGED](state, action) {
		return Object.assign({}, action);
	},
	[type.LOGOUT](state, action) {
		return Object.assign(defaultState, action);
	},
});
