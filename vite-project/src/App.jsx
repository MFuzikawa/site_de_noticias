
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import MainLayout from './dashboard/layout/MainLayout'
import AdminIndex from './dashboard/pages/Admin'
import Login from './dashboard/pages/Login'
import ProtectDashboard from './middleware/ProtectDashboard'
import ProtectRole from './middleware/ProtectRole'
import Unable from './dashboard/pages/Unable'
import AddWriters from './dashboard/pages/AddWriters'
import Writers from './dashboard/pages/Writers'
import News from './dashboard/pages/News'
import Profile from './dashboard/pages/Profile'
import WriterIndex from './dashboard/pages/WriterIndex'
import CreateNews from './dashboard/pages/CreateNews'



function App() {

const userInfo = {
  role: 'writer'
}
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />

        <Route path='/dashboard' element={<ProtectDashboard />} >

          <Route element={<MainLayout />}>
            <Route index element={userInfo.role === 'admin'? <Navigate to='admin' replace />: <Navigate to='/writer' /> } />
            <Route path='unable-access' element={<Unable />} />

            <Route path='' element={<ProtectRole role='admin' />} >
              <Route path='news' element={<News />} />
              <Route path='admin' element={<AdminIndex />} />
              <Route path='writer/add' element={<AddWriters />} />
              <Route path='writers' element={<Writers />} />
              <Route path='profile' element={<Profile />} />
            </Route>

            <Route path='' element={<ProtectRole role='writer' />} >
              <Route path='writer' element={<WriterIndex />} />
              <Route path='news/create' element={<CreateNews />} />
              <Route path='profile' element={<Profile />} />
              <Route path='news' element={<News />} />
            </Route>
          </Route>
        </Route>
        <Route path='*' element={
          <div className='flex mt-50 justify-center '>
            <h2>erro 404 - Página não encontrada</h2>
          </div>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
