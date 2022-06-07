import React, { useState, useEffect } from 'react'
import { UsersList } from './components/UsersList'
import { UserContext } from './components/UserContext'
import { Input } from './components/Input'
import { RequestStatus } from './components/RequestStatus'
import { Header } from './components/Header'

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [query, setQuery] = useState('')
  const [users, setUsers] = useState([])

  const inputHandler = (e) => setQuery(e.target.value)

  const url = `https://api.github.com/search/users?q=${query}`

  useEffect(() => {
    setIsLoading(true)
    if (query !== '') {
      fetch(url)
        .then((response) => {
          if (response.status >= 200 && response.status <= 299) {
            return response.json()
          } else {
            setIsLoading(false)
            setIsError(true)
            throw new Error(response.statusText)
          }
        })

        .then((data) => {
          const users = data.items
          setUsers(users)
          setIsLoading(false)
        })
        .catch((error) => console.log(error))
    } else {
      setIsLoading(false)
      setUsers([])
    }
  }, [query, url])

  const contextValue = {
    inputHandler: inputHandler,
    users: users,
  }

  return (
    <UserContext.Provider value={contextValue}>
      <div className='container'>
        <Header />
        <Input />
        {isLoading && <RequestStatus status={'LOADING ...'} />}
        {isError && <RequestStatus status={'ERROR ... 404. Bad request'} />}
        {users.length === 0 ? (
          <RequestStatus status={'No results...'} />
        ) : (
          <UsersList />
        )}
      </div>
    </UserContext.Provider>
  )
}

export default App
