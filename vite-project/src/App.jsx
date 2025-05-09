
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import MainLayout from './dashboard/layout/MainLayout'
import AdminIndex from './dashboard/pages/Admin'
import Login from './dashboard/pages/Login'
import ProtectDashboard from './middleware/ProtectDashboard'



function App() {


  return (

    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/dashboard' element={<ProtectDashboard />}>
          <Route path='' element={<MainLayout />}></Route>
          <Route path='' element={<Navigate to="/dashboard/admin" />}></Route>
          <Route path="admin" element={<AdminIndex />}></Route>
        </Route>
      </Routes> 
    </BrowserRouter>
  )
}

export default App
