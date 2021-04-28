import React from 'react';
function Operation(props) {
    const {op} = props
    return (
        <div className="button operation">
        {op}
        </div>
    )
}

export default Operation;