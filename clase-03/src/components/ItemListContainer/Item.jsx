function Item({nombre,precio,descripcion}) {
  return (
    <div className="card">
        <h2>{nombre}</h2>
        <p>{descripcion}</p>
        <p>Precio: ${precio}</p>
    </div>
  )
}

export default Item