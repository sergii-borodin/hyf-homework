import React, { useState } from 'react'
import { initialTodos } from './todos'

const TodoList = () => {
  //   mark a To-do as done
  const [todos, setTodos] = useState(initialTodos)
  const setTodoAsCompleted = (id) => {
    let newTodosState = todos.map((todo) => {
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
    setTodos(newTodosState)
  }
  // delete a To-do item by id
  const deleteTodoById = (id) => {
    setTodos((todosState) => {
      let newTodosState = todosState.filter((todo) => todo.id !== id)
      return newTodosState
    })
  }
  // add new To-do item to the list
  const addNewTodo = () => {
    const newTodo = {
      id: todos[todos.length - 1].id + 1,
      description: 'random Todo',
      isComplited: false,
    }
    setTodos((prevTodoState) => [...prevTodoState, newTodo])
  }
  return (
    <>
      <button className='button' onClick={() => addNewTodo()}>
        Add New Todo
      </button>
      <button className='button' onClick={() => setTodos([])}>
        Delete all
      </button>
      {todos.length ? (
        todos.map((todo) => {
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
