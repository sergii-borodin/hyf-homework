import { useContext } from 'react'
import { UserContext } from './UserContext'

export const Input = () => {
  const { inputHandler } = useContext(UserContext)
  return <input className='input' type='text' onChange={inputHandler} />
}
