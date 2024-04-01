import React from 'react'
import {useState} from 'react'
import {useEffect} from 'react'

// people API has homeworld with id. planets API has the id names for the homeworld. 
// Need name and homeworld id from people API. Need name from planets API


function Character( {character, planets} ) { // ❗ Add the props
  const {name, homeworld} = character;
 // const {name: homeworldName} = planets;
  const homeworldData = planets.find(planet => planet.id === homeworld);
  const homeworldName = homeworldData.name
  // ❗ Create a state to hold whether the homeworld is rendering or not
  const [showHomeworld, setHomeworld] = useState(false)
  // ❗ Create a "toggle" click handler to show or remove the homeworld
  const toggleHomeworld = () => {
    setHomeworld(!showHomeworld)
  }
  
  return (
    <div className={`character-card ${showHomeworld ? 'active' : ''}`} onClick={toggleHomeworld}>
      {/* Use the same markup with the same attributes as in the mock */}
      
      <h3 class='character-name'>{name}</h3>
      {showHomeworld && ( 
      <p>Planet:
        <span class='character-planet'> {homeworldName} </span>
         </p>
     )}
     
     </div>

  )
}

export default Character
