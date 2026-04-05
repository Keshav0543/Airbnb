import React from "react";
import CityDropDown from "./SelectCity.jsx";


function Header() {

  return (
    <header className="HeaderDiv1">
      <div className="InnerDiv1">
        
        {/* LOGO */}
        <div className="logo-img">
          <svg
            width="102"
            height="32"
            viewBox="0 0 3490 1080"
            style={{ display: "block" }}
          >
            <path
              d="M1494.71 456.953C1458.28 412.178 1408.46 389.892 1349.68 389.892C1233.51 389.892 1146.18 481.906 1146.18 605.892C1146.18 729.877 1233.51 821.892 1349.68 821.892C1408.46 821.892 1458.28 799.605 1494.71 754.83L1500.95 810.195H1589.84V401.588H1500.95L1494.71 456.953ZM1369.18 736.895C1295.33 736.895 1242.08 683.41 1242.08 605.892C1242.08 528.373 1295.33 474.888 1369.18 474.888C1443.02 474.888 1495.49 529.153 1495.49 605.892C1495.49 682.63 1443.8 736.895 1369.18 736.895Z"
              fill="currentColor"
            />
          </svg>
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