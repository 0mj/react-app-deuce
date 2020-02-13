import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'Foz', age: 1 },
      { name: 'Rog', age: 2 }
    ],
    otherState: 'some udder value'
  });
  console.log(personsState);
  const switchHandler = () => {
      setPersonsState({
        persons: [
          { name: 'zoF', age: 100 },
          { name: 'goR', age: 200 }
        ]
      })
  }
  
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">~</h1>
        </header>
        {/* onClick capital 'C' because we JSX */}
        <button onClick={switchHandler}>switch</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
      </div>
    );
  
}

export default app;



