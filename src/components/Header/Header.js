import Nav from "../Navigation/Nav";
import './Header.css';
// import headerImg from './hero2.png'

function Header({ currentTab, handlePageChange }) {

  return (
    <header className="custom-header flex-row px-1" >

        <Nav
         currentTab={currentTab}
         handlePageChange={handlePageChange}
        ></Nav>

        <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: "url('./hero2.png')", height: 600, width: '100%' }}
      >
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-dark'>
              <h1 className='mb-3'>Welcome to Randi Brown's Portfolio</h1>
              <h4 className='mb-3'>—Full-Stack Web Developer—</h4>
              <p>Check out my Portfolio of work, my Resume and my skills, and send me a message on my Contact page. <br />—<br />Visit my GitHub or LinkedIn Profiles, or reach out to my email via the links in the footer!</p>
            </div>
          </div>
        </div>
    </header>
  );
}


export default Header;