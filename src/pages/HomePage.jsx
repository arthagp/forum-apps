import React, { useEffect } from 'react';
import ListThread from '../components/ListThread';
import { useDispatch, useSelector } from 'react-redux'
import { asyncPopulateUsersAndThreads } from '../states/shared/action';
import { IoIosAddCircle } from "react-icons/io";
import { useNavigate } from 'react-router-dom'

function HomePage() {
  const {
    threads = [],
    users = [],
  } = useSelector((states) => states)


  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads())
  }, [dispatch])

  const linkAddThread = () => {
    navigate('/add')
  }

  const threadList = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
  }))

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
      <button className='add-thread' onClick={linkAddThread}>
        <IoIosAddCircle size={50} />
      </button>
    </section>
  );
}

export default HomePage;
