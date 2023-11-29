import React from 'react'
import { Routes, Route } from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './/pages/LoginPage'
import Navigation from './components/Navigation'

const App = () => {


  return (
    <>
      <div className='app-container'>
        <header>
          <Navigation />
        </header>
        <main>
          <Routes>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
          </Routes>
        </main>
      </div>
    </>
  )
}

export default App