import { useEffect,useState } from "react";  
import axios from "axios";
function MercadoLibre() {

    const [products,setProducts] = useState([]);


    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get("https://api.mercadolibre.com/sites/MLA/search?q=pepe&limit=20")
                setProducts(response.data.results)
            }
            catch (error) {
                console.error("Se pudrió todo...",error)
            }
            
        }

        fetchProducts();
    },[])

  return (
    <div>
        <h2>Productos!</h2>
        <ul>
            {products.map(product =>(
                <li key={product.id}>
                    <h2>{product.title}</h2>
                    <p>Precio: ${product.price}</p>
                    <img src={product.thumbnail} alt="" />
                </li>
            ))}
        </ul>
    </div>
  )
}

export default MercadoLibre