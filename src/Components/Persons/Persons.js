import React, {Component} from "react";
import Person from './Person/Person';

class Persons extends Component 
{
  constructor(props)
  {
    super(props);
    console.log('[Persons.js] Inside Constructor', props);
  }

  componentWillMount()
  {
    console.log('[Persons.js] inside componentWillMount()');
  }

  componentDidMount()
  {
    console.log('[Persons.js] inside componentDidMount'); 
  }

  componentWillReceiveProps(nextProps)
  {
    console.log('[UPDATE Persons.js inside componentWillRecieveProps', nextProps);
  }

  shouldComponentUpdate(nextProps, nextState)
  {
    console.log('[UPDATE Person.js] Inside shouldComponentUpdate', nextProps, nextState);
    return nextProps.persons !== this.props.persons;
    
  }

  componentWillUpdate(nextProps, nextState)
  {
    console.log('[UPDATE Person.js] Inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate()
  {
    console.log('[UPDATE Person.js] Inside componentDidUpdate');
  }
            
  render() 
  {
    console.log('[Persons.js] inside Render');
    return this.props.persons.map((person, index) => {
      return <Person
      key={person.id}
      click={() => this.props.clicked(index)}
      name={person.name}
      age={person.age}
      changed={(event) => this.props.changed(event, person.id)}
      defaulttext={person.name} />
      });
  }
}

export default Persons;