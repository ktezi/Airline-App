import { fetchPassengerPending } from './passenger';
import { fetchPassengerList } from '../../repository/services/passenger.api'
import { addLoginDetails } from './login'

export function getInitialPassengerList() {
    return async (dispatch) => {
        return await fetchPassengerList().then(({ data }) => {
            dispatch(fetchPassengerPending(data));
        })
    }
}

export function getInitialUserData(data) {
    data.isAdmin = false;
    return (dispatch) => {
        if (data.email === 'tezikhan1@gmail.com') {
            data.isAdmin = true;
            dispatch(getInitialPassengerList())
        }
        sessionStorage.setItem('userData', JSON.stringify(data))
        dispatch(addLoginDetails(data));
    }
}


export function userDetailsfromSessionStorage(data) {
    return (dispatch) => {
        if (data) {
            dispatch(getInitialUserData(data))
        }
    }
}

export function removeDetailsfromSessionStorage() {
    sessionStorage.setItem('userData', JSON.stringify({}));
    return (dispatch) => {
        dispatch(addLoginDetails({}))
        dispatch(fetchPassengerPending([]));
    }
}
// export function updatePassengerDetails({name,passport,address,flightId,id}){


// }