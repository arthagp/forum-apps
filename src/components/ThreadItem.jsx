// terhdapat category title, thread title, body thread, footer thread

import React from 'react'
import HeaderThread from './HeaderThread'
import BodyThread from './BodyThread'
import FooterThread from './FooterThread'

const ThreadItem = () => {
  return (
    <div className='thread-item'>
      <HeaderThread />
      {/* body */}
      <BodyThread />
      {/* footer */}
      <FooterThread />
    </div>
  )
}

export default ThreadItem