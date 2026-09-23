import { useState } from 'react'
import './App.css'
import { Route, Routes  } from 'react-router-dom'
import Navbar from './component/Navbar'
import Personal_Loan from './component/Personal_Loan'
import Business_Loan from './component/Business_Loan'
import Home_Loan from './component/Home_Loan'
import Over_Draft from './component/Overdraft'
import Home from './component/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Navbar />


      <Routes>

          <Route path="/"  element={<Home/>} />
          <Route path="/personal_loan"  element={<Personal_Loan/>} />
          <Route path="/home_loan"  element={<Home_Loan/>} />
          <Route path="/business_loan"  element={<Business_Loan/>} />
          <Route path="/over_draft"  element={<Over_Draft/>} />

       </Routes> 




    </>

  )
}

export default App
