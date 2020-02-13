import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

const app = props => {
  
  const [ personsState, setPersonsState ] = useState({ // useState returns an array of exactly 2 elements and ALWAYS 2 elements
    persons: [
      { name: 'Foz', age: 1 },
      { name: 'Rog', age: 2 }
    ]
    ,otherState: 'some udder value on personsState'
  });

  const [otherState, setOtherState] = useState('some oober state');
  
  // Main difference between managing state in functional component vs class based component.
  // the function in the 2nd element of the array returned from useState()
  // const [ personsState, setPersonsState ] = useState()
  // DOES NOT MERGE what you pass to it with the old state. IT REPLACES THE OLD STATE
  console.log(personsState, otherState);
  const switchHandler = () => {
      setPersonsState({
        persons: [
          { name: 'zoF', age: 100 },
          { name: 'goR', age: 200 }
        ]
        //  ,otherState: personsState.otherState
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



