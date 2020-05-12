import React, { useState } from 'react'
import { connect } from 'react-redux'
import { updateFlightServices } from "../../../Common/flightHelper"
import { fetchPassengerPending } from '../../../Store/actions/passenger';
import { Button } from 'semantic-ui-react';
import ModalPopupData from './ModalPupupData'

export function ModalPopUp(props) {

    let [modalData, updateModalData] = useState(props.modalData || {})
    const addOrUpdateDetails = () => {
        const { type, flightId } = props
        console.log('ggg', type)
        const newFlight = updateFlightServices(type, modalData, flightId);
        console.log(newFlight)
        props.dispatch(fetchPassengerPending(newFlight));
    }
    const handleAncillary = (i, ii) => {
        updateModalData(() => ({
            ...modalData, [i]: {
                ...modalData[i],
                [ii]: !modalData[i][ii]
            }
        }))
    }
    const handleSpecialMeals = (i, ii) => {
        updateModalData(() => ({
            ...modalData, [i]: {
                ...modalData[i],
                [ii]: !modalData[i][ii]
            }
        }))
    }
    const handleShoppingItems = (i, ii) => {
        updateModalData(() => ({
            ...modalData, [i]: {
                ...modalData[i],
                [ii]: !modalData[i][ii]
            }
        }))
    }
    const addNewServices = () => {

    }
    return (
        <div>
            <Button onClick={addNewServices}>Add new {props.type}</Button>
            {modalData ? Object.keys(modalData).map((i) => (
                <ModalPopupData modalData={modalData} arr={i} handleAncillary={handleAncillary}
                    handleSpecialMeals={handleSpecialMeals} handleShoppingItems={handleShoppingItems}
                    addOrUpdateDetails={addOrUpdateDetails} type={props.type} />
            ))
                : ''}
        </div>
    )
}


export default connect()(ModalPopUp)
