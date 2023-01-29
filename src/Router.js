import React from "react"
import { Routes, Route } from "react-router-dom"
import About from "./pages/about/About"
import Accomodation from "./pages/accomodation/Accomodation"
import Error from "./pages/error/Error"
import Home from "./pages/home/Home"
import "./styles/router.scss"

function Router() {
  return (
    <div id="router">
      <Routes>
        <Route
          exact
          path="/"
          element={<Home />}
        />
        <Route
          path="/accomodation/:id"
          element={<Accomodation />}
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="*"
          element={<Error />}
        />
      </Routes>
    </div>
  )
}
export default Router
