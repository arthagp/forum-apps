import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IoIosAddCircle } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';
import ListThread from '../components/ListThread';
import Category from '../components/Category';
import { asyncLikeThread, asyncUnLikeThread } from '../states/threads/action';

function HomePage() {
  const {
    threads = [],
    users = [],
    authUser,
  } = useSelector((states) => states);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const linkAddThread = () => {
    navigate('/add');
  };

  const onLike = (id) => {
    dispatch(asyncLikeThread(id));
  };

  const onUnLike = (id) => {
    dispatch(asyncUnLikeThread(id));
  };

  const threadList = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
    authUser: authUser?.id,
  }));

  return (
    <section className="thread-container">
      <div className="threads">
        <header>
          <h2>Kategoru Popular</h2>
          <div className="category-list">
            {
              threadList.map((thread) => (
                <Category key={thread.id} {...thread} />
              ))
            }
          </div>
        </header>
        <ListThread threads={threadList} like={onLike} unLike={onUnLike} />
      </div>
      <button className="add-thread" onClick={linkAddThread} type="button">
        {authUser !== null ? (
          <IoIosAddCircle size={50} />
        ) : null}
      </button>
    </section>
  );
}

export default HomePage;
