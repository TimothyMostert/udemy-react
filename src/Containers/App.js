import React, { PureComponent } from 'react';
import classes from './App.css';
// import UserInput from './UserInput/UserInput';
// import UserOutput from './UserOutput/UserOutput';
import ValidationComponent from '../Components/ValidationComponent/ValidationComponent';
import CharComponent from '../Components/CharComponent/CharComponent';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';
import WithClass from '../HOC/WithClass';

class App extends PureComponent {
  constructor(props)
  {
    super(props);
    console.log('[App.js] Inside Constructor', props);
  }

  componentWillMount()
  {
    console.log('[App.js] inside componentWillMount()');
  }

  componentDidMount()
  {
    console.log('[App.js] inside componentDidMount');
  }

  componentWillUpdate(nextProps, nextState)
  {
    console.log('[UPDATE App.js] Inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate()
  {
    console.log('[UPDATE App.js] Inside componentDidUpdate');
  }

  state = {
    persons:
      [
        {
          name: 'Tim',
          age: 25,
          id: 'asdwq'
        },
        {
          name: 'Horace',
          age: 26,
          id: 'iodiajwd'
        },
        {
          name: 'Gary',
          age: 250,
          id: 'idaodis'
        }
      ],
    showPeople: 'false',
    stringContent: '',
    stringLength: 0,
    cutOff: 5
  }

  togglePeopleHandler = (event) => {
    const doesShow = this.state.showPeople;
    this.setState({
      showPeople: !doesShow
    }
    );
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  inputChangedHandler = (event, id) => {
    const persons = [...this.state.persons];
    const personIndex = persons.findIndex(prsn => {
      return prsn.id === id;
    });
    const person = persons[personIndex];
    person.name = event.target.value;
    persons[personIndex] = person;
    this.setState({
      persons: persons
    });
  }

  inputLengthHandler = (event) => {

    let newLength = Object.assign({}, this.state.stringLength);
    let newContent = Object.assign({}, this.state.stringContent);
    newLength = event.target.value.length;
    newContent = event.target.value;
    this.setState({
      stringLength: newLength,
      stringContent: newContent
    });
  }

  deleteCharacterHandler = (index) => {
    let characters = this.state.stringContent.split('');
    characters.splice(index, 1);
    let newString = characters.join('');
    let newLength = newString.length;
    this.setState(
      {
        stringLength: newLength,
        stringContent: newString
      }
    );
  }

  charcterListGenerator = () => {
    let chars = this.state.stringContent.split('');
    let charComponentList = (
      <div>
        {chars.map((char, index) => {
          return <CharComponent
            character={char}
            click={() => this.deleteCharacterHandler(index)}
            key={index}
          />
        })}
      </div>
    );
    return charComponentList;
  }

  render() {
    console.log('[App.js] inside Render');
    
    // Generate Persons List from state
    let persons = null;
    if (this.state.showPeople) {
        persons = <Persons 
          persons = {this.state.persons}
          clicked = {this.deletePersonHandler}
          changed = {this.inputChangedHandler} />
    }
    // generate charComponents from input field
    let charComponentList = this.charcterListGenerator();

    return (

      <WithClass classes={classes.App}>
        <button onClick={() => {this.setState({showPeople: true})}} >Show Persons</button>
        <Cockpit 
          persons = {this.state.persons}
          clicked = {this.togglePeopleHandler}
          showPeople = {this.state.showPeople} 
        />
        {persons}


        <br />
        <input
          type="text"
          onChange={(event) => this.inputLengthHandler(event)}
          value={this.state.stringContent}
        />
        <p>
          Current length: {this.state.stringLength}
        </p>
        <ValidationComponent
          cutOff={this.state.cutOff}
          textLength={this.state.stringLength}
        />
        {charComponentList}
      </WithClass>
    );
  }
};

export default App;
