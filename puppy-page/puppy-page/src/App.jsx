import { useState } from 'react'
import Header from "./componnent/Header"
import Section1 from "./componnent/Section1"
import Section2 from './componnent/Section2'
import Section3 from './componnent/Section3'
import Section4 from './componnent/Section4'
import Footer from "./componnent/Footer"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
     <Footer/> 
    </>
  )
}

export default App
