import React, {useState} from 'react';
import './App.css';

const App = () => {
  const [persons, setPersons] = useState(
    [
      {
        id: 1,
        name: 'Taro Nihon',
        number: '0120-1234-5678'
      }
    ]
  )
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const addName = (e) => {
      e.preventDefault();
      const addPhoneBook = {
        id: persons.length + 1,
        name: newName,
        number: newNumber
      }
      if(newName === persons.name){
        alert(`${newName} is already added to phonebook`);
      }

      setPersons(persons.concat(addPhoneBook));
      setNewName('');
      setNewNumber('');
  }

  const handleNameChange = (e) => {
    console.log(e.target.value);
    setNewName(e.target.value);
  }
  const handleNumberChange = (e) => {
    console.log(e.target.value);
    setNewNumber(e.target.value);
  }

  return (
    <div className="App">
      <h2>PhoneBook</h2>
      <form onSubmit={addName}>
        <div>
          name:  <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number:  <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => {
          return <div key={person.id}>{person.name} {person.number}</div>
        })}
      </ul>
    </div>
  );
}

export default App;
