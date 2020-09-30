import * as actionTypes from '../constants/action-types'
export function countUp(){
    return {
        type: actionTypes.COUNT_UP
    }
}

export function countDown(){
    return {
        type: actionTypes.COUNT_DOWN
    }
}