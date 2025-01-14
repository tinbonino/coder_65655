import { addDoc, collection,getFirestore } from "firebase/firestore"

function Agregar() {

    const item={
        title: "Bermudas",
        Descripcion: "Bermudas floreadas para el calorcito",
        categoryId: "Bermudas",
        imageId:"bermudas.jpg",
        price:15000,
        stock:100
    }

    // Conectamos la base de datos

    const db = getFirestore();

    // Referenciamos la collection

    const itemCollection = collection(db,"items");

    // Agregamos el nuevo documento a la collection

    addDoc(itemCollection,item).then(({id}) => {
      console.log(id);
      console.log("Producto agregado correctamente")
    })

  return (
    <div>Agregando Item</div>
  )
}

export default Agregar