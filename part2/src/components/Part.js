import React from 'react'
const Part = ({part}) => {
  //console.log("PartWOrks");
  return (
    <p>
      {part.name} {part.exercises}
    </p>    
  )
}
export default Part