import React, {useState} from 'react';

// const Statistics = () => {
//   return(
//   <div>
      
//   </div>
//   )
// }

const Button = ({onClick, title}) => {

  return(
      <div>
          <button onClick={onClick}>{title}</button>
      </div>
  )
}


const App = (props) => {
  const[good, setGood] = useState(0);
  const[neutral, setNeutral] = useState(0);
  const[bad, setBad] = useState(0);
  const[result, setResult] = useState(0);
  const[avarge, setAvarage] = useState(0);
  const[positive, setPositive] = useState(0);

  const goodClick = () => {
    setGood(good + 1);
    setResult(result + 1);
    setAvarage(good / result);
    setPositive(good + 1);
  }

  const neutralClick = () => {
    setNeutral(neutral + 1);
    setResult(result + 1);
  }

  const badClick = () => {
    setBad(bad + 1);
    setResult(result + 1);
  }

  return(
    <div>
      <h2>Give FeedBack</h2>
      <Button onClick={goodClick} title="Good" />
      <Button onClick={neutralClick} title="Neutral" />
      <Button onClick={badClick} title="Bad" />
      <h3>Statistics</h3>
      <br/>
      good : {good}
      <br />
      neutral : {neutral}
      <br />
      bad : {bad}
      <br />
      all : {result}
      <br />
      Avarage : {avarge}
      <br />
      Positive : {positive}
    </div>
  )

}


export default App;