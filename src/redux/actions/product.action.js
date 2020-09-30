import Axios from "axios";
import { GET_PRODUCTS, ADD_TO_CART, GET_PRODUCT_BY_ID} from '../constants/productActionType';

export function addToCart(payload){
    return {
        type: ADD_TO_CART,
        payload
    }
}

export const getProductsApi = () => {
    return dispatch => {
        return Axios.get('http://165.22.103.200:8083/api/products').then((response) => {
            dispatch(getProducts(response.data.data))
        })
    }
}

export const getProducts = (products) => {
    return {
        type: GET_PRODUCTS,
        payload: products
    }
}

export const getProductDetailApi = (id) => {
    return dispatch => {
        return Axios.get(`http://165.22.103.200:8083/api/products/${id}`).then((response) => {
        
            dispatch(getProductDetail(response.data.data))
        })
    }
}

export const getProductDetail = (product) => {
    return {
        type: GET_PRODUCT_BY_ID,
        payload: product
    }
}