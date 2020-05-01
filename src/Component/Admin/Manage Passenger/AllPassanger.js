import React, { Component } from 'react'
import { connect } from 'react-redux'
import Modal from 'react-modal'
import { addModalData } from '../../../Store/actions/other'
import './AllPassanger.scss'
class AllPassanger extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModal: false,
            modalData: {}
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleSubmit = (event, a) => {
        event.preventDefault();

    }
    addOrUpdateDetails = () => {
        console.log('mmodal', this.state.modalData)

    }
    handleChange = (event) => {
        let modalData = event.target.value
        event.preventDefault();
        console.log('handlechange', event.target.value)
        this.setState({
            modalData: { ...event.target.value }
        })
        this.props.dispatch(addModalData(modalData))

    }
    handleClick = (a) => {
        this.setState({
            modalData: a,
            isModal: true
        })

    }
    removeClick = (a) => {
        this.setState({
            modalData: {},
            isModal: a
        })

    }
    render() {
        const flightId = this.props.inputFlightId
        let arr = this.props.flights.find((a) => a.flightId === flightId)
        console.log('arr', arr)
        const { modalData } = this.state;
        const { name, passport, address, id } = modalData
        console.log('modalData', modalData)
        return (
            <div ><h1 className='passengers-header'>All Passanger</h1>
                <div>
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

                    {arr && arr.passengers.map(a => (
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


                </div>
                <Modal isOpen={this.state.isModal} ariaHideApp={false} className="Modal"
                    overlayClassName="Overlay">
                    {Object.keys(modalData) ?
                        <div >
                            Name:<input type='text' value={name} onChange={(event) => this.handleChange(event)}></input>
                            passport:<input type='text' value={passport} onChange={(event) => this.handleChange(event)}></input>
                            address:<input type='text' value={address} onChange={(event) => this.handleChange(event)}></input>
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

