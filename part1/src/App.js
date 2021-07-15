import React, {useState} from 'react'



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
      <h2>statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      
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