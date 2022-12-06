import React from 'react'
import { Link } from 'react-router-dom'
import '../CSS/navbar.css'

const Navbar = () => {
  return <>
  <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
    <Link to="/" className="navbar-brand" >Grocery-Store</Link>
    <div className='ml-auto'>
        <ul className='navbar-nav'>
            {/* <li className='nav-list'><Link to="/home" className="nav-link">Home</Link></li> */}
            <li className='nav-list'><Link to="/product" className="nav-link">Product</Link></li>
            <li className='nav-list'><Link to="/list" className="nav-link">Product List</Link></li>
            <li className='nav-list'><Link to="/admin" className="nav-link">Admin</Link></li>
        </ul>
    </div>
  </nav>
  </>
}

export default Navbar
