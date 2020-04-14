import React, {useState} from 'react';
import './App.css';

const App = () => {
  const [person, setPerson] = useState(
    [
      {
        name: 'Taro Nihon',
      }
    ]
  )
  const [newName, setNewName] = useState('');
  
  const onChangeName = (e) => {
    e.target.value;
    
  }

  const addName = (e) => {
      e.preventDefault();
      const addPhoneBook = {
        name: newName,
      }

      setPerson(person.concat(addPhoneBook));
      setNewName('');
  }

  return (
    <div className="App">
      <h2>PhoneBook</h2>
      <form>
        <div>
          name:  <input value={onChangeName} />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        <li></li>
      </ul>
    </div>
  );
}

export default App;
