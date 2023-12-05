import React, { useEffect, useState } from 'react';
import ListThread from '../components/ListThread';
import { useDispatch, useSelector } from 'react-redux'
import { asyncPopulateUsersAndThreads } from '../states/shared/action';
import api from '../utils/api';

function HomePage() {
  const {
    threads = [],
    users = [],
    authUser = null
  } = useSelector((states) => states)


  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads())
  }, [dispatch])

  const threadList = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
    authUser: authUser
  }))

  console.log(threadList[0], 'LIST 0')
  
  // console.log(authUser)

  return (
    <section className="thread-container">
      <div className="threads">
        <header>
          <h2>Kategoru Popular</h2>
          <div>
            <p>#redux</p>
            <p>#perkenalan</p>
          </div>
        </header>
        <ListThread threads={threadList} />
      </div>
    </section>
  );
}

export default HomePage;
