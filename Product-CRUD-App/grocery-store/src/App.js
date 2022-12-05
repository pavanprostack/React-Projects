import React from 'react'
import Navbar from './Navbar/Navbar'
import Home from './components/Home'
import CreateProduct from './components/CreateProduct'
import ProductList from './components/ProductList'
import Admin from './components/Admin'
import Edit from './components/Edit'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

const App = () => {
  return <>
  <Router>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/product' element={<CreateProduct/>}/>
      <Route path='/list' element={<ProductList/>}/>
      <Route path='/admin' element={<Admin/>}/>
      <Route path='/edit/:id' element={<Edit/>}/>
    </Routes>
  </Router>
  </>
}

export default App
