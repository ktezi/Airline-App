import React from 'react'
import { connect } from 'react-redux'
import './Flights.scss';
import styled from 'styled-components';
import FlightSeatLayout from './FlightSeatLayout';

const FlightDuration = styled.div`
display: flex;
    justify-content: space-around;
    align-items: center;
    ont-family: 'Nunito',sans-serif !important;
    font-size: 18px;
    font-weight: 500;
`
const FlightImage = styled.img`
height: 75px;
width: 150px;
`
const FlightDurationCont = styled.div`
height: 90px;
    display: flex;
    flex-direction: column;
    width: 80px;
    align-items: center;
    justify-content: space-evenly;
`
const FlightServiceDetails = styled.div`

`
const PassengersDetails = styled.table`
margin:auto;
`

export function Flight(props) {
    // const { flights } = props
    if (props.location.pathname !== this.props.location.pathname) {
        console.log("here");
        //take action here
    }
    const currentFlight = props.flights.find(a => a.flightId === props.flightId)
    // const currentFlightKey = Object.keys(currentFlight).sort(a => typeof (a) !== 'object');
    let { flightId, imgUrl, from, to, departureTime, arrivalTime, duration, passengers, ancillaryServices, shoppingItems, specialMeals } = currentFlight;
    let passengersData = passengers.map(a => {
        let { id, name, passport, dob, seatId, address, isCheckedIn } = a;
        return { id, name, passport, dob, seatId, address, isCheckedIn }
    })
    console.log(passengersData)
    return (
        // <div>
        //     <div className='flight-details'>
        //         {
        //             currentFlight && currentFlightKey.map((a, index) => {
        //                 return (a === 'passengers') || (a === 'ancillaryServices') || (a === 'shopingItems') || (a === 'specialMeals') ?
        //                     <div key={index} className='flight-details-header'>
        //                         {<br />}
        //                         {currentFlight[a].map(aa => Object.keys(aa).map(aaa => {
        //                             return ((aaa === 'item') || (aaa === 'ancillaryServices') || (aaa === "meal") || (aaa === "baggage") || (aaa === "gadgets")) ? <div className="sds">
        //                                 {Object.keys(aa[aaa]).map(aaaa => <div className='flight-details-object'>{aaaa}: {aaa[aaaa]}</div>)}{<br />}
        //                             </div> : <div className="aas">{aaa} : {aa[aaa]} </div>
        //                         }))}
        //                     </div>
        //                     : <>
        //                         <div className="as">{a} : {currentFlight[a]}</div></>
        //             })
        //         }
        //     </div>


        // </div>
        <div><div>Flight details</div>
            <FlightDuration>
                <FlightDurationCont>
                    <div className="flight-head">
                        Flight ID
                    </div>
                    <div className="flight-bot">
                        {flightId}
                    </div>
                </FlightDurationCont>
                {/* <div className="flight-id">Flight ID : {flightId}</div> */}
                <div>
                    <FlightImage src={imgUrl} alt='logo' ></FlightImage>
                </div>
                <FlightDurationCont>
                    <div className="flight-head">
                        {from}
                    </div>
                    <div className="flight-bot">
                        {departureTime}
                    </div>
                </FlightDurationCont>
                <FlightDurationCont>
                    <div className="flight-head">
                        {to}
                    </div>
                    <div className="flight-bot">
                        {arrivalTime}
                    </div>
                </FlightDurationCont>
                <FlightDurationCont>
                    <div className="flight-head" >
                        Duration
                    </div>
                    <div className="flight-bot">
                        {duration}
                    </div>
                </FlightDurationCont>
            </FlightDuration>

            <FlightSeatLayout />

            <FlightServiceDetails>
                Passenger Details
                <PassengersDetails >
                    <tbody>

                        <tr>

                            <th>ID</th>
                            <th>Name</th>
                            <th>Passport</th>
                            <th>DOB</th>
                            <th>Seat ID</th>
                            <th>Address</th>
                            <th>CheckedIn</th>
                        </tr>
                        {passengersData.map(a => {
                            return <tr>{
                                Object.keys(a).map((aa) => {
                                    return <td> {`${a[aa]}`}</td>
                                })
                            }</tr>
                        })
                        }
                    </tbody>
                </PassengersDetails>

            </FlightServiceDetails>
        </div>
    )

}



function mapStateToProps(state) {
    return { flights: state.flights }
}

export default connect(mapStateToProps)(Flight)
