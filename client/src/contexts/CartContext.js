import { createContext, useReducer, useEffect } from 'react'
import { cartReducer } from '../reducers/cartReducers'
import { authReducer } from '../reducers/authReducers'
import { apiUrl, LOCAL_STORAGE_TOKEN_NAME, CARTS_LOADED_FAIL, CARTS_LOADED_SUCCESS, DELETE_ITEM_CART } from './constants.js'
import axios from 'axios'
import setAuthToken from '../utils/setAuthToken'

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {

    //state
    const [cartState, dispatch] = useReducer(cartReducer, { 
        carts: [],
        cartsLoading: true,
        cartTotal: 0
    })

    //get cart users
    const getCarts = async _id => {
        if (localStorage[LOCAL_STORAGE_TOKEN_NAME]) {
			setAuthToken(localStorage[LOCAL_STORAGE_TOKEN_NAME])
		}

        try{
            const response = await axios.get(`${apiUrl}/cart/${_id}` );
            
            if (response.data.success) {
				dispatch({
					type: CARTS_LOADED_SUCCESS,
					payload:  { carts: response.data.carts, cartTotal: response.data.cartTotal }
				})
			}
        }catch(error){
            dispatch({ type: CARTS_LOADED_FAIL })
        }
    }

        //get cart users
        const updateCarts = async _id => {
            if (localStorage[LOCAL_STORAGE_TOKEN_NAME]) {
                setAuthToken(localStorage[LOCAL_STORAGE_TOKEN_NAME])
            }
    
            try{
                const response = await axios.get(`${apiUrl}/cart/${_id}` );
                
                if (response.data.success) {
                    dispatch({
                        type: CARTS_LOADED_SUCCESS,
                        payload:  { carts: response.data.carts, cartTotal: response.data.cartTotal }
                    })
                }
            }catch(error){
                dispatch({ type: CARTS_LOADED_FAIL })
            }
        }

        //get cart users
        const deleteCart = async cartId => {
            if (localStorage[LOCAL_STORAGE_TOKEN_NAME]) {
                setAuthToken(localStorage[LOCAL_STORAGE_TOKEN_NAME])
            }
    
            try{
                const response = await axios.delete(`${apiUrl}/cart/${cartId}` );
                
                if (response.data.success) {
                    dispatch({
                        type: DELETE_ITEM_CART,
                        payload:  { carts: cartId }
                    })
                }
            }catch(error){
                console.log(error)
            }
        }
            
    
    const cartContextData = { cartState, getCarts, deleteCart};

    return (
        <CartContext.Provider value={cartContextData}>
            { children }
        </CartContext.Provider>
    )  
}

export default CartContextProvider;


