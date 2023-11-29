import React from 'react'
import { Routes, Route } from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './/pages/LoginPage'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import LeaderBoadPage from './pages/LeaderBoadPage'

const App = () => {


  return (
    <>
      <div className='app-container'>
        <header>
          <Navigation />
        </header>
        <main>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/leaderboards' element={<LeaderBoadPage />} />
          </Routes>
        </main>
      </div>
    </>
  )
}

export default App