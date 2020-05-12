import React from 'react'

function ModalPupupData(props) {
    // let [randomNumber, updateRandomNum] = useState(0)
    const { handleAncillary, handleShoppingItems, handleSpecialMeals,
        addOrUpdateDetails, modalData, arr, type } = props;
    const random = () => {
        const min = 1;
        const max = 100000000000;
        const rand = min + Math.random() * (max - min);
        const num = rand;
        return num
    }
    return (
        <div>
            {(() => {
                switch (type) {
                    case "AncillaryServices":
                        return <div>
                            {<h1>{arr}</h1>}
                            {
                                Object.keys(modalData[arr]).map((ii, index) => (
                                    <div>
                                        {ii}   :<button key={random()} onClick={() => handleAncillary(arr, ii)} > {`${modalData[arr][ii]}`}</button>
                                        <button key={random()} type='button' onClick={() => addOrUpdateDetails()}>Save Changes</button>
                                    </div>
                                ))}
                        </div>;
                    case "SpecialMeals":
                        return <div>
                            {<br />}
                            {
                                Object.keys(modalData[arr]).map((ii, index) => (
                                    <div key={random()}>
                                        {ii}   :<div contenteditable="true" key={random()} onClick={() => handleSpecialMeals(arr, ii)} > {`${modalData[arr][ii]}`}</div>
                                        <button key={random()} type='button' onClick={() => addOrUpdateDetails()}>Save Changes</button>
                                    </div>
                                ))}
                        </div>;
                    case "ShoppingItems":
                        return <div>
                            {<h1>{arr}</h1>}
                            {
                                Object.keys(modalData[arr]).map(ii => (
                                    <div>
                                        {ii}   :<button onClick={() => handleShoppingItems(arr, ii)} > {`${modalData[arr][ii]}`}</button>
                                        <button type='button' onClick={() => addOrUpdateDetails()}>Save Changes</button>
                                    </div>
                                ))}
                        </div>;
                    default: return
                }
            })()}

        </div>
    )
}

export default ModalPupupData
