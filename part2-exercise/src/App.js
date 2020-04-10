import React from 'react';
import Course from './components/Course'

const App = () => {
  const course = {
    id:1,
    name: 'Half Stack Application Development',
    parts:[
      {
        name: 'Fundamental of React',
        exercise: 10,
        id:1
      },
      {
        name: 'Middle Level of React',
        exercise: 18,
        id:2
      },
      {
        name: 'Expert of React',
        exercise: 12,
        id:3
      }
    ]
  }

  return(
    <div><Course course={course} /></div>
  )
}

export default App;
