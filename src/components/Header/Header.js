import Nav from "../Navigation/Nav";
import './Header.css';

function Header({ currentTab, handlePageChange }) {

  return (
    <header className="custom-header flex-row px-1">

        <Nav
         currentTab={currentTab}
         handlePageChange={handlePageChange}
        ></Nav>

        <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: "url('/hero.jpg')", height: 200, width: '100%' }}
      >
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>Welcome to Randi Brown's Portfolio</h1>
              <h4 className='mb-3'>Here, you can view my work, my skills and experience, contact me, or download my resume.</h4>
            </div>
          </div>
        </div>
    </header>
  );
}

export default Header;