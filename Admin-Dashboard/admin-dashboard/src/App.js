import React from 'react'
import Home from './pages/home/Home'
import Single from './pages/single/Single'
import New from './pages/new/New'
import Login from './pages/login/Login'
import List from './pages/list/List'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


const App = () => {
  return <>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/users' index element={<List />} />
        <Route path='/users/userId' index element={<Single />} />
        <Route path='/users/new' element={<New />} />
        <Route path='/products' element={<List />} />
        <Route path='/products/productId' element={<Single />} />
        <Route path='/products/new' element={<New />} />
      </Routes>
    </Router>
  </>
}

export default App
