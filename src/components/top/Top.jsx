import React from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import "./Top.scss";

function Top() {
  const handleClick = (id) => {
    if (id === "header") {
      const element = document.querySelector("#header");
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="top-of-page-pls">
      <button>
        <FaArrowCircleUp
          className="fa-top"
          onClick={() => handleClick("header")}
        />
      </button>
    </div>
  );
}

export default Top;
