// import { useEffect } from "react";
import './Nav.css'
const Nav = ({currentPage, handlePageChange}) => {


return (
    <nav className="navbar navbar-light nav-underline navbar-expand-lg justify-content-end">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse navbar-light justify-content-end nav-underline" id="navbarNav">
        <ul className="navbar-nav justify-content-end nav-underline fixed-top p-3">
          <li className="nav-item" >
            <a
              href="#about"
              onClick={() => handlePageChange('About')}
              
              className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
            >
              About
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#portfolio"
              onClick={() => handlePageChange('Portfolio')}

    
              className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
            >
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#contact"
              onClick={() => handlePageChange('Contact')}

    
              className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
            >
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#resume"

    
              onClick={() => handlePageChange('Resume')}
              className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
            >
              Resume
            </a>
          </li>
        </ul>
        </div>
        </div>
        </nav>
      );
    }

export default Nav;