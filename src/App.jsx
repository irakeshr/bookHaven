import { useState } from 'react'
import Home from './user/pages/Home'
 import Login from './pages/Auth/Login'
 import SignUp from './pages/Auth/SignUp'
import AllBooks from './user/pages/AllBooks'
import Viewbook from './user/pages/Viewbook'
import Careers from './user/pages/Careers'
import Contact from './user/pages/Contact'
import Profile from './user/pages/Profile'  
import AdminHome from './admin/pages/AdminHome'   
import AdminBooks from './admin/pages/AdminBooks'   
import AdminCareers from './admin/pages/AdminCareers'   
import AdminSettings from './admin/pages/AdminSettings'   
import Pnf from './pages/Pnf'
import Paymentsuccess from './user/pages/Paymentsuccess'
import Paymenterror from './user/pages/Paymenterror'
import { Routes, Route } from 'react-router-dom'
import UserHeader from './user/components/UserHeader'
import Footer from './components/Footer'
import AdminLayout from './admin/pages/AdminLayout'
import UserLayout from './user/pages/UserLayout'
import FrontPage from './pages/FrontPage'
 

function App() {
  
 

  return (
    <>
     
    

     <Routes>
      <Route element={<FrontPage/>}>
       <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<SignUp/>}/>
      </Route>

     

  <Route element={<UserLayout/>}>
      
    <Route path="/" element={<Home />} />
  <Route path="/all-Books" element={<AllBooks />} />
  <Route path="/view-books/:id" element={<Viewbook />} />
  <Route path="/careers" element={<Careers />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/profile" element={<Profile />} />
  <Route path="/payment-success" element={<Paymentsuccess />} />
  <Route path="/payment-error" element={<Paymenterror />} />
  </Route>
  
  {/* Auth Routes*/}
  <Route path="/login" element={<Login />} />
  <Route path="/signup" element={<SignUp />} />

  {/* ADMIN Routes*/}
  <Route element={<AdminLayout />}>
    <Route path="/admin-home" element={<AdminHome />} />
    <Route path="/admin-books" element={<AdminBooks />} />
    <Route path="/admin-careers" element={<AdminCareers />} />
    <Route path="/admin-settings" element={<AdminSettings />} />
  </Route>

  {/* 404 */}
  <Route path="*" element={<Pnf />} />
</Routes>
      <Footer/>
    </>
  );
}

export default App;