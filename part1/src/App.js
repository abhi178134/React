import React, {useState} from 'react'

const Statistic = ({text,value}) => {
  return (
    <div>
      <tr>
        <td  width="60">{text}</td>
        <td>{value}</td>
      </tr>
    </div>
  )
}
const Statistics = ({good,neutral,bad,total}) => {
  if(total === 0)
  {
    return (
      <div>
        <h2>
          statistics
        </h2>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <h2>statistics</h2>
      <table>
        <Statistic text="good" value ={good} />
        <Statistic text="neutral" value ={neutral} />
        <Statistic text="bad" value ={bad} />
        <Statistic text="all" value={total} />
      <Statistic text="average" value ={(good-bad)/total} />
      <tr> <td width="50">positive</td><td>{(good*100)/total} %</td>
      </tr>
      </table>
    </div>
  )
}
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const [good,setGood]=useState(0)
  const [neutral,setNeutral]=useState(0)
  const[bad,setBad]=useState(0)

  const handleGood = () => setGood(good+1)
  const handleNeutral =() => setNeutral(neutral+1)
  const handleBad =() => setBad(bad+1)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGood} text = 'Good'/>
      <Button handleClick={handleNeutral} text='Neutral' />
      <Button handleClick={handleBad} text='Bad' />
      <Statistics good={good} neutral={neutral} bad={bad} total = {good+neutral+bad}/>

      
{/* 
      <Display counter ={counter}/>
      <Button 
        handleClick={increaseByOne}
        text='plus'
      />
      <Button 
        handleClick={setToZero}
        text='Zero'
      /> 
      <Button
        handleClick={decrementByOne}
        text='Minus'
      /> */}
      </div>
    
  )
}

export default App