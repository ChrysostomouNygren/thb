import React from "react";
import "./Navbar.scss";


// varför fungerar inte denna som komponent?
function Navbar() {
    const handleClick = (id) => {
        if (id === "links") {
          const element = document.getElementById("links");
        }
        if (id === "discography") {
          const element = document.querySelector('#discography')
          element.scrollIntoView({ behavior: "smooth" });
          console.log('success')
        }
      };

  return (
    <div className="navbar">
      <h3 onClick={handleClick("links")}>Links</h3>
      <h3 onClick={handleClick("discography")}>Discography</h3>
    </div>
  );
}

export default Navbar;
