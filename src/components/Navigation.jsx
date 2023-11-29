import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div className='navigation'>
      <h1>Forum Apps <span className='_dot'>.</span></h1>
      <nav>
        <ul>
          <li><Link to={'/'}>Thread</Link></li>
          <li><Link to={'/leaderboards'}>Leader Board</Link></li>
        </ul>
        <Link className='btn-login'>Login</Link>
      </nav>
    </div>
  )
}

export default Navigation