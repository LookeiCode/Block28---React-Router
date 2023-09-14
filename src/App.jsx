import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from "react-router-dom"
import Blue from './components/Blue.jsx'
import Red from './components/Red.jsx'
import Home from './components/Home.jsx'

function App() {


  return (
    <div id="container">


      <div id="navbar">
        <Link to="/blue" id="navItem">
          Blue
        </Link>

        <Link to="/" id="navItem">
          Home
        </Link>

        <Link to="/red" id="navItem">
          Red
        </Link>

      </div>
      <div id="main-section">
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/blue"
          element={<Blue />}
        />
        <Route
          path="/red"
          element={<Red />}
        />
      </Routes>
      </div>
      <footer id="footer">
      <Link to="/blue" id="navItem">
          Blue
        </Link>

        <Link to="/" id="navItem">
          Home
        </Link>

        <Link to="/red" id="navItem">
          Red
        </Link>
      </footer>
    </div>
  )
}

export default App
