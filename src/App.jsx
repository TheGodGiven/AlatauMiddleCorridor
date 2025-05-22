import { useState } from 'react'
import './App.css'
import BodyBG from './assets/BodyBG.png'
import Header from './components/Header'
import LogisticType from './components/LogisticType'
import Technology from './components/Technology'
import Property from './components/Property'
import Footer from './components/Footer'

function App() {
  
  const [lang, changeLang] = useState("ru");

  const handleChange = (value) => {
      changeLang(value);
  };

  return (
    <body
      style={{
        backgroundImage: `url(${BodyBG})`,
        backgroundPosition: `center`,
        backgroundSize: `cover`,
      }}
    >
      <Header lg={lang} change={handleChange}/>
      <LogisticType lg={lang}/>
      <Technology lg={lang}/>
      <Property lg={lang}/>
      <Footer lg={lang}/>
    </body>
  )
}

export default App
