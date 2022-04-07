export const productReducer = (state, action) => {
	const {
		type,
		payload
	} = action;

	switch (type) {
		
		case 'PRODUCT_LOADED_SUCCESS':
		return {
			...state,
			products: payload,
			productsLoading: false
		}

		default:
			return state;
	}
}