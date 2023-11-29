import React from 'react'
import ListThread from '../components/ListThread'

const HomePage = () => {
  return (
    <section className='thread-container'>
      <div className='threads'>
        <header>
          <h2>Kategoru Popular</h2>
          <div>
            <p>#redux</p>
            <p>#perkenalan</p>
          </div>
        </header>
        <ListThread />
        <ListThread />
        <ListThread />
      </div>
    </section>
  )
}

export default HomePage