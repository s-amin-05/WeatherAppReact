import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import Nav from "./components/Nav"

function App() {
  

  return (
    <>
      <Nav />
      <Outlet />
    </>
  )
}

export default App
