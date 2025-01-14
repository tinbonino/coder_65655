import { useEffect, useState } from 'react'
import {getFirestore,doc,getDoc} from "firebase/firestore";
import './App.css'

function App() {
  const  [data,setData] = useState({});

  const db = getFirestore();

  useEffect(() => {
    // creo la referencia al elemento
    const itemRef = doc(db,"items","GXaQLjUN5hwiuMnvUz3a");

    // traigo el elemento

    getDoc(itemRef).then(snapshot=>{
      console.log(snapshot);
      console.log(snapshot.data());
      setData(snapshot.data());
    })
  },[])

  return (
    <>
      <h2>{data.title}</h2>
      <h3>{data.Descripcion}</h3>
      <h2>{data.price}</h2>
    </>
  )
}

export default App
