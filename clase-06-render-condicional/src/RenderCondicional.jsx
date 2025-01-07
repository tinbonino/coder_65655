import { useState } from "react"

function RenderCondicional() {
    const [mostrar,setMostrar]= useState(false);

    const handleClick = () => {
      setMostrar(!mostrar);
    }

    const renderConIf = () => {
      if (mostrar){
        return <p>Este texto se muestra con un IF si el estado es TRUE</p>
      }
      return <p>Este texto se muestra con un IF si el estado es FALSE</p> 
    }

  return (
    <div>
        <h1>Técnicas de renderizado condicional</h1>
        <button onClick={handleClick}>{mostrar?"Ocultar":"Mostrar"}</button>
        {renderConIf()}
        {mostrar?<p>Este texto se muestra con un ternario si mostrar ers TRUE</p>:<p>Este texto se muestra con un ternario si mostrar es FALSE</p> }
        {mostrar && <p>Este texto se muestra con un && si el valor es TRUE</p>}
        {(() => {
          if(mostrar){
            return <p>Este texto se muestra con una función autoinvocada si mostrar es TRUE</p>
          } 
          return <p>Este texto se muestra con una funcion autoinvocada si mostrar es FALSE</p>
        })()}
    </div>
  )
}

export default RenderCondicional