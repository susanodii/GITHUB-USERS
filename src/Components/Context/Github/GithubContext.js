import GithubReducer from './GithubReducer'
import { createContext } from 'react'
import { useReducer } from 'react'

// import {useState} from "react";

const GithubContext = createContext()
const GITHUB_BASE_URL = process.env.REACT_APP_GITHUB_BASE_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN



export const GithubProvider = ({ children }) => {
  //     const [users, setUsers] = useState([])
  //    const [isLoading, setIsLoading] = useState(true)

  const initialState = {
    users: [],
    isLoading: false,
  }

  const [state, dispatch] = useReducer(GithubReducer, initialState)
   
//   pure fuction is loading
  const setIsLoading = () =>dispatch({
    type: 'SET_LOADING',
  })

  // clear users
  const clearUsers = ()=> dispatch({
    type:'CLEAR_USERS'
  })

  const fetchUsers = async (text) => {
     setIsLoading()
   
    const params = new URLSearchParams({q:text })
    const res = await fetch(`${GITHUB_BASE_URL}/search/users?${params}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
        'Content-Type': `application/json`
      },
    })

    const { items } = await res.json()

    dispatch({
      type: 'GET_USERS',
      payload: items,
    })
  }

 
  return (
    <GithubContext.Provider
      value={{
        ...state,
        users: state.users,
        isLoading: state.isLoading,
        clearUsers,
        fetchUsers,
       
      }}
    >
      {children}
    </GithubContext.Provider>
  )
}

export default GithubContext
