import React, { useContext } from 'react'

import AlertContext from './Context/Alert/AlertContext'
import { BsFillExclamationTriangleFill} from 'react-icons/bs'

const Alert = () => {
  const {alert} = useContext(AlertContext)
    return alert !== null && (
    <p className="flex items-start items-center mb-4 ml-16 space-x-2">

        {alert.type === 'error' &&(
            <BsFillExclamationTriangleFill style={{color:'red'}}/>
        )}
        <p className='flex-1 text-base font-semibold text-red-500'>  
         {alert.msg}
        </p>
 
    </p>
  )
}

export default Alert