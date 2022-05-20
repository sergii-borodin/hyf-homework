import React, { useState } from 'react'

const AddTodo = ({ todos, createTodo }) => {
  // const todoDeadline = () => new Date().toISOString().slice(0, 10)
  const [input, setInput] = useState('')
  const [deadline, setDeadline] = useState(
    new Date().toISOString().slice(0, 10)
  )

  const createNewTodo = () => {
    const newTodo = {
      id: todos[todos.length - 1].id + 1,
      description: input,
      deadline: deadline,
      isComplited: false,
    }
    if (newTodo.description !== '') {
      // const currentTime = () => new Date().toISOString().slice(0, 10)
      if (newTodo.deadline >= new Date().toISOString().slice(0, 10)) {
        createTodo(newTodo)
        setInput('')
        setDeadline(new Date().toISOString().slice(0, 10))
      } else {
        alert('This deadline is not valid')
      }
    } else {
      alert('You have an empty todo! Description is required!')
    }
  }

  return (
    <>
      <h3>Create a New Todo</h3>
      <form className='form'>
        <div className='form_row'>
          <label className='label' htmlFor='todo_description'>
            Todo description
          </label>
          <input
            className='input'
            id='todo_description'
            name='todo_description'
            type='text'
            value={input}
            onChange={(e) => setInput(e.target.value)}
          ></input>
        </div>
        <div className='form_row'>
          <label className='label' htmlFor='deadline'>
            Deadline
          </label>
          <input
            className='input'
            type='date'
            name='deadline'
            id='deadline'
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
          />
        </div>
        <button className='button' type='button' onClick={createNewTodo}>
          OK
        </button>
      </form>
    </>
  )
}

export default AddTodo
