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

  render() {

    let persons = null;

    if (this.state.showPeople) {
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
    }

    let chars = this.state.stringContent.split('');
    let charComponentList = (
      <div>
        {chars.map((char, index) => {
          return <CharComponent
            character={char}
            click={() => this.deleteCharacterHandler(index)}
          />
        })}
      </div>
    );

    return (
      <div className="App">
        <h1>Hi, I'm Tims React App</h1>
        <p>This Works Great!</p>
        <button
          onClick={this.togglePeopleHandler} >
          Toggle People
        </button>
        {persons}
        <br />
        <input type="text" onChange={(event) => this.inputLengthHandler(event)} value={this.state.stringContent} />
        <p>Current length: {this.state.stringLength}</p>
        <ValidationComponent cutOff={this.state.cutOff} textLength={this.state.stringLength} />
        {charComponentList}
      </div>
    );
  }
};

export default App;
