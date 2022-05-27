import React, { useState, useEffect } from 'react'
import { UsersList } from './components/UsersList'
import { UserContext } from './components/UserContext'
import { Input } from './components/Input'
import { RequestStatus } from './components/RequestStatus'
import { Header } from './components/Header'

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [isEmpty, setIsEmpty] = useState(true)
  const [query, setQuery] = useState('')
  const [users, setUsers] = useState([])

  const inputHandler = (e) => setQuery(e.target.value)

  const url = `https://api.github.com/search/users?q=${query}`

  useEffect(() => {
    setIsLoading(true)
    if (query !== '') {
      fetch(url)
        .then((resp) => {
          if (resp.status >= 200 && resp.status <= 299) {
            return resp.json()
          } else {
            setIsLoading(false)
            setIsError(true)
            setIsEmpty(false)
            throw new Error(resp.statusText)
          }
        })

        .then((data) => {
          const users = data.items
          setUsers(users)
          setIsEmpty(false)
          setIsLoading(false)
        })
        .catch((error) => console.log(error))
    } else {
      setIsLoading(false)
      setIsEmpty(true)
    }
  }, [query, url])

  const contextValue = {
    inputHandler: inputHandler,
    users: users,
    title: 'GitHub user searcher',
  }

  return (
    <UserContext.Provider value={contextValue}>
      <div className='container'>
        <Header />
        <Input />
        {isLoading && <RequestStatus status={'LOADING ...'} />}
        {isError && <RequestStatus status={'ERROR ... 404. Bad request'} />}
        {isEmpty ? (
          <RequestStatus status={'EMPTY IMPUT ... Type to start searching'} />
        ) : (
          <UsersList />
        )}
      </div>
    </UserContext.Provider>
  )
}

export default App
