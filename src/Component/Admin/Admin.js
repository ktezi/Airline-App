import React, { Component } from 'react'
import AncillaryServices from './Manage AncillaryServices/AncillaryServices'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import './Admin.scss'
import AllPassanger from './Manage Passenger/AllPassanger'
import { addInputFlightId } from '../../Store/actions/other'
export class Admin extends Component {
    constructor(props) {
        super(props)
        this.state = { flightId: '' }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
        const id = event.target.value
        this.setState({ flightId: id })
        this.props.dispatch(addInputFlightId(id))
    }
    handleSubmit = (event) => {
        event.preventDefault()

    }

    render() {
        return (
            <div >
                <form onSubmit={(event) => { this.handleSubmit(event) }}>
                    DASHBOARD
                    Select flight Id
                    <input type="text" id="flight-id" required
                        minLength="1" maxLength="4" size="5" value={this.state.flightId}
                        onChange={this.handleChange} ></input>
                    <input type="submit" value="Submit"></input><br />
                    <Link to='/admin/ancillaryservices' >Manage Ancillary Services</Link><br />
                    <Link to='/admin/showallpassanger' >Show All Passenger</Link>
                </form>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        loginDetails: state.loginDetails


    }
}

export default connect(mapStateToProps)(Admin)
