import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import './home.scss'
import Navbar from '../../components/navbar/Navbar'
import Widgets from '../../components/widgets/Widgets'
import Featured from '../../components/featured/Featured'
import Charts from '../../components/charts/Charts'

const Home = () => {
  return <>
    <div className="home">
      <Sidebar />
      <div className="homecontainer">
        <Navbar />
        <div className="widgets">
          <Widgets type='user' />
          <Widgets type='orders' />
          <Widgets type='earnings' />
          <Widgets type='balance' />
        </div>
        <div className="charts">
          <Featured />
          <Charts />
        </div>
      </div>
    </div>
  </>
}

export default Home
