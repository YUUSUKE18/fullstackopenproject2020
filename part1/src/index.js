import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  return(
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  return(
    <div>{props.part} {props.excercise}</div>
  )
}

const Content = () => {
  const part1 = "Hello World";
  const part2 = "Hello Morning";
  const part3 = "Hello Evening";
  const excercise1 = 10;
  const excercise2 = 7;
  const excercise3 = 5;
  return(
  <div>
      <Part part={part1} excercise={excercise1}/>
      <Part part={part2} excercise={excercise2}/>
      <Part part={part3} excercise={excercise3}/>
  </div>
  )
}

const Total = () => {
  const excercise1 = 10;
  const excercise2 = 7;
  const excercise3 = 5;
  return(
    <div>
      <p>Number of excercise {excercise1 + excercise2 + excercise3 }</p>
    </div>
  )
}
const App = (props) => {
  const course = 'Half Stack Application Development';
  return(
  <div>
    <Header course={course} />
    <Content />
    <Total />
  </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
