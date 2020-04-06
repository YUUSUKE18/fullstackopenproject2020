import React from 'react';

const notes = [
  {
    id: 1,
    content: 'HTML is easy',
    date: '2020-04-01',
    important: true
  },
  {
    id: 2,
    content: 'HTML is easy',
    date: '2020-04-02',
    important: false
  },
  {
    id: 3,
    content: 'CSS is not easy',
    date: '2020-04-01',
    important: true
  },
  {
    id: 4,
    content: 'JS is not easy',
    date: '2020-04-01',
    important: true
  }
]

const App = (props) => {
  const{ notes } = props;

  return(
    <div>
      <h2>Notes</h2>
      <ul>
        {notes.map(note => <li>{note.content}</li>)}
      </ul>
    </div>
  )
}

export default App;