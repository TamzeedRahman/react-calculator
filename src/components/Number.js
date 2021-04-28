import React from 'react';

function Number(props) {
    const { value } = props;
    return (
        <div className="number button">
        {value}
        </div>
    )
}


export default Number