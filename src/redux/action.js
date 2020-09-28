import * as actionTypes from './action-types';
export function getAll(payload){
    return {
        type: actionTypes.GET_ALL,
        payload
    }
}

export function getOne(payload){
    return {
        type: actionTypes.GET_ONE,
        payload
    }
}

export function addToCart(payload){

    return {
        type: actionTypes.ADD_TO_CART,
        payload
    }
}