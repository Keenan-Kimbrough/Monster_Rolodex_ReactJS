
import './App.css';
import React from 'react';
import CardList from './components/card-list/cardlist.component';
import SearchBox from './components/search-box/search-box.component';

class App extends React.Component {

  constructor () {
super()
    this.state = {
      monsters: [],
      searchField: ''
  };
  
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
 

  }
  render () {

const {monsters, searchField} = this.state;



const filteredMonsters = monsters.filter((monster)=> {
  return monster.name.toLocaleLowerCase().includes(searchField)

})
    return (

      <div className='App'> 
      <h1 className='app-title'>Monsters Rolodex</h1>
  <SearchBox onChangeHandler={this.onSearchChange} placeholder='placeholder' className='className'/>
 

 
  <CardList monsters= {filteredMonsters} anything={['a z']}/>
      </div>
    )
  }
}

export default App;
