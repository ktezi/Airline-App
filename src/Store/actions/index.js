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

    return (dispatch) => {
        if (data.email === 'tezikhan1@gmail.com') {
            data.isAdmin = true;
            dispatch(getInitialPassengerList())
        }
        else {
            data.isAdmin = false
            dispatch(getInitialPassengerList())
        }
        sessionStorage.setItem('userData', JSON.stringify(data))
        dispatch(addLoginDetails(data));
    }
}


export function userDetailsfromSessionStorage(data) {
    return (dispatch) => {
        if (data) {
            console.log('userDetailsFromsession', data)
            dispatch(getInitialUserData(data))
        }
    }
}

export function removeDetailsfromSessionStorage() {
    // sessionStorage.setItem('userData', JSON.stringify({}));
    sessionStorage.removeItem('userData');
    return (dispatch) => {
        dispatch(addLoginDetails({}))
        dispatch(fetchPassengerPending([]));
    }
}
// export function updatePassengerDetails({name,passport,address,flightId,id}){


// }