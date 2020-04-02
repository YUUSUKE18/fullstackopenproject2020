import React, {useState} from 'react';
import Statistics from './component/Statistics';
import Count from './component/Count';


const App = () => {
  const[good, setGood] = useState(0);
  const[neutral, setNeutral] = useState(0);
  const[bad, setBad] = useState(0);

  return(
    <div>
      <Count />
      <Statistics />
    </div>
  )

}


export default App;