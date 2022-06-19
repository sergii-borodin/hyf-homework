import TodoItem from './TodoItem'
import Wrapper from './Wrapper'

const TodoList = (props) => {
  return (
    <>
      {props.todos.length ? (
        props.todos.map((todo) => {
          return (
            <Wrapper key={todo.id}>
              <TodoItem
                todo={todo}
                key={todo.id}
                deleteTodoById={props.deleteTodoById}
                setTodoAsCompleted={props.setTodoAsCompleted}
                changeDescription={props.changeDescription}
              />
            </Wrapper>
          )
        })
      ) : (
        <h2>No items in your To-do list</h2>
      )}
    </>
  )
}

export default TodoList
