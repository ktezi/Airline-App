import React, { Component } from 'react'
import AncillaryServices from './Manage AncillaryServices/AncillaryServices'
import AllPassanger from './Manage Passenger/AllPassanger'
import { Link } from 'react-router-dom'


export class Admin extends Component {
    render() {
        return (
            <div>
                DASHBOARD
                <AncillaryServices />
                <Link to='/admin/showallpassanger'>Show All Passenger</Link>
            </div>
        )
    }
}

export default Admin
