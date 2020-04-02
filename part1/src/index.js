import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const History = (props) => {
  if(props.allClicks.length === 0) {
    return(
      <div>The App is used by pressing the button</div>
    )
  }

  return (
    <div>Press the button history: {props.allClicks.join('')}</div>
  )
}

const Button = ({onClick, text}) => {
  return(
    <button onClick={onClick}>{text}</button>
  )
}


const App = (props) => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);

  const handleLeftCkick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1);
  }
  const handleRightCkick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1);
  }

  return (
    <div>
      {left}
      <Button onClick={handleLeftCkick} text="+" />
      <Button onClick={handleRightCkick} text="+"/>
      {right}
      <History allClicks={allClicks} />
    </div>
  )



}
ReactDOM.render(<App />, document.getElementById('root'))