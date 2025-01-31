import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import AllChat from './assets/components/AllChat'
import SingleChat from './assets/components/SingleChat'
import AllChatBottomSection from './assets/components/AllChatBottomSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <BrowserRouter>
     
        <Routes>
          <Route path='/' element={<AllChat />}/>
          <Route path='/singlechat' element={<SingleChat />}/>
          <Route path='/allchatbottomsection' element={<AllChatBottomSection/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
