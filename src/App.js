import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id:'1', name: 'Aba', age: 1 },
      { id:'2', name: 'Foz', age: 1 },
      { id:'3', name: 'Sco', age: 2 },
      { id:'4', name: 'Bro', age: 4 },
      { id:'5', name: 'Rog', age: 3 }
    ],
    otherState: 'some udder value',
    showPersons: false
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

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]); // alternative syntax to spread operator

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  deletePersonHandler = (personIndex) => {
    /* should always update state in an immutable fashion */ 
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    
    //  CSS Styling in javascript mmkay
    const style = {
      backgroundColor: '#fff',
      font: 'inherit',
      border_radius:'12px'
    }

    let persons = null; 
    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
            click={() => this.deletePersonHandler(index)}
            key={person.id}
            name={person.name} 
            age={person.age}
              changed={(event) => this.nameChangeHandler(event, person.id)}
            /> 
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">~</h1>
        </header>
        {/* FOLLOWING SYNTAX IS NOT RECOMMENDED */}
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>+++</button>
         
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
