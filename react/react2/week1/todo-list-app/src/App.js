import React, { useState, useEffect } from 'react'
import './App.css'

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
            throw new Error(resp.statusText)
          }
        })

        .then((data) => {
          const users = data.items
          setUsers(users)
          console.log(users)
          setIsEmpty(false)
          setIsLoading(false)
        })
        .catch((error) => console.log(error))
    } else {
      setIsLoading(false)
      setIsEmpty(true)
    }
  }, [query, url])

  if (isLoading) {
    return (
      <>
        <input type='text' onChange={inputHandler} />
        <Header status={'LOADING ...'} />
      </>
    )
  }
  if (isError) {
    return (
      <>
        <input type='text' onChange={inputHandler} />
        <Header status={'ERROR ... 404. Bad request'} />
      </>
    )
  }
  if (isEmpty) {
    return (
      <>
        <input type='text' onChange={inputHandler} />
        <Header status={'EMPTY IMPUT ... Type to start searching'} />
      </>
    )
  }
  return (
    <>
      <input type='text' onChange={inputHandler} />
      <UsersList users={users} />
    </>
  )
}

const Header = ({ status }) => {
  return (
    <div>
      <h2>{status}</h2>
    </div>
  )
}

const UsersList = ({ users }) => {
  console.log(users)
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.login}</li>
      ))}
    </ul>
  )
}

// function App() {
//   const [query, setQuery] = useState('')
//   const [users, setUsers] = useState([])
//   const [requestState, setRequestState] = useState('initial')

//   const inputChangeHandler = (e) => {
//     setQuery(e.target.value)
//   }

//   useEffect(() => {
//     const url = `https://api.github.com/search/usrs?q=${query}`
//     const getData = async () => {
//       if (query !== '') {
//         setRequestState('loading')
//         const response = await fetch(url)
//         if (!response.ok) {
//           const message = `An error has occured: ${response.status}`
//           setRequestState('error')
//           throw new Error(message)
//         }
//         console.log('response', response)
//         console.log('url', url)
//         const data = await response.json()

//         if (data && data.message !== 'Not Found') {
//           const users = data.items

//           const usersArr = users.map((user) => user.login)
//           setUsers(usersArr)
//           setRequestState('success')
//         }
//       } else {
//         console.log("User doesn't exist")
//         setRequestState('empty imput')
//       }
//     }
//     getData()
//   }, [query])

//   console.log('users', users)

//   console.log('query', query)

//   const isLoading = requestState === 'initial' || requestState === 'loading'
//   const isError = requestState === 'error'
//   const isEmpty = requestState === 'empty imput'
//   return (
//     <div className='App'>
//       <h1>GitHub User Searcher</h1>
//       <input
//         type='select'
//         name='users'
//         id='users'
//         placeholder='search'
//         onChange={inputChangeHandler}
//         onKeyUp={inputChangeHandler}
//         onPaste={inputChangeHandler}
//       />
//       <h4>Search status : {requestState}</h4>
//       <ul>
//         {isLoading ? (
//           <li>LOADING ....</li>
//         ) : (
//           users.map((user, i) => {
//             console.log('user', user)
//             return <li key={i}>{user}</li>
//           })
//         )}
//       </ul>
//     </div>
//   )
// }

export default App
