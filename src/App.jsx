import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'

function App() {

  return (
      <>
        <Navbar/>
        <div className="flex">
          <Sidebar/>
          <div className="mt-16 w-[80%]">
               <Outlet/>
          </div>
        </div>
      </>
  )
}

export default App
