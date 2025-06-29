import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard';
import ProjectedRoute from './components/ProjectedRoute';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/'element={<Login/>}/>
        <Route path='/dashboard' element={
          <ProjectedRoute>
            <Dashboard />
          </ProjectedRoute>
        }
        />
      </Routes>
    
    </Router>
  )
}

export default App