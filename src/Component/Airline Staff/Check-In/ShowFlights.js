import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './ShowFlights.scss'



function ShowFlights(props) {
    const { flights } = props;
    // const currentTime = new Date().toLocaleString();
    // // let time = currentTime.split(',');
    // let time = '1:00'
    let sortArr = flights.sort(function (a, b) {
        return (parseFloat(a.departureTime) - parseFloat(b.departureTime));
    });
    console.log('inflightflight', sortArr)
    // const handleClick = () => {

    // }
    return (
        <div>
            {
                sortArr && sortArr.map((a, index) => {
                    return <div key={index} >
                        <div className='sorted-list'>
                            <div>{a.flightId}</div>
                            <div>{a.from}</div>
                            <div>{a.to}</div>
                            <div>{a.departureTime}</div>
                            <div>{a.arrivalTime}</div>
                            <div>{a.arrivalTime}</div>
                            <Link to={`/airlinestaff/inflight/${a.flightId}`}>Open</Link>
                            {/* <button onClick={() => handleClick(a.flightId)}>Open</button> */}
                        </div>
                        {<br />}

                    </div>
                })
            }

        </div >
    )
}
function mapStateToProps(state) {
    return {
        flights: state.flights,
    }
}
export default connect(mapStateToProps)(ShowFlights)
