import React from 'react';

const ValidationComponent = (props) => {

    let cutOff = props.cutOff;
    let textLength = props.textLength;
    let isLongEnough = textLength >= cutOff;

    return (
        <p>
            {isLongEnough ? 'Text long enough!' : 'Text too short!'}
        </p>
    );
}

export default ValidationComponent;