import React from 'react'

const Header = (props) => {
  return (
    <div>
      <p>
        {props.course}
      </p>
    </div>
  )
}
const Part = (props) => {
  return (
    <div>
      <p>
        {props.content}  {props.total}        
      </p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  
  return (
    <div>
      <Header course = {course} />
      <Part content = {part1} total = {exercises1} />
      <Part content = {part2} total = {exercises2} />
      <Part content = {part3} total = {exercises3} />
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

export default App