import { createContext, useReducer, useEffect } from 'react'
import { productReducer } from '../reducers/productReducer'
import { apiUrl, LOCAL_STORAGE_TOKEN_NAME } from './constants.js'
import axios from 'axios'
import setAuthToken from '../utils/setAuthToken'

export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
    
    //state
    const [productState, dispatch] = useReducer(productReducer, { 
        products: [],
        productsLoading: true
    })

    //get all products
    const getProducts = async () => {
        try{
            const response = await axios.get(`${apiUrl}/product`);
            if (response.data.success) {
				dispatch({
					type: 'PRODUCT_LOADED_SUCCESS',
					payload:  response.data.products
				})
			}
        }catch(error){
             return error.response.data ? error.response.data : { success: false, message: error.message }
        }
    }

    const productContextData = {productState, getProducts};

	return (
        <ProductContextProvider value={productContextData}>
            { children }
        </ProductContextProvider>
    )  
}

export default ProductContextProvider;