import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import './home.scss'
import Navbar from '../../components/navbar/Navbar'

const Home = () => {
  return <>
    <div className="home">
      <Sidebar/>
      <div className="homecontainer">
        <Navbar />
        Home container</div>
    </div>
  </>
}

export default Home
