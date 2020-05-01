import axios from '../index'

export async function fetchPassengerList() {
    let data = await axios.get('/flights');
    return data
}