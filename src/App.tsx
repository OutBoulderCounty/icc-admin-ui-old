import * as React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "react-query"
import { CookiesProvider } from "react-cookie"

import Dash from "./components/dash"
import Login from "./components/auth/login"

const queryClient = new QueryClient()

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <CookiesProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dash />} />
          </Routes>
        </BrowserRouter>
      </CookiesProvider>
    </QueryClientProvider>
  )
}

export default App
