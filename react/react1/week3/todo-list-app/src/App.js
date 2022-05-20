import React, { useState, useEffect } from 'react'
import './App.css'
import TodoList from './components/TodoList'
import Timer from './components/Timer'
import Title from './components/Title'
import AddTodo from './components/AddTodo'

const url =
  'https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw'

function App() {
  //   mark a To-do as done
  const [todos, setTodos] = useState([])
  const getTodos = async () => {
    const response = await fetch(url)
    const data = await response.json()
    const modifiedData = data.map((todo) => ({
      ...todo,
      isComplited: false,
    }))
    setTodos(modifiedData)
  }
  useEffect((todos) => {
    getTodos(todos)
  }, [])

  const setTodoAsCompleted = (id) => {
    let newTodoStatus = todos.map((todo) => {
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
    setTodos(newTodoStatus)
  }

  // delete a To-do item by id
  const deleteTodoById = (id) => {
    setTodos((todosState) => {
      let newTodosState = todosState.filter((todo) => todo.id !== id)
      return newTodosState
    })
  }
  // callback function sends to AddTodo component to get new todo item back
  const createNewTodo = (newTodo) => setTodos([...todos, newTodo])

  // callback function sends to TodoItem component to get edited todo item back
  const changeDescription = (id, description) => {
    const newTodos = todos.map((aTodo) => {
      if (aTodo.id === id) {
        return { ...aTodo, description }
      } else {
        return aTodo
      }
    })
    setTodos(newTodos)
  }

  return (
    <main>
      <section className='container'>
        <Title />
        <Timer />
        <AddTodo todos={todos} createTodo={createNewTodo} />
        <TodoList
          todos={todos}
          deleteTodoById={deleteTodoById}
          setTodoAsCompleted={setTodoAsCompleted}
          changeDescription={changeDescription}
        />
      </section>
    </main>
  )
}

export default App
