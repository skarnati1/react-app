import React from 'react'
import {useRouteError} from 'react-router-dom';

const Error = () => {
    const err = useRouteError();
    
  return (
    <div>
        <h1>OOps!!</h1>
        <h3>you have reached Error page</h3>
        <h4>Error Code: {err.status}</h4> 
    </div>
  )
}

export default Error