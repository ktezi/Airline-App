import { ADD_INPUT_FLIGHT_ID, ADD_MODAL_DATA } from '../utlis/constants'


export function addInputFlightId(data) {
    return {
        type: ADD_INPUT_FLIGHT_ID,
        data
    }
}

export function addModalData(data) {
    return {
        type: ADD_MODAL_DATA,
        data
    }
}