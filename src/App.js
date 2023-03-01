import React, { lazy, useEffect } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import { themeChange } from 'theme-change'
import auth from './app/Authentication/firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

// Importing pages
const Layout = lazy(() => import('./containers/Layout'))
const Login = lazy(() => import('./pages/Login'))
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'))
const SignUp = lazy(() => import('./pages/Register'))
const Documentation = lazy(() => import('./pages/Documentation'))


// Initializing different libraries



// Check for login and initialize axios



function App() {

  useEffect(() => {
    // 👆 daisy UI themes initialization
    themeChange(false)
  }, [])

  const [user] = useAuthState(auth);


  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/create-account" element={<SignUp />} />
          <Route path="/documentation" element={<Documentation />} />

          {/* Place new routes over this */}
          <Route path="/app/*" element={<Layout />} />

          <Route path="*" element={<Navigate to={user ? "/app/dashboard" : "/login"} replace />} />

        </Routes>
      </Router>
    </>
  )
}

export default App
