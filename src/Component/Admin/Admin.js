import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import './Admin.scss'
import { addInputFlightId } from '../../Store/actions/other'
import { flights } from '../../Store/reducers/passenger'
export class Admin extends Component {
    constructor(props) {
        super(props)
        this.state = { flightId: 1 }
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
                    <select
                        value={this.state.flightId}
                        onChange={this.handleChange}
                    >
                        {this.props.flights.map(a => {
                            return <option value={a.flightId}>{a.flightId}</option>
                        })}

                    </select>


                    {this.state.flightId ? <button>
                        <Link to='/admin/ancillaryservices' >Manage Ancillary Services</Link><br />
                        <Link to='/admin/showallpassanger' >Show All Passenger</Link></button> : ''}
                </form>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        loginDetails: state.loginDetails,
        flights: state.flights

    }
}

export default connect(mapStateToProps)(Admin)
