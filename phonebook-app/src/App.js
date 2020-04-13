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
  return (
    <div className="App">
      <h2>PhoneBook</h2>
      <form>
        <div>
          name:  <input />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
    </div>
  );
}

export default App;
