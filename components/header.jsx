import React from 'react';
import Navbar from './Navbar';
import '../StyleSheets/header.css';
import Loginform from './Login-form';

const Header = ({ setCurrentPage , cartNumber }) => {
  const handleLogoClick = (event) => {
    event.preventDefault();
    setCurrentPage("home");
  };

  const handleCartClick = (event) => {
    event.preventDefault();
    setCurrentPage("cart");
  };
  const handleLoginClick = (event) => {
    event.preventDefault();
    setCurrentPage("login");
  };

  return (
    <header>
      <a href="#" name="top"></a>
       <div className="header-top">
        <img src="../images/login.png" 
        alt="Login" 
        onClick={handleLoginClick}
        className='login-logo'
        />
      <img
        src="../images/1686495513644.png"
        onClick={handleLogoClick}
        className="nav--logo"
        alt="Logo"
      />
      <a href="" className='cart'>
        <img src="../images/carticon.png"
        onClick={handleCartClick}
        alt="Cart"
        className="cart-icon" />
        <span className='number'>{cartNumber}</span>
      </a>
       
      </div>
      <div className="nav-area">
                 <Navbar />
      </div>
      
    </header>
   
  );
};


export default Header;
