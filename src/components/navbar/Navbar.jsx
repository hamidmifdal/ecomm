import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
  <nav className="navbar navbar-expand-lg bg-body-tertiary d-flex justify-centent-between">
  <div className="container">
    <Link className="navbar-brand fs-1" to="/">Sofian<span className='fs-5 text-warning me-5'>.shop</span></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item"><Link className="nav-link active fs-5 fw-light me-5" to="/"    >Home   </Link></li>
        <li className="nav-item"><Link className="nav-link active fs-5 fw-light me-5" to="Men"  >Men    </Link></li>
        <li className="nav-item"><Link className="nav-link active fs-5 fw-light me-5" to='Women'>Women  </Link></li>
        <li className="nav-item"><Link className="nav-link active fs-5 fw-light me-0" to='Add'  >add products  </Link></li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2 text-end" type="search" placeholder="Search /" aria-label="Search"/>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar