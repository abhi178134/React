import React from 'react'
import Content from './Content'
import Total from './Total'
import Header from './Header'
const Course = ({ courses }) => {
    <div>
      {courses.map(course =>
      <div key ={course.id}>
        {course.name}
      </div>
      )}
      {courses.map(course => 
      <div key ={course.id}>
        <Header course ={course.name} />
        <Content parts ={course.parts} />
        <Total parts ={course} />
      </div>
      )}
    </div>
}
export default Course