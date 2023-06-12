import React from 'react'
import {
  Link,
  useLocation
} from "react-router-dom";

const Navbar = () => {

  const handlelogout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  }

  let location = useLocation();
  React.useEffect(() => {
    console.log(location.pathname);
  }, [location]);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">cNotebook</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="#">Action</Link></li>
                <li><Link className="dropdown-item" to="#">Another action</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" to="#">Something else here</Link></li>
              </ul>
            </li>
          </ul>
          {!localStorage.getItem('token') ? <form className="d-flex">
            <div className='mx-2'><Link className="btn btn-primary" to="/login" role="button">Login</Link></div>
            <div className='mx-2'><Link className="btn btn-primary" to="/signup" role="button">Signup</Link></div>
          </form> : <div className='mx-2'><Link className="btn btn-primary" to="#" role="button" onClick={handlelogout}>Logout</Link></div>}
        </div>
      </div>
    </nav>
  )
}

export default Navbar