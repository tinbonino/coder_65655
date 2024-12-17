import { Link } from "react-router-dom"

function Producto({nombre,precio,id}) {
  return (
    // <div className="card">
      <Link to={`/productos/${id}`} className="card">
        <h2>{nombre}</h2>
        <h3>{precio}</h3>
      </Link>
    // </div>
  )
}

export default Producto