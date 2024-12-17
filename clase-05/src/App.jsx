
import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom";

import Home from './components/Home';
import Layout from './components/Layout';
import Error from './components/Error';
import Productos from './components/Productos';
import Nosotros from './components/Nosotros';
import DetalleProducto from './components/DetalleProducto';

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout/>}>  
          {/*       ruta   componente a renderizar*/}
                <Route index element={<Home/>} />
                <Route path='productos' element={<Productos/>} />
                <Route path='productos/:id' element={<DetalleProducto/>} />
                <Route path='nosotros' element={<Nosotros/>} />
                <Route path='*' element={<Error/>} />
            </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
