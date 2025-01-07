import { useContext } from "react"
import ThemeContext from "./context"



function Footer() {
    const {tema}=useContext(ThemeContext);
    return (
    <div style={{color:tema.font,background:tema.background}}>
        <h3>Todos los derechos reservados®</h3>
    </div>
  )
}

export default Footer