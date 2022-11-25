import React from 'react'
import Search from './Components/Search'
import Search1 from './Components/Search1'
import SearchAPIData from './Components/SearchAPIData'
import Navbar from './Navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SearchApiDataWithOutBtn from './Components/SearchApiDataWithOutBtn'

const App = () => {
  return <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='search' element={<Search/>}/>
        <Route path='search1' element={<Search1/>}/>
        <Route path='searchapidata' element={<SearchAPIData/>}/>
        <Route path='searchdata' element={<SearchApiDataWithOutBtn/>}/>
      </Routes>
    </Router>
  </>
}

export default App