import React from 'react'
import Flight from './Flight'

function renderFlights(routerProps) {
    const { flightId } = routerProps.match.params;
    return (
        <Flight flightId={flightId} />
    )
}

export default renderFlights
