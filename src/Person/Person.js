import React from 'react';
import './Person.css';

const Person = (props) => {



  return (
    <div className="Person">
      <p>I'm a Person, <br/> My age is {props.age} <br/> My name is {props.name}</p>
      <p onClick={props.click}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis aut mollitia eum molestiae itaque a quidem sequi eaque, ex voluptatem!</p>
      <input type="text" onChange={props.changed} value={props.defaulttext} />
    </div>
  );
};

export default Person;
