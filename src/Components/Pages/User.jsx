import {FaCode, FaStore, FaUserFriends, FaUsers} from 'react-icons/fa'
import {Link, useParams} from 'react-router-dom'
import {useContext, useEffect} from 'react'

import GithubContext from '../Context/Github/GithubContext'
import Spinner from '../Asset/Spinner'

const User = () => {
  const {getUser, user, isLoading} = useContext(GithubContext)
  const params = useParams()
  console.log(user,  'initial users' )
 
  useEffect(()=>{
getUser(params.login);

  }, [])

  if(isLoading){
    return<Spinner/>
  }

  // distructuture the user data from api
  const {name, type, avatar_url, location, bio, blog, twitter_username, login, html_url, followers, following, public_repos, public_gists, hireable} = user

  return (

    < >
    <div className="w-full mx-auto lg:w-10/12">

      <div className='mb-4'>
        <Link to='/' className='btn btn-ghost'>
        Back to Search Page
        </Link>
        <div className='grid grid-cols-1 xl:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8 '>
        <div className='custom-card-image mb-6'>
<div className='rounded-lg shadow-xl card-image-full'>
  <figure>
    <img src={avatar_url} alt='user-profile pics'/>
  </figure>
<div className="card-body justify-end"></div>
<h2 className='card-title mb-0'>
{name}
</h2>
<p>
  {login}
</p>
</div>
</div>
        </div>

      </div>
    </div>
    
    </>
    
  )
}

export default User