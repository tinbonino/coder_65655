function Boton({onClick,label,color}) {
    const style = {
        backgroundColor: color,
        padding: "10px 20px",
        border: "none",
        color: "white",
        cursor: "pointer"
    }
  return (
    <div>
        <button style={style} onClick={onClick} >
            {label}
        </button>
    </div>
  )
}

export default Boton