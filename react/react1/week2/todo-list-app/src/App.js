import './App.css'

import TodoList from './TodoList'
// import { useState } from 'react'
// import Input from './Input'

// const TodoList = () => {
//   const [todoState, setTodoState] = useState(todos)
//   const addTodo = () => {
//     const newTodo = { description: 'random text', id: todoState.length + 1 }
//     console.log(newTodo)
//     setTodoState((prevTodos) => {
//       return [...prevTodos, newTodo]
//     })
//   }
//   const Todo = () => {
//     return todoState.map((todo) => {
//       const { id, description } = todo
//       return (
//         <div className='item' key={id} id={id}>
//           <h4>{description}</h4>
//           <input className='checkbox' type='checkbox' />
//           <button>delete</button>
//         </div>
//       )
//     })
//   }
//   return (
//     <div>
//       <button className='button' onClick={addTodo}>
//         add todo
//       </button>
//       <Todo />
//     </div>
//   )
// }

function App() {
  return (
    <main>
      <section className='container'>
        <TodoList />
        {/* <Input /> */}
      </section>
    </main>
  )
}

export default App
