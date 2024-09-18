import Login from "./components/Login"
import Profile from "./components/Profile"
import UserContextProvider from "./context/UserContextProvider"
import './App.css'
import { useState } from "react"

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
     <h1>Priya Acharjee</h1>
     <Login/>
     <Profile/>
    </UserContextProvider>
  )
}

export default App
