import React from "react";
import "./Navbar.scss";

// varför fungerar inte denna som komponent?
function Navbar() {
  const handleClick = (id) => {
    if (id === "links") {
      const element = document.querySelector("#links");
      element.scrollIntoView({ behavior: "smooth" });
    }
    if (id === "discography") {
      const element = document.querySelector("#discography");
      element.scrollIntoView({ behavior: "smooth" });
    }
    if (id === "contact") {
      const element = document.querySelector("#contact");
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="navbar">
      <div className="navbar-center">
        <button className="nav-butt" onClick={() => handleClick("links")}>
          Links
        </button>
        <button className="nav-butt" onClick={() => handleClick("discography")}>
          Discography
        </button>
        <button className="nav-butt" onClick={() => handleClick("contact")}>
          Contact
        </button>
      </div>
    </div>
  );
}

export default Navbar;
