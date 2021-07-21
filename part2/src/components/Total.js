import React from 'react'

const Total = ({parts}) => {
  let total = parts.reduce(function(acc,curr)
  {
    return acc + curr.exercises;
  },0);
// const sum = course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises
  return(
    <p>Number of exercises {total}</p>
  ) 
}
/* 
<div>
      {courses.map(course =>
      <div key ={course.id}>
        {course.name}
      </div>
      )}
*/
export default Total