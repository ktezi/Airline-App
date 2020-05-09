import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import CheckIn from '../Component/Airline Staff/Check-In/CheckIn'
import InFlight from '../Component/Airline Staff/In-Flight/InFlight'
import renderFlights from '../Component/Airline Staff/In-Flight/RenderFlights'
import Admin from '../Component/Admin/Admin'
import Airlinestaff from '../Component/Airline Staff/Airlinestaff'
import AllPassanger from '../Component/Admin/Manage Passenger/AllPassanger'
import AncillaryServices from '../Component/Admin/Manage AncillaryServices/AncillaryServices'

export class MainRoutes extends Component {
    render() {
        return (
            <div>

                <Route exact path='/admin'>
                    <Admin />
                </Route>
                <Route exact path='/admin/showallpassanger'>
                    <AllPassanger />
                </Route>
                <Route exact path='/admin/ancillaryservices'>
                    <AncillaryServices />
                </Route>
                <Route exact path='/airlinestaff'>
                    <Airlinestaff />
                </Route>
                <Route exact path='/airlinestaff/checkin'>
                    <CheckIn />
                </Route>
                <Route exact path='/airlinestaff/inflight'>
                    <InFlight />
                </Route>
                <Route exact path='/airlinestaff/inflight/:flightId' render={renderFlights} />

            </div>
        )
    }
}

export default MainRoutes
