import * as React from "react"
import { BrowserRouter } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "react-query"

import Dash from "./components/dash"

const queryClient = new QueryClient()

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Dash />
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
