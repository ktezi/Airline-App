import React, { Component } from 'react'
import { connect } from 'react-redux'
import Modal from 'react-modal'
import ModalPopUp from './ModalPopUp';
export class AncillaryServices extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModal: false,
            type: '',
            modalData: {}
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick = (arr, temp) => {
        console.log(temp)
        switch (temp) {
            case "AncillaryServices":
                this.setState({
                    modalData: arr.ancillaryServices[0], type: temp,
                    isModal: true
                })
                break
            case "SpecialMeals":
                this.setState({
                    modalData: arr.specialMeals,
                    type: temp,
                    isModal: true
                })
                break
            case "ShoppingItems":
                this.setState({
                    modalData: arr.shoppingItems,
                    type: temp,
                    isModal: true
                })
                break
            default:
                return
        }
        console.log('click', this.state.type)
    }


    removeClick = (a) => {
        this.setState({
            modalData: {},
            isModal: a,
            type: ''
        })
    }

    render() {
        const flightId = this.props.inputFlightId;
        console.log(this.props);
        const { modalData } = this.state;
        console.log('abc', this.state)
        var arr = this.props.flights.find((a) => a.flightId === flightId)
        return (
            <div >
                <div>
                    Add/update Ancillary Sevices
                    <button onClick={() => this.handleClick(arr, 'AncillaryServices')}>Add/update Ancillary Sevices</button>
                </div>
                <div>
                    Add/update Special Meals
                    <button onClick={() => this.handleClick(arr, 'SpecialMeals')}>Add/update Special Meals</button>
                </div>
                <div>
                    Add/update Shopping Items
                    <button onClick={() => this.handleClick(arr, 'ShoppingItems')}>Add/update Shopping Items</button>
                </div>
                <Modal isOpen={this.state.isModal} ariaHideApp={false} className="Modal"
                    overlayClassName="Overlay">
                    <button type='button' onClick={() => this.removeClick(false)}>X</button>
                    <ModalPopUp modalData={this.state.modalData} type={this.state.type} flightId={flightId} />
                </Modal>
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
