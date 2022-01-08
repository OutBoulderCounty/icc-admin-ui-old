import * as React from "react"
import { Routes, Route, useParams } from "react-router-dom"

import Dash from "./components/dash"
import NavBar from "./components/navBar"
import Footer from "./components/footer"
import Forms from "./components/forms"
import Form from "./components/form"
import { QueryClient, QueryClientProvider } from "react-query"


const App: React.FC = () => {
  
  return (
    <>
      <NavBar />
        <Routes>
          <Route path="/" element={<Dash />} />        
          {/* <Route path="/forms" element={<Forms />} /> */}
          <Route path="/form" element={<Form />} />
          {/* <Route path="/forms/:id" element={<Form />} /> */}
        </Routes>
      <Footer />
    </>    
  )
}

export default App