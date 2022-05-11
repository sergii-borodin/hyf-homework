import React, { useState } from 'react'
import { todos } from './todos'

const Input = () => {
  const [valueState, setValueState] = useState('')
  const [currentTodo, setNewTodo] = useState(todos)
  const createNewTodo = () => {
    const newTodo = {
      id: currentTodo.length + 1,
      description: valueState,
    }
    setNewTodo((prevTodos) => {
      return [...prevTodos, newTodo]
    })
    console.log(currentTodo)
  }
  return (
    <div className='div'>
      <h4>Create a New Todo</h4>
      <input
        className='input'
        type='text'
        value={valueState}
        onChange={(e) => setValueState(e.target.value)}
      ></input>
      <button type='button' className='button' onClick={createNewTodo}>
        OK
      </button>
    </div>
  )
}

export default Input
