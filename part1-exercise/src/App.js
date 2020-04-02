import React, {useState} from 'react';

const Statistics = () => {
  return(
  <div>
      <h3>Statistics</h3>
      <br/>
      good : {good}
      <br />
      neutral : {neutral}
      <br />
      bad : {bad}
      <br />
      all : 0
      <br />
      Avarage : 0
      <br />
      Positive : 0
  </div>
  )
}

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

  const goodClick = () => {
    setGood(good + 1);
  }

  const neutralClick = () => {
    setNeutral(neutral + 1);
  }

  const badClick = () => {
    setBad(bad + 1);
  }

  return(
    <div>
      <h2>Give FeedBack</h2>
      <Button onClick={goodClick} title="Good" />
      <Button onClick={neutralClick} title="Neutral" />
      <Button onClick={badClick} title="Bad" />
      <Statistics />
    </div>
  )

}


export default App;