import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return <>
  <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
    <Link to="#" className='navbar-brand'>Search Bar</Link>
    <div className='ml-auto'>
        <ul className='navbar-nav'>
            <li className='nav-list'><Link className='nav-link' to="search">Search</Link></li>
            <li className='nav-list'><Link className='nav-link' to="search1">Search1</Link></li>
            <li className='nav-list'><Link className='nav-link' to="searchapidata">SearchApiData</Link></li>
            <li className='nav-list'><Link className='nav-link' to="searchdata">SearchApiDataWithOutBtn</Link></li>
        </ul>
    </div>
  </nav>
  </>
}

export default Navbar
