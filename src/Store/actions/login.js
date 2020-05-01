import { ADD_USER_DETAILS, ADD_INPUT_FLIGHT_ID } from '../utlis/constants'

export function addLoginDetails(data) {
    return {
        type: ADD_USER_DETAILS,
        data
    }
}

export function addInputFlightId(data) {
    return {
        type: ADD_INPUT_FLIGHT_ID,
        data
    }
}

