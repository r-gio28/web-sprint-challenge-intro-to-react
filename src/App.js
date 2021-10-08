import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Characters from './components/Character'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [character, setCharacter] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
    .then(resp => {
      console.log(resp);
      setCharacter(resp.data);
    }).catch(err => {
      console.log(err)
    })
  },[])

  return (
    <div className="App">
      <h1 className="Header">Star Wars Meets React</h1>
      <Characters data={character}/>
    </div>
  );
}

export default App;
