import { FETCH_PASSENGERS } from '../utlis/constants';


export function flights(state = [], action) {
    switch (action.type) {
        case FETCH_PASSENGERS:
            return state = action.data
        default:
            return state;
    }
}


