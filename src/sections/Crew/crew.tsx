import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

function Crew() {
  return (
    <div id="Crew">
      <ScrollAnimation
        animateIn="animate__slideInUp"
        animateOut="animate__fadeOut"
        className="crew-content"
      >
        <h1>Captain Crew</h1>
        <img src={`images/Props/crossed-swords.png`} alt="Section underline" />
        <h2>
          As creators of the craziest pirates on the planet, we are very happy
          to welcome you to the CP ship!
        </h2>
      </ScrollAnimation>
      <div className="card-container">
        <ScrollAnimation
          animateIn="animate__fadeInLeft"
          animateOut="animate__fadeOutLeft"
          className="crew-card"
        >
          <img src={`images/CaptainCrew/CaptainCard.png`} alt="DemoPirates" />
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="animate__fadeInRight"
          animateOut="animate__fadeOutRight"
          className="crew-card"
        >
          <img src={`images/CaptainCrew/QuarterCard.png`} alt="DemoPirates" />
        </ScrollAnimation>
      </div>
    </div>
  );
}

export default Crew;
