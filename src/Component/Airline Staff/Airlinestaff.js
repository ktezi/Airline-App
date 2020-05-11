import React from 'react'
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
