import { ADD_USER_DETAILS } from '../utlis/constants'

export function loginDetails(state = {}, action) {
    if (action.type === ADD_USER_DETAILS) {
        console.log('reducer', action.data)
        return state = action.data
    }
    return state;
}