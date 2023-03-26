import React from "react"
import { Outlet} from "react-router-dom";



function App() {
  return (
    <div className="App font-display">
      <div className='bg-black text-white p-4'>Pokemon database</div>
      <Outlet />
    </div>
  )
}

export default App
