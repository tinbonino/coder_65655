import { useContext } from "react"
import { UserContext } from "../context/UserContext"
function UserProfile() {
    const {user}=useContext(UserContext);
  return (
    <div>
        <h2>Perfil de Usuario</h2>
        <h3>Nombre: {user.name}</h3>
    </div>
  )
}

export default UserProfile