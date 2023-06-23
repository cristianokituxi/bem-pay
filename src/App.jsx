
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import LoginScreen from './components/Login'
import SignupScreen from './components/Register-pages'

function App() {

  return (
    <BrowserRouter>
     <Routes>
     <Route path='/bem-pay' element ={<LoginScreen />} />
     <Route path='/bem-pay/register' element ={<SignupScreen />} />
     </Routes>
    </BrowserRouter>
  )
}

export default App