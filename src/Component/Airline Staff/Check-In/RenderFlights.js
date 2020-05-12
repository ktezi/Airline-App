import React from 'react'
import Flight from './Flight'

function renderFlights(routerProps) {
    const { flightId } = routerProps.match.params;
    console.log('tezi', routerProps.location.pathname)
    return (
        <Flight flightId={flightId} pathname={routerProps.location.pathname} />
    )
}

export default renderFlights
