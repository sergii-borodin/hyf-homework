import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const Header = () => {
  const { title } = useContext(UserContext)
  return <h1>{title}</h1>
}
