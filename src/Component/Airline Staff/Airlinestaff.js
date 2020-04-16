import React, { Component } from 'react'
import CheckIn from './Check-In/CheckIn'
import InFlight from './In-Flight/InFlight'
// import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

export class Airlinestaff extends Component {
    render() {
        return (
            <div>

                <Link to='/airlinestaff/checkin'>
                    <CheckIn />
                </Link>
                <Link to='/airlinestaff/inflight'>
                    <InFlight />
                </Link>

            </div>
        )
    }
}

export default Airlinestaff
