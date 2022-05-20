import './App.css'
import TodoList from './TodoList'
import Timer from './Timer'

function App() {
  return (
    <main>
      <section className='container'>
        <Timer />
        <TodoList />
      </section>
    </main>
  )
}

export default App
