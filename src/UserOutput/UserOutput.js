import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {
  return (
    <div className="UserOutput">
      <p className="all-the-work">{props.username} is: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, quos.</p>
      <p className="better-living">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, aspernatur!</p>
    </div>
  );
}

export default UserOutput;
