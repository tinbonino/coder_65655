import Boton from "./Boton"
import ClicksCounter from "./ClicksCounter"
function Body() {
  let nombre="Juan"
  return (
    <div>
        <h1>Bienvenidos a la clase 2</h1>
        <Boton color="pink" label="Clickeame" onClick={()=>alert("CLICK")}/>
        <Boton color="crimson" label="Empanada" onClick={()=>alert("Son 2000 Pesos")}/>
        <Boton color="blue" label="Pizza" onClick={()=>alert("CLICK")}/>
          <ClicksCounter/>

    </div>
  )
}

export default Body