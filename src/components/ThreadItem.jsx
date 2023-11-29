// terhdapat category title, thread title, body thread, footer thread

import React from 'react'

const ThreadItem = () => {
  return (
    <div className='thread-item'>
        <header className='thread-item__header'>
            <span>#redux</span>
            <h3>Bagaiamana menurutmu redux itu bekerja??</h3>
        </header>
        {/* body */}
        <div className='thread-item__body'>
            Coba dong ceritakan pengalaman kamu bagaiaman redux itu bekerja, karena menurutku redux ini cukup sulit..
        </div>
        {/* footer */}
        <footer className='thread-item__footer'>
            <button>Up Vote</button>
            <button>Down Vote</button>
            <p>Total Comments</p>
            <p>50 hari lalu</p>
            <p>Item Owner</p>
        </footer>
    </div>
  )
}

export default ThreadItem