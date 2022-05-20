import React, { useState } from 'react'
import { initialTodos } from './todos'

const Input = () => {
  const [valueState, setValueState] = useState('')
  const [todos, setTodos] = useState(initialTodos)
  const createNewTodo = () => {
    const newTodo = {
      id: todos[todos.length - 1].id + 1,
      description: valueState,
    }
    setTodos((prevTodos) => {
      return [...prevTodos, newTodo]
    })
    console.log(todos)
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
