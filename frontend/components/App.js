import React from 'react'
import axios from 'axios'
import Character from './Character'
import {useState} from 'react'
import {useEffect} from 'react'



const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {
  // ❗ Create state to hold the data from the API
  const [characters, setCharacters] = useState([])
  const [planets, setPlanets] = useState([])
  // ❗ Create effects to fetch the data and put it in state

  useEffect(() => {
    axios.get(urlPeople)
      .then(res => {
        setCharacters(res.data);
      })
      .catch(err => {
        console.log('Error with characters:')
      })
  }, [])

  useEffect(() => {
    axios.get(urlPlanets)
      .then(res => {
        setPlanets(res.data);
      })
      .catch(err => {
        console.log('Error with planets:')
      })
  })

  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {/* ❗ Map over the data in state, rendering a Character at each iteration */}
      {characters.map(character => (
        <Character key={character.id} character={character} planets={planets} />
      ))}
    </div>
  )
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
