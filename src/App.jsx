import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import LeaderBoadPage from './pages/LeaderBoadPage';
import DetailThreadPage from './pages/DetailThreadPage';
import { useSelector, useDispatch } from 'react-redux';
import { asyncPreloadProcess } from './states/isPreload/action';
import { asyncUnsetAuthUser } from './states/authUser/action';
import { useNavigate } from 'react-router-dom'

function App() {
  const {
    authUser = null,
    isPreload = false
  } = useSelector((states) => states)

  const navigate = useNavigate()
  const dispatch = useDispatch(); // @TODO: get dispatch function from store

  useEffect(() => {
    // @TODO: dispatch async action to preload app
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  const onLogOut = () => {
    // @TODO: dispatch async action to sign out
    dispatch(asyncUnsetAuthUser());
    navigate('/login')
  };

  if (isPreload) {
    return null;
  }

  return (
    <div className="app-container">
      <header>
        <Navigation authUser={authUser} logOut={onLogOut} />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/leaderboards" element={<LeaderBoadPage />} />
          <Route path='/threads/:id' element={<DetailThreadPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
