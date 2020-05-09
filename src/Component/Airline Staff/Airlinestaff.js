import React, { Component } from 'react'
import CheckIn from './Check-In/CheckIn'
import InFlight from './In-Flight/InFlight'
// import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Airlinestaff() {

    return (
        <div>

            <Link to='/airlinestaff/checkin'>
                CheckIn
            </Link><br />
            <Link to='/airlinestaff/inflight'>
                Inflight
            </Link>
        </div>
    )

}

export default Airlinestaff
