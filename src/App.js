import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class App extends React.Component {

  constructor () {
super()
    this.state = {
      monsters: []
  };
  console.log('constructor')
  }


// API call
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then( (users)=> this.setState ( () => {
      return {monsters: users}
    }))
 
console.log('componentDidMount')
  }
  render () {
console.log('render')
    return (

      <div> 
  <input className = 'searchbox' type='search' placeholder= 'search monsters'
  onChange = { (event)=> {
    const searchString = event.target.value.toLocaleLowerCase();
    const filteredMonsters = this.state.monsters.filter((monster)=> {
      return monster.name.toLocaleLowerCase().includes(searchString)

    })
    this.setState ( () => {
      return { monsters: filteredMonsters}
    })

  }}/>


 {this.state.monsters.map((monster) => {
   return <h1 key={Math.random()}> {monster.name}</h1>
 })}

      </div>
    )
  }
}

export default App;
