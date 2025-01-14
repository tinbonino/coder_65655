import { collection, getDocs, getFirestore } from "firebase/firestore"
import { useEffect } from "react"

function TraerCollection() {

    useEffect(() => {
      const db = getFirestore();
      // creamos la referencia a la collection

      const itemCollection= collection(db,"items");

      // traemos los datos

      getDocs(itemCollection).then(snapshot=>snapshot.docs.map(docu=>
      {
        console.log(docu.data())
        console.log(docu.id)
      }
      ))
    },[])
  return (
    <div>TraerCollection</div>
  )
}

export default TraerCollection