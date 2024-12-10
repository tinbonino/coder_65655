import { useEffect, useState } from "react";

function EjemploSimpleUseEffect() {
    
    const [count,setCount]=useState(0);
    const [titulo,setTitulo]=useState("");

    // Montaje del componente

    useEffect(() => {
      console.log("Primera vez que se renderiza el componente (Montaje)")
    },[])

    // Cuando se actualiza count

    useEffect(() => {
      console.log("Se actualizó count")
    },[count])

    // Cuando se actualiza titulo

    useEffect(() => {
      console.log("Se actualizó título")
    },[titulo])

    // useEffect(() => {
    //   console.log("Se renderizó el componente")
    // })

    console.log("Se renderizó el componente. No uso useEffect")

  return (
    <div>
        <h1>{titulo}</h1>
        <p>Contador: {count}</p>
        <button onClick={()=>setCount(count+1)}>Incrementar Contador</button>
        <button onClick={()=>setTitulo("Bienvenidos a la clase 3 💪")}>Cambiar Título</button>
    </div>
  )
}

export default EjemploSimpleUseEffect