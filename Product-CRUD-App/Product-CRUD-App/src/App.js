import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import CreateProduct from './Product/CreateProduct'
import ProductList from './Product/ProductList'
import Home from './Product/Home'
import Admin from '../src/Product/Admin'
import Edit from '../src/Product/Edit'


const App = () => {
    return <>
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/product' element={<CreateProduct />} />
                <Route path='/list' element={<ProductList />} />
                <Route path='/admin' element={<Admin/>} />
                <Route path='/edit/:id' element={<Edit/>} />
            </Routes>
        </Router>
    </>

}

export default App
