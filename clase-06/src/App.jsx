import { useState } from 'react'
import ThemeContext, {temas} from './context';
import Body from './Body';
import Layout from './Layout';
import Footer from './Footer';
import Navbar from './Navbar';
import './App.css'

function App() {

  const [tema,setTema]=useState(temas.claro);

  const handleTema = () => {
    tema === temas.oscuro ? setTema(temas.claro) : setTema(temas.oscuro)
  }

  return (
    <>
      <ThemeContext.Provider value={{tema,handleTema}}>
        <Layout>
            <Navbar/>
            <Body/>
        </Layout>
            <Footer/>
      </ThemeContext.Provider>
    </>
  )
}

export default App
