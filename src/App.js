import React, { Component } from 'react';
import logo from './logo.svg';import './App.css';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Foz', age: 1 },
      { name: 'Rog', age: 2 }
    ],
    otherState: 'some udder value'
  };

  switchHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        { name: newName, age: 100 },
        { name: 'goR', age: 200 }
      ]
    });
  };

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Tom', age: 50 },
        { name: event.target.value, age: 75 }
      ]
    });
  }

  render() {
    
    //  CSS Styling in javascript mmkay
    const style = {
      backgroundColor: '#fff',
      font: 'inherit',
      border: '4px solid red',
      padding: '8px'
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">~</h1>
        </header>
        {/* FOLLOWIN SYNTAX IS NOT RECOMMENDED */}
        <button 
          style={style}
          onClick={() => this.switchHandler('ZZZZEEEEEBBB')}>switch</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          changed={this.nameChangeHandler}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchHandler.bind(this,'JJ')}
          changed={this.nameChangeHandler}
        >
          My Hobbies: Racing
        </Person>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
