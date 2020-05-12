import React from 'react'
import styled from 'styled-components';

const SeatSquarer = styled.span`
height:10px;
width: 10px;
color: blue;
background-color: blue;
`

function FlightSeatLayout(props) {

    return (
        <div>
            hello from flight
            <SeatSquarer />
        </div>
    )
}

export default FlightSeatLayout
