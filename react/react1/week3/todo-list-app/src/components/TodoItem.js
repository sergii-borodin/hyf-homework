import React, { useState } from 'react'

const TodoItem = (props) => {
  const { id, description, isComplited, deadline } = props.todo

  const [isEditMode, setIsEditMode] = useState(false)
  const editModeHandler = () => setIsEditMode(!isEditMode)

  const editHandler = (e) => {
    const editedDescription = e.target.value
    console.log(editedDescription)
    // if (editedDescription.length === 0) {
    //   const disableButton = () => {
    //     return false
    //   }
    // }
    props.changeDescription(id, editedDescription)
  }
  return (
    <>
      {isEditMode ? (
        <div className='item' key={id}>
          <input
            type='text'
            className='input'
            value={description}
            placeholder={!description.length ? 'Type a new task' : null}
            onChange={editHandler}
          />
          <input
            className='checkbox'
            type='checkbox'
            onClick={() => {
              props.setTodoAsCompleted(id)
            }}
          />
          <button className='button' onClick={() => props.deleteTodoById(id)}>
            delete
          </button>
          <button
            className='button'
            disabled={description.length ? false : true}
            style={!description.length ? { opacity: '0.5' } : { opacity: '1' }}
            onClick={editModeHandler}
          >
            Update
          </button>
        </div>
      ) : (
        <div className='item' key={id}>
          <h4 className={isComplited ? 'complited' : 'notComplited'}>
            {description} | {deadline}
          </h4>
          <input
            className='checkbox'
            type='checkbox'
            onClick={() => {
              props.setTodoAsCompleted(id)
            }}
          />
          <button className='button' onClick={() => props.deleteTodoById(id)}>
            delete
          </button>
          <button className='button' onClick={editModeHandler}>
            Edit
          </button>
        </div>
      )}
    </>
  )
}

export default TodoItem
