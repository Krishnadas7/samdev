import React from 'react'

function Header() {
  return (
    <header class="sticky-top bg-white shadow-sm">
        <nav class="navbar navbar-expand-xl py-4">
            <div class="container-fluid px-xl-5 d-flex align-items-center flex-sm-nowrap">
                <a class="navbar-brand" href="index.html" title="Home"/><img src="images/CareCostMap-logo.svg"
                        class="img-fluid d-md-block d-none" style={{marginLeft:'-460px'}} alt="Logo"/><img src="images/CareCostMap-logo-mob.svg"
                        class="img-fluid d-md-none" alt="Logo"/><a/>
                <a href="https://sandwych.com/" class="link-type1" title="" role="button">Explore Sandwych</a>
            </div>
        </nav>
        
    </header>
  )
}

export default Header