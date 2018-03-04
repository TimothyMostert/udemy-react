import React from 'react';
import './Person.css';

const Person = (props) => {



  return (
    <div className="Person">
      <p>I'm a Person, <br/> My age is {props.age} <br/> My name is {props.name}</p>
      <p onClick={props.click}>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default Person;
