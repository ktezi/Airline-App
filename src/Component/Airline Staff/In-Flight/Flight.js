import React from 'react'
import { connect } from 'react-redux'
import './Flights.scss'

export function Flight(props) {
    const { flights } = props
    const currentFlight = props.flights.find(a => a.flightId === props.flightId)
    console.log(currentFlight)
    const currentFlightKey = Object.keys(currentFlight).sort(a => typeof (a) !== 'object')
    console.log('key', currentFlightKey)
    return (
        <div>
            <div className='flight-details'>
                {
                    currentFlight && currentFlightKey.map((a, index) => {
                        return (a === 'passengers') || (a === 'ancillaryServices') || (a === 'shopingItems') || (a === 'specialMeals') ?
                            <div key={index} className='flight-details-header'>
                                {<br />}
                                {currentFlight[a].map(aa => Object.keys(aa).map(aaa => {
                                    return ((aaa === 'item') || (aaa === 'ancillaryServices') || (aaa === "meal") || (aaa === "baggage") || (aaa === "gadgets")) ? <div>
                                        {Object.keys(aa[aaa]).map(aaaa => <div className='flight-details-object'>{aaaa}: {aaa[aaaa]}</div>)}{<br />}
                                    </div> : <div>{aaa} : {aa[aaa]} </div>
                                }))}
                            </div>
                            : <div key={index} >
                                <div>{a} : {currentFlight[a]}</div></div>
                    })
                }
            </div>


        </div>
    )

}



function mapStateToProps(state) {
    return { flights: state.flights }
}

export default connect(mapStateToProps)(Flight)
