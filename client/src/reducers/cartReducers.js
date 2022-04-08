import { CARTS_LOADED_FAIL, CARTS_LOADED_SUCCESS } from '../contexts/constants'

export const cartReducer = (state, action) => {
	const {
		type,
		payload: { carts, cartTotal }
	} = action;

	switch (type) {
		case CARTS_LOADED_SUCCESS:
		return {
			...state,
			cartsLoading: false,
			carts,
			cartTotal
		}

		default:
			return state;
	}
}