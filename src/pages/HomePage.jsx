import React, { useEffect } from 'react';
import ListThread from '../components/ListThread';
import { useDispatch, useSelector } from 'react-redux'
import { asyncPopulateUsersAndThreads } from '../states/shared/action';
import { IoIosAddCircle } from "react-icons/io";
import { useNavigate } from 'react-router-dom'
import Category from '../components/Category';

function HomePage() {
  const {
    threads = [],
    users = [],
    authUser = null
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

  // membuat agar jika category di klik maka terselect dan berubah warna menjadi dark blue untuk background dan color berubah white
  return (
    <section className="thread-container">
      <div className="threads">
        <header>
          <h2>Kategoru Popular</h2>
          <div className='category-list'>
            {
              threadList.map(thread => (
                <Category key={thread.id} {...thread} />
              ))
            }
          </div>
        </header>
        <ListThread threads={threadList} />
      </div>
      <button className='add-thread' onClick={linkAddThread}>
        {authUser !== null ? (
          <IoIosAddCircle size={50} />
        ) : null}
      </button>
    </section>
  );
}

export default HomePage;
