import React from 'react'
import {NavLink} from 'react-router-dom'
const error = () => {
    return (
        <>
        <div className="container">
            <h1 className='error'>error 404</h1>
           
        </div>
        <div className="App">
       <h1>Page not Found</h1><br /><br />
        <NavLink to="/" className="btn btn-success " >Go to HomePage</NavLink>
        </div>
        </>
    )
}

export default error
