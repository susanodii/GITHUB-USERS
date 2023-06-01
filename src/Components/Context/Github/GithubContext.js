import GithubReducer from './GithubReducer'
import { createContext } from 'react'
import { useReducer } from 'react'
import axios from 'axios'

// import {useState} from "react";

const GithubContext = createContext()
const GITHUB_BASE_URL = process.env.REACT_APP_GITHUB_BASE_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN


const github= axios.create({
  baseURL:GITHUB_BASE_URL,
  headers: {Authorization: `token ${GITHUB_TOKEN}`},
})
export const GithubProvider = ({ children }) => {
  //     const [users, setUsers] = useState([])
  //    const [isLoading, setIsLoading] = useState(true)

  const initialState = {
    users: [],
    user:{},
    isLoading: false,
    repos:[],
  }

  const [state, dispatch] = useReducer(GithubReducer, initialState)

  //   pure fuction is loading
  const setIsLoading = () =>
    dispatch({
      type: 'SET_LOADING',
    })

  // clear users
  const clearUsers = () =>
    dispatch({
      type: 'CLEAR_USERS',
    })
    

  const fetchUsers = async (text) => {
    setIsLoading()

    const params = new URLSearchParams({ q: text })

    const res=await github.get(`/search/users?${params}`)
    const items= res.data.items
    dispatch({
      type:'GET_USERS',
      payload:items
    })

    // using fetch api to get data from the end point
  //   const res = await fetch(`${GITHUB_BASE_URL}/search/users?${params}`, {
  //     headers: {
  //       Authorization: `token ${GITHUB_TOKEN}`,
        
  //     },
  //   })

  //   const { items } = await res.json()

  //   dispatch({
  //     type: 'GET_USERS',
  //     payload: items,
  //   })
   }

  
  // function to get a single user
  const getUser= async(login)=>{
    setIsLoading()
// using axios



    const res = await github.get(`/users/${login}`)

    
    if(res.status ===404){
      window.location ='/notfound'
    }else{
      const data =  res.data
      
      dispatch({
        type: 'GET_USER',
      payload: data,
     })
    }

// using fetch api to get data from the end point
    // const res = await fetch(`${GITHUB_BASE_URL}/users/${login}`, {

    //   headers: {
    //     Authorization:`token ${GITHUB_TOKEN}`,
    //      'Content-Type': `application/json`,
    //     }
    // })

    // if(res.status ===404){
    //   window.location ='/notfound'
    // }else{
    //   const data = await res.json()
      
    //   dispatch({
    //     type: 'GET_USER',
    //   payload: data,
    //  })
    // }
}

// function to get user repositories

const getUserRepos = async(login)=>{
  setIsLoading()
  const params = new URLSearchParams({
    sort:'created',
    per_page:5,
})

const res = await github.get(`/users/${login}/repos?${params}`)

const data =  res.data

dispatch({
  type:'GET_REPOS',
  payload:data,
})
// using fetch api to get data from the end point
// const res= await fetch(`${GITHUB_BASE_URL}/users/${login}/repos?${params}`, {
//   headers:{
//     Authorization:`token ${GITHUB_TOKEN}`,
//          'Content-Type': `application/json`,
//   },
// })

// const data = await res.json()

// dispatch({
//   type:'GET_REPOS',
//   payload:data,
// })
}
  return (
    <GithubContext.Provider
      value={{
        ...state,
      //   users: state.users,
      //   user:state.user,
      //  repos:state.repos,
      //   isLoading: state.isLoading,
        fetchUsers,
        clearUsers,
        getUser,
        getUserRepos
        
      }}
    >
      {children}
    </GithubContext.Provider>
  )
}

export default GithubContext
