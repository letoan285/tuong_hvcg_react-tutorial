import * as actionTypes from '../constants/action-types';
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

