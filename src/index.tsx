import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import { FronteggProvider } from "@frontegg/react"

ReactDOM.render(
  <React.StrictMode>
    <FronteggProvider contextOptions={{ baseUrl: "https://icc.frontegg.com" }}>
      <App />
    </FronteggProvider>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
