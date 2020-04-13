import React, {useState} from 'react';
import Note from '/components/Note'
const App = (props) => {
  const [notes,setNotes] = useState(props.notes);

  const addNote = (e) => {
    e.preventDefault();
    console.log('button clicked' , e.target);
  }

  return(
    <div>
      <h2>Notes</h2>
      <ul>
        {notes.map(note => <Note key={note.id} note={note} />)}
      </ul>
      <form onSubmit={addNote}>
        <input />
        <button type="submit">Save</button>
      </form>
    </div>
  )
}

export default App;