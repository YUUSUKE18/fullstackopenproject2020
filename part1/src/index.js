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
  return(
  <div>
      <Part part="Hello World" excercise="10"/>
      <Part part="Hello Morning" excercise="7" />
      <Part part="Hello Evening" excercise="5" />
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