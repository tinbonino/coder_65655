import { useState } from "react"

function DogApi() {

    const [perro,setPerro] =useState("")

    const fetchDog = () => {
      fetch("https://dog.ceo/api/breed/beagle/images/random")
      .then(response=>response.json())
      .then(data=>{
        console.log(data);
        setPerro(data.message);
      })
      .catch(error=>console.error("Problemas:",error))
    }

  return (
    <div>
        <h1>Imagen de perro</h1>
        <button onClick={fetchDog}>Ver perro</button>

        {perro && <img src={perro}/>}

        {/* <img src={perro}/> */}

   

    </div>
  )
}

export default DogApi