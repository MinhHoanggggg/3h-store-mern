import { DELETE_ITEM_CART, CARTS_LOADED_FAIL, CARTS_LOADED_SUCCESS } from '../contexts/constants'

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

		case CARTS_LOADED_FAIL:
		return {
			...state,
			cartsLoading: false,
			carts: [],
			cartTotal: 0
		}

		case DELETE_ITEM_CART:
			return {
				...state,
				carts: state.carts.filter(cart => cart._id !== carts._id)
			}

		default:
			return state;
	}
}