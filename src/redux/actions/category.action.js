import Axios from 'axios';
import { GET_CATEGORIES } from '../constants/categoryActionTypes';
export const getCategoriesApi = () => {
    return dispatch => {
        return Axios.get('http://165.22.103.200:8083/api/categories').then((response) => {
            dispatch(getCategories(response.data))
        })
    }
}

export const getCategories = (categories) => {
    return {
        type: GET_CATEGORIES,
        payload: categories
    }
}