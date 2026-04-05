import React from "react";
import CityDropDown from "./SelectCity.jsx";


function Header() {

  return (
    <header className="HeaderDiv1">
      <div className="InnerDiv1">
        
        {/* LOGO */}
        <div className="logo-img">
         <img src="https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/1/airbnb-9xpw4kf7zr9850h17qznf.png/airbnb-4rfqv9z0up9auj6x43g07v.png?_a=DATAiZAAZAA0"></img>
        </div>

        {/* NAV LINKS */}
        <nav className="ServiceDiv1">
          <div className="nav-item">Home</div>
          <div className="nav-item">Experiences</div>
          <div className="nav-item">Services</div>
        </nav>


        <nav className="ServiceDiv2">
          <div className="nav-item">Become a Host</div>
          <div className="nav-item">⊕</div>
          <div className="nav-item">☰</div>
        </nav>

      </div>

      <div className="HeaderDiv2">
        <CityDropDown/>
      </div>
    </header>

    
  );
}

export default Header;