import React, { useState } from 'react'
import { todos } from './todos'

const TodoList = () => {
  //   mark a To-do as done
  const [todosState, setTodosState] = useState(todos)
  console.log(todosState)
  const setTodoAsCompleted = (id) => {
    let newTodosState = todosState.map((todo) => {
      if (id === todo.id) {
        if (todo.isComplited === false) {
          todo.isComplited = true
          return todo
        } else {
          todo.isComplited = false
          return todo
        }
      }
      return todo
    })
    setTodosState(newTodosState)
  }
  // delete a To-do item by id
  const deleteTodoById = (id) => {
    setTodosState((todosState) => {
      let newTodosState = todosState.filter((todo) => todo.id !== id)
      return newTodosState
    })
  }
  // add new To-do item to the list
  const addNewTodo = () => {
    const newTodo = {
      id: todosState.length + 1,
      description: 'random Todo',
      isComplited: false,
    }
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
      {todosState.length ? (
        todosState.map((todo) => {
          const { id, description, isComplited } = todo
          return (
            <div className='item' key={id}>
              <h4 className={isComplited ? 'complited' : 'notComplited'}>
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
        })
      ) : (
        <h2>No items in your To-do list</h2>
      )}
      {}
    </>
  )
}

export default TodoList
