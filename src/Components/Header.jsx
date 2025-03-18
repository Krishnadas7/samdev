import React from 'react';

function Header() {
  return (
    <header className="sticky-top bg-white shadow-sm ">
      <nav className="navbar py-3">
        <div className="container-fluid px-xl-5 d-flex align-items-center justify-content-between">
          
          {/* Logo Wrapper */}
          <a className="navbar-brand d-flex align-items-center" href="index.html" title="Home">
            {/* Desktop Logo */}
            <img
              src="images/CareCostMap-logo.svg"
              className="img-fluid d-none d-md-block"
              alt="Logo"
            />
            {/* Mobile Logo */}
            <img
              src="images/CareCostMap-logo-mob.svg"
              className="img-fluid d-md-none"
              alt="Mobile Logo"
            />
          </a>

          {/* Link Button */}
          <a href="https://sandwych.com/" className="link-type1" title="Explore Sandwych" role="button">
            Explore Sandwych
          </a>

        </div>
      </nav>
    </header>
  );
}

export default Header;
