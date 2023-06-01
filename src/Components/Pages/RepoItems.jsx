import React from 'react'

import {FaEye, FaInfo, FaLink, FaStar, FaUtensils} from 'react-icons/fa'
import PropTypes from 'prop-types'

const RepoItems = ({repo}) => {
  
    const {name, description, html_url, forks, open_issues, watchers_count, stargazers_count} = repo
  
    return (
    <div className='mb-2 rounded-md card bg-white hover:bg-gray-300 text-neutral '>
    
    
    <div className='card-body'>

        <h3 className='mb-2 text-ml font-semibold'>
<a href={html_url} target='_blank' rel='noreferrer'>
    
    <FaLink className='inline mr-2'/>
    {name}</a>
        </h3>
        <p className='mb-3'> {description}</p>
    </div>
<div>
<div className=' m-2 mr-2 badge-info badge badge-info badge-lg text-black'>

<FaEye className='mr-2'/>
{watchers_count}
    </div>

    <div className=' m-2 mr-2 badge-info badge badge-info badge-lg text-black'>

<FaUtensils className='mr-2'/>
{forks}
    </div>

    <div className=' m-2 mr-2 badge-info badge badge-success badge-lg text-black'>

<FaStar className='mr-2'/>
{stargazers_count}
    </div>

    <div className='m-2 mr-2 badge-info badge badge-error badge-lg text-black'>

<FaInfo className='mr-2'/>
{open_issues}
    </div>

</div>
   

    </div>
  )
}

RepoItems.propTypes ={
    repo:PropTypes.object.isRequired
}
export default RepoItems