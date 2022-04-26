
import './App.css';
import {useEffect, useState} from 'react'
import React from 'react';
import CardList from './components/card-list/cardlist.component';
import SearchBox from './components/search-box/search-box.component';

const App = () => {

  //array destructing , gives us back two values
  const [searchField, setSearchField] = useState('')
  const [monsters, setMonsters] = useState([])
  const [filteredMonsters,setFilteredMonsters] =useState(monsters)
  const[stringField, setStringField] = useState('')


  // [value,setValue]
  //use state is indivual objects
  console.log(searchField)
// takes 2 arguments, call back function and array of depencies
// empty array means no depencies, just when it mounts


  useEffect( () => {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then( (users)=> setMonsters(users) )

  },[])

  useEffect (() => {
    const newFilteredMonsters = monsters.filter((monster)=> {
      return monster.name.toLocaleLowerCase().includes(searchField)
    
    });
    setFilteredMonsters(newFilteredMonsters);
    console.log('effect is firing')
  }, [monsters, searchField])

 const onStringChange = (event) => {
   setStringField(event.target.value);
 }
  

const onSearchChange = (event)=> { 
  const searchFieldString = event.target.value.toLocaleLowerCase();
  setSearchField(searchFieldString)
 
  }
  

return (

 

<div className='App'> 
<h1 className='app-title'>Monsters Rolodex</h1>
<SearchBox 
onChangeHandler={onSearchChange} 
placeholder='placeholder' 
className='className'/>

<SearchBox 
onChangeHandler={onStringChange} 
placeholder='placeholder' 
className='className'/>

<CardList monsters= {filteredMonsters} anything={['a z']}/>


</div>

)  
}

export default App;
