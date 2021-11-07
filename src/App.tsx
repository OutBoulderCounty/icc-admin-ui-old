import * as React from "react"
import { BrowserRouter } from "react-router-dom"

import Dash from "./components/dash"

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Dash />
    </BrowserRouter>
  )
}

export default App
