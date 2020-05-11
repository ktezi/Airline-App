import store from '../Store/store'


let state = store.getState();



function updateAuxilaryServices(flightServices, flightId, flights) {
    flights.forEach((a) => {
        if (a['flightId'] === flightId) {
            a.ancillaryServices[0] = flightServices;
            console.log(a['flightId'], flightId)
            console.log('sadsa', flightServices)

        }
    })
    return flights
}

function updateShoppingItems() {

}

function updateSpecialMeals() {

}


export function updatePassengersList(passengerDetails) {
    state = store.getState();
    let { flights } = state;
    flights.forEach((a) => {
        if (a['flightId'] === passengerDetails.flightId) {
            const len = a.passengers.length;
            a.passengers.forEach((aa) => {
                if (aa['id'] === passengerDetails.id) {
                    aa['name'] = passengerDetails['name'];
                    aa['passport'] = passengerDetails['passport']
                    aa['address'] = passengerDetails['address']
                }
            })
            if (passengerDetails.id === '') {
                passengerDetails.id = (len + 1) || 88888
                a.passengers.push(passengerDetails);
            }
        }

    })
    return flights
}

export function updateFlightServices(type, flightServices, flightId) {
    state = store.getState();
    let { flights } = state;
    switch (type) {
        case 'AncillaryServices':
            return updateAuxilaryServices(flightServices, flightId, flights)
        case 'SpecialMeals':
            return updateSpecialMeals(flightServices, flightId, flights)
        case 'ShoppingItems':
            return updateShoppingItems(flightServices, flightId, flights)
        default: return flights
    }
}

