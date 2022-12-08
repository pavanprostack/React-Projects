import React from 'react'
import '../sidebar/index.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import image from '../sidebar/logo.jpeg'

const Sidebar = () => {

  const [show, setShow] = useState(false)

  return <>
    <div className="container">
      <div className="row">
        <div className="col-md">
          <main className={show ? 'space-toggle' : null}>
            <header className={`header ${show ? 'space-toggle' : null}`}>
              <div className='header-toggle' onClick={() => setShow(!show)}>
                <i className="fa-solid fa-bars"></i>
              </div>
            </header>
            <aside className={`sidebar ${show ? 'show' : null}`}>
              <nav className="nav">
                <div>  
                <Link to="/" className="nav-logo">
                  <img src={image} alt="logo" height='70' width='100'/>            
                  </Link>                
                  <div className="nav-list">
                     <Link to="/dashboard" className="nav-link active">
                      <i className="fas fa-home-alt nav-link-icon"></i>
                      <span className="nav-link-name ">Dashboard</span>
                    </Link>
                    <Link to="/approvals" className="nav-link">
                      <span className="nav-link-name margin">Approvals</span>
                    </Link>
                    <Link to="/contact" className="nav-link">
                      <span className="nav-link-name margin">Contact Us</span>
                    </Link>
                    <Link to="/members" className="nav-link">
                      <span className="nav-link-name margin">Members</span>
                    </Link>
                  </div>
                </div>
              </nav>
            </aside>
            <h1>Content</h1>
          </main>
        </div>
      </div>
    </div>

  </>
}

export default Sidebar
