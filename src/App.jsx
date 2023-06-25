
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import LoginScreen from './components/Login'
import SignupScreen from './components/Register-pages'
import HomePage from './components/Home-page'

function App() {

  return (
    <BrowserRouter>
     <Routes>
     <Route path='/bem-pay' element ={<LoginScreen />} />
     <Route path='/bem-pay/register' element ={<SignupScreen />} />
     <Route path='/bem-pay/home' element ={<HomePage />} />

     </Routes>
    </BrowserRouter>
  )
}

export default App