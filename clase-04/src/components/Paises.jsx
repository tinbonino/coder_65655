import { useEffect } from "react";



function Paises() {

    useEffect(() => {
      fetch("https://restcountries.com/v3.1/name/island")
      .then(response=>response.json())
      .then(data=>console.log(data[0].capital))
      .catch(error=>console.error("Error trayendo la info:",error))
    },[])
  return (
    <div>Paises</div>
  )
}

export default Paises