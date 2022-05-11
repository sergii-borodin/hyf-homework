import React, { useState } from 'react'
import { todos } from './todos'

const TodoList = () => {
  //   mark a To-do as done
  const [statusState, setStatusState] = useState(todos)

  const setTodoAsCompleted = (id) => {
    let newStatusState = statusState.map((todo) => {
      if (id === todo.id) {
        if (todo.isComplited === false) {
          return (todo.isComplited = true)
        } else {
          return (todo.isComplited = false)
        }
      }
      return todo
    })
    setStatusState((prevTodoState) => [...prevTodoState, newStatusState])
  }

  // delete a certain To-do item by id
  const [todosState, setTodosState] = useState(todos)
  const deleteTodoById = (id) => {
    let newTodosState = todosState.map((todo) => id !== todo.id)
    setTodosState(newTodosState)
  }
  // add new To-do item to the list
  const addNewTodo = () => {
    const newTodo = { id: todosState.length + 1, description: 'random Todo' }
    setTodosState((prevTodoState) => [...prevTodoState, newTodo])
  }
  return (
    <>
      <button className='button' onClick={() => addNewTodo()}>
        Add New Todo
      </button>
      <button className='button' onClick={() => setTodosState([])}>
        Delete all
      </button>
      {todosState.map((todo) => {
        const { id, description } = todo
        return (
          <div className='item' key={id}>
            <h4 className={todo.isComplited ? 'complited' : 'notComplited'}>
              {description}
            </h4>
            <input
              className='checkbox'
              type='checkbox'
              onClick={() => {
                setTodoAsCompleted(id)
              }}
            />
            <button className='button' onClick={() => deleteTodoById(id)}>
              delete
            </button>
          </div>
        )
      })}
    </>
  )
}

export default TodoList
