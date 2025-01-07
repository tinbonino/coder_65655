import { useContext } from "react"
import { UserContext } from "../context/UserContext"

function UserStatus() {
    const {user, toggleLogin} = useContext(UserContext);
  return (
    <div>
        <h2>Estado de Usuario</h2>
        <h3>Status: {user.loggedIn? "Logueado": "No Logueado"}</h3>
        <button onClick={toggleLogin}>
        {user.loggedIn ? "Logout":"Login"}
        </button>
        
    </div>
  )
}

export default UserStatus