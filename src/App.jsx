import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'

import Header from './component/Header'
import Footer from './component/Footer'

import Home from './component/Home'
import About from './component/About'
import FAQ from './component/FAQ'
import Contact from './component/Contact'
import Login from './component/Login'
import ResetPasswordPage from './component/ResetPassword'
import ResetPasswordSuccessPage from './component/ResetPasswordSuccess'
import Register from './component/Register'
import RegisterSuccess from './component/RegisterSuccess'
import RegisterComfirm from './component/RegisterComfirm'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route element={<Home />} exact path="/"></Route>
          <Route element={<About />} path="/about"></Route>
          <Route element={<FAQ />} path="/faq"></Route>
          <Route element={<Contact />} path="/contact"></Route>
          <Route element={<Login />} path="/login"></Route>
          <Route element={<Register />} path="/register"></Route>
          <Route element={<ResetPasswordPage />} path="/resetPasswordPage"></Route>
          <Route element={<ResetPasswordSuccessPage />} path="/resetPasswordSuccess"></Route>
          <Route element={<RegisterSuccess />} path="/registerSuccess"></Route>
          <Route element={<RegisterComfirm />} path="/registerComfirm"></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
