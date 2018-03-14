import React, {Component} from 'react';
import classes from './Person.css';
import WithClass from '../../../HOC/WithClass';

class Person extends Component
{
  constructor(props)
  {
    super(props);
    console.log('[Person.js] Inside Constructor', props);
  }

  componentWillMount()
  {
    console.log('[Person.js] inside componentWillMount()');
  }

  componentDidMount()
  {
    console.log('[Person.js] inside componentDidMount');
    
  }
  
  render()
  {
    console.log('[Person.js] inside Render');
    return (
      <WithClass classes={classes.Person}>
        <p>I'm a Person, <br/> My age is {this.props.age} <br/> My name is {this.props.name}</p>
        <p onClick={this.props.click}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis aut mollitia eum molestiae itaque a quidem sequi eaque, ex voluptatem!</p>
        <input type="text" onChange={this.props.changed} value={this.props.defaulttext} />
      </WithClass>
    );
  }
}

export default Person;
