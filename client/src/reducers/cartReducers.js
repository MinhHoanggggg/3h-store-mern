import { CARTS_LOADED_FAIL, CARTS_LOADED_SUCCESS } from '../contexts/constants'

export const cartReducer = (state, action) => {
	const {
		type,
		payload
	} = action;

	switch (type) {
		
		case CARTS_LOADED_SUCCESS:
		return {
			...state,
			carts: payload,
			cartsLoading: false
		}

		default:
			return state;
	}
}