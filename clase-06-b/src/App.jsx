import { UserProvider } from './context/UserContext'
import UserProfile from './components/UserProfile'
import UserStatus from './components/UserStatus'
import './App.css'

function App() {


  return (
    <UserProvider>
        <UserProfile/>
        <UserStatus/>
    </UserProvider>
  )
}

export default App
