import React, { useEffect } from 'react';
import ListThread from '../components/ListThread';
import { useDispatch, useSelector } from 'react-redux'
import { asyncPopulateUsersAndThreads } from '../states/shared/action';

function HomePage() {
  const {
    threads = [],
    users = [],
  } = useSelector((states) => states)


  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads())
  }, [dispatch])

  const threadList = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
  }))

  // console.log(threadList, 'HOMEPAGE')

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
