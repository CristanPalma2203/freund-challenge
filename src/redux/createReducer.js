import isObject from "lodash/isObject";
import has from "lodash/has";

export default function createReducer(initialState, handlers) {
	return function reducer(state = initialState, action) {
		// Fix ESLint error
		if (isObject(handlers) && has(handlers, action.type)) {
			return handlers[action.type](state, action);
		} else {
			return state;
		}
	};
}
