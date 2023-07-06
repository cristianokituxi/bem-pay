import LoginScreen from './components/Login'
import SignupScreen from './components/Register-pages'
import HomePage from './components/Home-page'
import Spinner from './components/Spinner'
import './App.css'

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useAuthContext } from './context/auth/AuthContext.js';

function App() {

  const { isLoadingLoggedUser, user } = useAuthContext();

  return (
    <>
      {
        !isLoadingLoggedUser &&
        <BrowserRouter>
          <Routes>
            <Route
              path='/bem-pay'
              element={
                !user ? <LoginScreen /> : <Navigate to={'/bem-pay/home'} />
              } />
            <Route
              path='/bem-pay/register'
              element={
                user ? <SignupScreen /> : <Navigate to={'/bem-pay/'} />
              } />
            <Route
              path='/bem-pay/home'
              element={
                user ? <HomePage /> : <Navigate to={'/bem-pay'} />
              } />
          </Routes>
        </BrowserRouter>
      }
      { isLoadingLoggedUser && <Spinner /> }
    </>
  )
}

export default App;