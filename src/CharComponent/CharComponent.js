import React from 'react';

const CharComponent = (props) => {

    const style = {
        display: 'inline-block',
        padding: '16px',
        textAlign: 'center',
        margin: '16px',
        border: '1px solid black',
        maxWidth: '20px'
    }

    return <div style={style} onClick={props.click}>{props.character}</div>  
}

export default CharComponent;