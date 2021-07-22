import React, { useState } from 'react'
import './App.css';
import Person from './components/person'

const App = () => {
  const [ persons, setPersons ] = useState([
  { name: 'Arto Hellas', number: '040-123456' },
  { name: 'Ada Lovelace', number: '39-44-5323523' },
  { name: 'Dan Abramov', number: '12-43-234345' },
  { name: 'Mary Poppendieck', number: '39-23-6423122' }
]) 
  const [newName,setNewName] =  useState('')
  const [newNumber,setNewNumber] =  useState('')
  const [newText,setNewText]=useState('')
  const [searchResults, setSearchResults] = useState([]);
  React.useEffect(() => {
    const results = persons.filter(person => person.name.toLowerCase().includes(newText));
    setSearchResults(results);
  },[newText]);
  
  const addPerson =(event) =>{
    event.preventDefault()
    const personObject ={
      name : newName,
      phone : newNumber
    }
    if(persons.some((person)=>person.name===newName))
    {
      alert(newName+" is already added to the phonebook");
    }
    else
    {
      setPersons(persons.concat(personObject))
      setNewName('')
    }
  }
  const handleNameChange = (event) =>
  {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const Search =(event)=> {
    console.log(event.target.value)
    setNewText(event.target.value)
  }

  const handleNumberChange = (event) =>
  {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        Filter Shown With 
        <input value={newText} onChange={Search} />
      </form>
      <form onSubmit ={addPerson}>
        <div>
          <h3>Add A New</h3>
          Name: <input value={newName} onChange={handleNameChange} />
          <br/>
          Number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type ="submit">add</button>
        </div>
      </form>
      <h3>Contact & Numbers</h3>
      <ul>
        {searchResults.map(person =>
        <Person key={person.name} person={person} />
      )}
      </ul>
    </div>
  )
} 

export default App;
