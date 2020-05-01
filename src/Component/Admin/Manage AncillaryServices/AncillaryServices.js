import React, { Component } from 'react'
import { connect } from 'react-redux'
export class AncillaryServices extends Component {
    render() {
        const flightId = this.props.inputFlightId
        let arr = this.props.flights.find((a) => a.flightId === flightId)
        console.log('ancillary ', arr)
        return (
            <div>
                Manage AncillaryServices
            </div>
        )
    }
}

function mapStateToProps(state) {

    return {
        flights: state.flights,
        inputFlightId: state.otherDetails.inputFlightId
    }
}

export default connect(mapStateToProps)(AncillaryServices)
