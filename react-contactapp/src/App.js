import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import ContactApp from './ContactApp/ContactApp'
import ProductApp from './ProductApp/ProductApp'
import ItemApp from './ItemApp/ItemApp'



class App extends React.Component {
    render() {
        return <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="contact" element={<ContactApp />} />
                    <Route path="product" element={<ProductApp />} />
                    <Route path="item" element={<ItemApp />} />
                    
                </Routes>
            </Router>
        </>
    }
}
export default App