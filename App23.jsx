import React from 'react';
import { useState } from 'react';
import { ReactDOM } from 'react';
import Course from './components/Course';
import Course23 from './components/Course23';
//App23 to just sho the use of the coure when implementing the reduce method!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//:!!!!!!!!
const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course23 course={course} />
}

export default App

