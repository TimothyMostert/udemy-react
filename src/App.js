import React, { Component } from 'react';
import './App.css';
// import UserInput from './UserInput/UserInput';
// import UserOutput from './UserOutput/UserOutput';
import Person from './Person/Person';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {

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

  personsListGenerator = (persons) => {
    persons = (
      <div>
        {this.state.persons.map((person, index) => {
          return <Person
            key={person.id}
            click={() => this.deletePersonHandler(index)}
            name={person.name}
            age={person.age}
            changed={(event) => this.inputChangedHandler(event, person.id)}
          />
        })}
      </div>
    );
    return persons;
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

    //styles
    const styles = {
      button: {
        backgroundColor: 'green',
        color: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer',
        marginBottom: '1rem'
      }
    }

    // Generate Persons List from state
    let persons = null;
    if (this.state.showPeople) {
      persons = this.personsListGenerator(persons);
      styles.button.backgroundColor = 'red';
    }
    // generate charComponents from input field
    let charComponentList = this.charcterListGenerator();

    // dynamic classes
    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>Hi, I'm Tims React App</h1>
        <p className={classes.join(' ')} >This Works Great!</p>
        <button style={styles.button} onClick={this.togglePeopleHandler} >
          Toggle People
        </button>
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
      </div>
    );
  }
};

export default App;
