import React from 'react'

class CardList extends React.Component {

    
    render() {
        const {monsters} = this.props

        return (

            <div className='cardList'>
{monsters.map((monster) => (
    < div key={monster.id}> 
    <img 
     alt={`monster ${monster.name}`} 
    src={`https://robohash.org/${monster.id}1?set=set2`}/>
    <h2> {monster.name}</h2>
    <p> {monster.email}</p>
     </div>
))}
            </div>
        )
    }
}

export default CardList