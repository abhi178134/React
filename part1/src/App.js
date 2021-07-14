import React, {useState} from 'react'

const App = () => {
  const [ counter, setCounter ] = useState(0)

  const increaseByOne =() => setCounter(counter+1)
  const decrementByOne =() => setCounter(counter-1)
  const setToZero =() => setCounter(0)
  
  const Display = ({ counter }) => <div>{counter}</div>
  
  const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
      {text}
    </button>
  )

  return (
    <div>
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
      />
      </div>
    
  )
}

export default App