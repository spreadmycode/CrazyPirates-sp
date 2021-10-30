import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

function AboutSection() {
  return (
    <div id="About" className="about-container">
      <div className="about-content">
        <h1>About</h1>
        <img
          loading="lazy"
          src={`images/Props/crossed-swords.png`}
          alt="Section underline"
        />
        <h2>What is Crazy Pirates?</h2>
        <ScrollAnimation
          animateIn="animate__fadeInLeft"
          animateOut="animate__fadeOutRight"
        >
          <p>
            They are algorithmically generated 10,000 crazy pirate who are
            living on the #Solana blockchain. Each crazy pirate 🏴‍☠️ has a unique
            set of traits and accessories, or none at all. Rarity charts and a
            full list of minted pirates will be released at the time of minting.
            We have several airdrops and other surprises planned to bring
            immediate value to the holders of our Genesis Collection.
          </p>
        </ScrollAnimation>
      </div>
    </div>
  );
}

export default AboutSection;
