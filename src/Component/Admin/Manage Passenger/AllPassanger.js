import React, { Component } from 'react'
import { connect } from 'react-redux'
import Modal from 'react-modal'
import styled, { css } from 'styled-components';
import { fetchPassengerPending } from '../../../Store/actions/passenger';
import './AllPassanger.scss'
import 'react-dropdown/style.css';
import { updatePassengersList } from "../../../Common/flightHelper"



const AddNewPassanger = styled.button`

`
class AllPassanger extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModal: false,
            modalData: {},
            selectedFilter: 'All'
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleSubmit = (event, a) => {
        event.preventDefault();
    }

    addOrUpdateDetails = () => {
        const passengerDetails = this.state.modalData;
        console.log('new', passengerDetails)
        const flightDetails = updatePassengersList(passengerDetails);
        this.props.dispatch(fetchPassengerPending(flightDetails));
    }

    handleChange = (event) => {
        let { value, name } = event.target;
        event.preventDefault();
        this.setState(prevState => ({
            modalData: { ...prevState.modalData, [name]: value }
        }))
    }
    handleClick = (a = {}) => {
        const data = {
            flightId: this.props.inputFlightId,
            id: a.id || '',
            name: a.name || '',
            passport: a.passport || '',
            address: a.address || ''
        }
        this.setState({
            modalData: { ...data },
            isModal: true
        })

    }
    removeClick = (a) => {
        this.setState({
            modalData: {},
            isModal: a
        })
    }
    dropClick = (event) => {
        let { value } = event.target;

        this.setState({ selectedFilter: value })
    }


    getPassengersList() {
        let { passengers } = this.props.flights.find((a) => a.flightId === this.props.inputFlightId);

        switch (this.state.selectedFilter) {
            case "Passport":
                return passengers.filter(a => a.passport && !a.passport.length > 0)
            case "Address":
                return passengers.filter(a => a.address && !a.address.length > 0)
            case "DOB":
                return passengers.filter(a => {
                    return a.dob === ""
                })
            default:
                return passengers
        }
    }
    render() {
        const options = [
            'All',
            'Passport', 'Address', 'DOB',
        ];
        const flightId = this.props.inputFlightId
        let arr = this.getPassengersList();

        const { modalData } = this.state;
        const { name, passport, address } = modalData

        return (
            <div ><h1 className='passengers-header'>All Passanger</h1>
                <div>
                    <select id="filter-dropdown" onChange={this.dropClick}>
                        {options.map((element, index) => {
                            return <option key={index} value={element} >{element} </option>
                        })
                        }
                    </select>
                    <div className='flight-id'>Flight-Id : {flightId}</div><br />

                    <div id='passengers'>
                        <li>Passanger Name</li>
                        <li>Seat Number</li>
                        <div >Ancillary Services
                            <div id='ancillary-services'>
                                <div className='ancillary-item'>Meal</div>
                                <div className='ancillary-item'>Baggage</div>
                                <div className='ancillary-item'>Gadgets</div>
                            </div>
                        </div>
                    </div>

                    {arr && arr.map(a => (
                        <div className="details-wrapper">
                            <h1>{a.name}</h1>
                            <h1>{a.seatId}</h1>
                            <div className='ancillary-wrapper'>
                                {a.ancillaryServices && Object.keys(a.ancillaryServices).map(aa => (
                                    <div>
                                        <p id="ancillary-item"> {a.ancillaryServices[aa]}</p>
                                    </div>
                                ))}
                            </div>
                            <button type='button' onClick={() => this.handleClick(a)}>Add/Update</button>
                        </div>)
                    )}
                    <AddNewPassanger onClick={() => { this.handleClick() }}>ADD New Passanger</AddNewPassanger>

                </div>
                <Modal isOpen={this.state.isModal} ariaHideApp={false} className="Modal"
                    overlayClassName="Overlay">
                    {Object.keys(modalData) ?
                        <div >
                            Name:<input type='text' value={name} name="name" onChange={(event, name) => this.handleChange(event, name)}></input>
                            passport:<input type='text' value={passport} name="passport" onChange={(event, name) => this.handleChange(event, name)}></input>
                            address:<input type='text' value={address} name="address" onChange={(event, name) => this.handleChange(event, name)}></input>
                            <button type='button' onClick={() => this.removeClick(false)}>X</button>
                            <button type='button' onClick={() => this.addOrUpdateDetails()}>Save Changes</button>
                        </div> : null

                    }
                </Modal>
            </div >
        )
    }
}
function mapStateToProps(state) {
    return {
        flights: state.flights,
        inputFlightId: state.otherDetails.inputFlightId
    }
}
export default connect(mapStateToProps)(AllPassanger)

