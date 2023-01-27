import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Main from './Components/Main/Main';
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login'

function App() {
  const user = localStorage.getItem("token")
  return <>
    <Router>
      <Routes>
        {user && <Route path='/' exact element={<Main />} />}
        <Route path='/signup' exact element={<Signup />} />
        <Route path='/login' exact element={<Login />} />
        <Route path='/' exact element={<Navigate replace to="/login" />} />
      </Routes>
    </Router>
  </>
}

export default App;
