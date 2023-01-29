import React from "react"
import { BrowserRouter } from "react-router-dom"
import Layout from "./components/layout/Layout"
import Router from "./Router"
import "./styles/globals.scss"

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Router />
      </Layout>
    </BrowserRouter>
  )
}
export default App
