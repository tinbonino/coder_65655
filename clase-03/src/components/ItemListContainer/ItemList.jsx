
import Item from "./Item"
import { useState } from "react";

const categorias = {
  PANADERIA: "Panadería y Cereales",
  FRUTAS: "Frutas y Verduras",
  LACTEOS: "Lácteos"
};

function ItemList({items}) {

  const [selectedCategory,setSelectedCategory] = useState("");
//          LACTEOS
  const filteredItems = selectedCategory ? items.filter(item=>item.categoria === selectedCategory) :items;

  return (
    <div>
      <div>
        <button onClick={()=> setSelectedCategory(categorias.PANADERIA) }>Panadería y Cereales</button>
        <button onClick={()=> setSelectedCategory(categorias.LACTEOS) }>Lácteos</button>
        <button onClick={()=> setSelectedCategory(categorias.FRUTAS) }>Frutas y Verduras</button>
      </div>
        {filteredItems.map((item) => (
            <Item
                key={item.id}
                nombre={item.nombre}
                precio={item.precio}
                descripcion={item.descripcion}
            />
        )
      
        )}
    </div>
  )
}

export default ItemList