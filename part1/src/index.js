import React, {useState} from 'react';
import ReactDOM from 'react-dom';

// const Header = (props) => {
//   return(
//     <div>
//       <h1>{props.course}</h1>
//     </div>
//   )
// }

// const Part = (props) => {
//   return(
//     <div>{props.part} {props.excercise}</div>
//   )
// }

// const Content = () => {
//   return(
//   <div>
//       <Part part="Hello World" excercise="10"/>
//       <Part part="Hello Morning" excercise="7" />
//       <Part part="Hello Evening" excercise="5" />
//   </div>
//   )
// }

// const Total = () => {
//   const excercise1 = 10;
//   const excercise2 = 7;
//   const excercise3 = 5;
//   return(
//     <div>
//       <p>Number of excercise {excercise1 + excercise2 + excercise3 }</p>
//     </div>
//   )
// }
// const App = (props) => {
//   const course ={
//     name: "Half Stack Application Development",
//     parts: [
//       {
//       name: 'Hello World',
//       excercise: 10
//       },
//       {
//       name: 'Hello Morning',
//       excercise: 7
//       },
//       {
//       name: 'Hello Evening',
//       excercise: 14
//       }
//     ]
//   }
//   return(
//   <div>
//     <Header course={course} />
//     <Content parts={parts}/>
//     <Total parts={parts}/>
//   </div>
//   )
// }

const Display = ({counter}) => {
  return (
    <div>{counter}</div>
  )
}

const Button = (props) => {
  return(
    <button onClick={props.handleClick}>{props.text}</button>
  )
}



const App = (props) => {
  const [counter, setCounter] = useState(0);

  const Increment = () => setCounter(counter + 1);
  const Decrement = () => setCounter(counter -1);
  const Reset = () => setCounter(0);

  return (
    <div>
      <Display counter={counter} />
      <br />
    <Button
      handleClick={Increment}
      text="+"
      />
    <Button
      handleClick={Decrement}
      text="-"
      />
    <Button
      handleClick={Reset}
      text="Reset"
      />
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))