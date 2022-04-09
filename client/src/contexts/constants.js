export const apiUrl =
	process.env.NODE_ENV !== 'production'
		? 'http://localhost:6969/api'
		: 'hehe'

export const LOCAL_STORAGE_TOKEN_NAME = 'hehe'

export const PRODUCTS_LOADED_SUCCESS = 'PRODUCTS_LOADED_SUCCESS'
export const PRODUCTS_LOADED_FAIL = 'PRODUCTS_LOADED_FAIL'

export const CATEGORIES_LOADED_SUCCESS = 'CATEGORIES_LOADED_SUCCESS'
export const CATEGORIES_LOADED_FAIL = 'CATEGORIES_LOADED_FAIL'

export const CARTS_LOADED_SUCCESS = 'CARTS_LOADED_SUCCESS'
export const CARTS_LOADED_FAIL = 'CARTS_LOADED_FAIL'

export const DELETE_ITEM_CART = 'DELETE_ITEM_CART'

// export const ADD_POST = 'ADD_POST'
// export const DELETE_POST = 'DELETE_POST'
// export const UPDATE_POST = 'UPDATE_POST'
// export const FIND_POST = 'FIND_POST'
    
