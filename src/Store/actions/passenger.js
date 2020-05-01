
import { FETCH_PASSENGERS } from '../utlis/constants';



export function fetchPassengerPending(data) {
    return {
        type: FETCH_PASSENGERS,
        data
    }
}

