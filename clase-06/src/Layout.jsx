import { useContext } from "react"
import ThemeContext from "./context"

function Layout({children}) {
    const  {tema} = useContext(ThemeContext);
  return (
    <div style={{background:tema.background, color:tema.font}}>
        {children}
    </div>
  )
}

export default Layout