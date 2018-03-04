import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

  state = {
    usernames: [
      'Tim',
      'Luke',
      'Mike'
    ]
  }

  eventHandler = () => {
    this.setState({
      usernames: [
        'Xang',
        'Lew',
        'Yunyun'
      ]}
    );
  }

  render() {
    return (
      <div className="App">
        <h2>UserInput</h2>
        <UserInput handle={this.eventHandler}/>
        <h2>UserOutput</h2>
        <UserOutput username={this.state.usernames[0]} />
        <UserOutput username={this.state.usernames[1]} />
        <UserOutput username={this.state.usernames[2]} />
      </div>
    );
  }
};

export default App;
