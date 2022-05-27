import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const UsersList = () => {
  const { users } = useContext(UserContext)
  return (
    <ul className='users'>
      {users.map(({ id, login, avatar_url }) => (
        <li className='item' key={id}>
          <h4>{login}</h4>
          <img className='img' src={avatar_url} alt='login' />
        </li>
      ))}
    </ul>
  )
}
