import { ADD_USER_DETAILS, ADD_INPUT_FLIGHT_ID } from '../utlis/constants'



export function loginDetails(state = {}, action) {
    if (action.type === ADD_USER_DETAILS) {
        return state = action.data
    }
    return state;
}