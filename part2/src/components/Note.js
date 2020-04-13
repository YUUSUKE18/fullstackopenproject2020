import React from 'react'

const Note = () => {

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
      ];

    return(
        <div>
            <li key={notes.id}>{notes.content}</li>
        </div>
    )
}

export default Note