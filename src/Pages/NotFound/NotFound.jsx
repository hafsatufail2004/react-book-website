import React from 'react'

import "./NotFound.css"
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className='Not-Found'>
     <div className="container notfound-conatiner">
      <h1>404</h1>
      <h3>Opps! This page is not found... </h3>
<Link to={'/'} className='btn btn-border'>Go To Home</Link>
     </div>
    </div>
  )
}
