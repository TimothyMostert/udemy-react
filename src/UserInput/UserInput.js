import React from 'react';
import './UserInput.css';

const UserInput = (props) => {

  const styles = {
    border: '2px solid red'
  };

  return (
    <div >
      <input style={styles} type="text" onChange={props.handle} value={props.driver} />
    </div>
  );
}

export default UserInput;
