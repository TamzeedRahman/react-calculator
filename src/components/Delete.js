import React from 'react';

function Delete(props) {
    const {del} = props
    return (
        <div className="button delete">
            {del}
        </div>
    )
}

export default Delete