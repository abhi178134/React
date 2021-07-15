import React, { useState } from 'react'
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients'
  ]

  const [allVotes, setAllVotes] = useState(Array(6).fill(0))
  const [selected, setSelected] = useState(0)
  const handleSelected = () => {
    setSelected(Math.floor(Math.random()*anecdotes.length))
  }
  const handleVote = () => {
      const copy = [...allVotes]
      copy[selected]+=1
      setAllVotes(copy)
  }
  return (
    <div>
      {anecdotes[selected]} has  {allVotes[selected]} votes
      <br/>
      <Button handleClick={handleVote} text="Vote"/>
      <Button handleClick={handleSelected} text = 'Next Anecdote'/>
    </div>
  )
}

export default App
// import React, {useState} from 'react'

// const Statistic = ({text,value}) => {
//   return (
//     <div>
//       <tr>
//         <td  width="60">{text}</td>
//         <td>{value}</td>
//       </tr>
//     </div>
//   )
// }
// const Statistics = ({good,neutral,bad,total}) => {
//   if(total === 0)
//   {
//     return (
//       <div>
//         <h2>
//           statistics
//         </h2>
//         <p>No feedback given</p>
//       </div>
//     )
//   }
//   return (
//     <div>
//       <h2>statistics</h2>
//       <table>
//         <Statistic text="good" value ={good} />
//         <Statistic text="neutral" value ={neutral} />
//         <Statistic text="bad" value ={bad} />
//         <Statistic text="all" value={total} />
//       <Statistic text="average" value ={(good-bad)/total} />
//       <tr> <td width="50">positive</td><td>{(good*100)/total} %</td>
//       </tr>
//       </table>
//     </div>
//   )
// }
// const Button = ({ handleClick, text }) => (
//   <button onClick={handleClick}>
//     {text}
//   </button>
// )

// const App = () => {
//   const [good,setGood]=useState(0)
//   const [neutral,setNeutral]=useState(0)
//   const[bad,setBad]=useState(0)

//   const handleGood = () => setGood(good+1)
//   const handleNeutral =() => setNeutral(neutral+1)
//   const handleBad =() => setBad(bad+1)

//   return (
//     <div>
//       <h1>give feedback</h1>
//       <Button handleClick={handleGood} text = 'Good'/>
//       <Button handleClick={handleNeutral} text='Neutral' />
//       <Button handleClick={handleBad} text='Bad' />
//       <Statistics good={good} neutral={neutral} bad={bad} total = {good+neutral+bad}/>

      
// {/* 
//       <Display counter ={counter}/>
//       <Button 
//         handleClick={increaseByOne}
//         text='plus'
//       />
//       <Button 
//         handleClick={setToZero}
//         text='Zero'
//       /> 
//       <Button
//         handleClick={decrementByOne}
//         text='Minus'
//       /> */}
//       </div>
    
//   )
// }

// export default App