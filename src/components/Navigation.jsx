import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div className='navigation'>
      <h1>Forum Apps <span className='_dot'>.</span></h1>
      <nav>
        <ul>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link>Thread</Link></li>
          <li><Link>Leader Board</Link></li>
        </ul>
        <Link className='btn-login'>Login</Link>
      </nav>
    </div>
  )
}

export default Navigation