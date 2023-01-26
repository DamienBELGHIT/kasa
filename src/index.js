import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Infos from "./pages/Infos"
import NoPage from "./pages/NoPage"
import Layout from "./components/Layout"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="a-propos" element={<Infos />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
)
