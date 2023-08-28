import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(props) {
  return (
    <div>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"><b>textUtils</b></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/About">About</Link>
              </li>
            </ul>
            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDisabled" onClick={props.toggleMode}/    >
                <label className="form-check-label mx-3" htmlFor="flexSwitchCheckDisabled">enable dark mode</label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
