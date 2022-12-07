import React from 'react'
import '../sidebar/index.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

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
                    <i className="fas fa-home-alt nav-logo-icon"></i>
                    <span className="nav-logo-name">Home Page</span>
                  </Link>

                  <div className="nav-list">
                    <Link to="/dashboard" className="nav-link active">
                      <i className="fa-solid fa-gauge-high nav-link-icon"></i>
                      <span className="nav-link-name">Dashboard</span>
                    </Link>
                    <Link to="/hotel" className="nav-link">
                      <i className="fa-solid fa-hotel nav-link-icon"></i>
                      <span className="nav-link-name">Hotel</span>
                    </Link>
                    <Link to="/gallery" className="nav-link">
                      <i className="fa-solid fa-image nav-link-icon"></i>
                      <span className="nav-link-name">Gallery</span>
                    </Link>
                    <Link to="/transaction" className="nav-link">
                      <i className="fa-solid fa-dollar-sign nav-link-icon"></i>
                      <span className="nav-link-name">Transaction</span>
                    </Link>
                  </div>
                </div>
                <Link to="/logout" className="nav-link">
                  <i className="fa-solid fa-sign-out nav-link-icon"></i>
                  <span className="nav-link-name">Logout</span>
                </Link>
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
