import { ADD_INPUT_FLIGHT_ID, ADD_MODAL_DATA } from '../utlis/constants'



export function otherDetails(state = {}, action) {
    if (action.type === ADD_INPUT_FLIGHT_ID) {
        return {
            ...state,
            inputFlightId: action.data
        }
    }
    if (action.type === ADD_MODAL_DATA) {
        return {
            ...state,
            modalData: action.data
        }
    }
    return state;
}
