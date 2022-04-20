import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class App extends React.Component {

  constructor () {
super()
    this.state = {
      monsters: []
  };

  }



  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then( (users)=> this.setState ( () => {
      return {monsters: users}
    }))


  }
  render () {

    return (

      <div> 
 {this.state.monsters.map((monster) => {
   return <h1 key={Math.floor(Math.random())}> {monster.name}</h1>
 })}

      </div>
    )
  }
}

export default App;
