import { useContext, useState } from 'react'

import AlertContext from './Context/Alert/AlertContext'
import GithubContext from './Context/Github/GithubContext'

const UserSearch = () => {
  const [text, setText] = useState('')

  const {users, fetchUsers, clearUsers} = useContext(GithubContext)
  const {setAlert} = useContext(AlertContext)
  console.log(users, 'initial users' )
  const handleChange = (e) => setText(e.target.value)
// console.log(users);
  // handle submit button
  const handleSubmit = (e) => {
    e.preventDefault()
    if (text === '') {
      setAlert('Kindly input a search word', 'error')
    } else {
      // search users
      fetchUsers(text)
      setText('')
      // console.log(users, 'check users');
    }
    // console.log(setAlert); 
  }
  
  
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            
            <div className="relative ml-16">
              <input
                type="text"
                className="w-full pr-40 bg-gray-700 input input-lg text-white   "
                placeholder="Search for a user"
                value={text}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg "
              >
                {' '}
                Search
              </button>
            </div>
          </div>
        </form>
      </div>

    {users?.length > 0 && (
          <div>
          <button onClick={clearUsers} className="btn btn-ghost btn-lg text-white bg-gray-700">
            Clear
          </button>
        </div>
  )
        
    }
    </div>
  )
}

export default UserSearch
