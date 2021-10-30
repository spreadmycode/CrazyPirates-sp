import React from "react";

function ScrollTopButton() {
  return (
    <div className="btn-top">
      <button type="button">
        <a href="#Top">
          <img src={`/images/Props/TopArrow.png`} alt="arrow icon" />
        </a>
      </button>
    </div>
  );
}

export default ScrollTopButton;
