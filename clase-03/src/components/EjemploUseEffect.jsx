import { useEffect, useState } from "react";



function EjemploUseEffect() {

    const [laps, setLaps] = useState(0);
    const [timeInSeconds,setTimeInSeconds]=useState(0);

    useEffect(() => {
      setTimeInSeconds(0);
      const interval=setInterval(() => {
        setTimeInSeconds(prevTime=>prevTime+1)
      },1000);
      return () => {
        clearInterval(interval);
        console.log("Se desmontó el componente")
      }

    },[laps])

  return (
    <div>
        <p>Vueltas: {laps}</p>
        <p>Tiempo en segndos: {timeInSeconds}</p>
        <button onClick={()=>setLaps(laps=>laps+1)}>Finalizar Vuelta</button>
    </div>
  )
}

export default EjemploUseEffect