
import './App.css';
import React from 'react';

class App extends React.Component {

  constructor () {
super()
    this.state = {
      monsters: [],
      searchField: ''
  };
  console.log('constructor')
  }

onSearchChange = (event)=> { 
  const searchField = event.target.value.toLocaleLowerCase();
  
  this.setState ( () => {
    return { searchField}
  })
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
const {monsters, searchField} = this.state;
const {onSearchChange} = this;


const filteredMonsters = monsters.filter((monster)=> {
  return monster.name.toLocaleLowerCase().includes(searchField)

})
    return (

      <div> 
  <input
  className = 'searchbox' 
  type='search' 
  placeholder='search monsters' 
  onChange={onSearchChange}/>


 {filteredMonsters.map((monster) => {
   return <h1 key={Math.random()}> {monster.name}</h1>
 })}

      </div>
    )
  }
}

export default App;
