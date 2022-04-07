import { createContext, useReducer, useEffect } from 'react'
import { cartReducer } from '../reducers/cartReducers'
import { apiUrl, LOCAL_STORAGE_TOKEN_NAME, CARTS_LOADED_FAIL, CARTS_LOADED_SUCCESS } from './constants.js'
import axios from 'axios'
import setAuthToken from '../utils/setAuthToken'

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {

    //state
    const [cartState, dispatch] = useReducer(cartReducer, { 
        carts: [],
        cartsLoading: true
    })

    //get cart users
    const getCarts = async () => {
        try{
            const response = await axios.get(`${apiUrl}/cart`);
            if (response.data.success) {
				dispatch({
					type: CARTS_LOADED_SUCCESS,
					payload:  response.data.carts
				})
			}
        }catch(error){
             return error.response.data ? error.response.data : { success: false, message: error.message }
        }
    }
    
    const cartContextData = { cartState, getCarts };

    return (
        <CartContextProvider value={cartContextData}>
            { children }
        </CartContextProvider>
    )  
}
export default CartContextProvider;


