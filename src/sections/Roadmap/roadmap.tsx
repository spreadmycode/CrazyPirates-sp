import React from "react";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";

function Roadmap() {
  return (
    <div>
      <div className="roadmap-title">
        <h1>Roadmap</h1>
        <img src={`images/Props/crossed-swords.png`} alt="Section underline" />
      </div>
      <div id="Roadmap" className="roadmap-container">
        <ScrollAnimation
          animateIn="animate__slideInLeft"
          animateOut="animate__slideOutLeft"
          className="image"
        >
          <img src={`images/Props/Map.png`} alt="roadmap" />
        </ScrollAnimation>

        <div>
          <ScrollAnimation
            animateIn="animate__slideInRight"
            animateOut="animate__slideOutRight"
            offset={70}
            className="roadmap-content"
          >
            <h3>0%</h3>
            <p>
              Is the launch day 🚀!!! 10,000 Crazy Pirates will be released on
              the Solanas (SOL) blockchain vía our website!
            </p>
            <br />
          </ScrollAnimation>
          <br />
          <ScrollAnimation
            animateIn="animate__slideInLeft"
            animateOut="animate__slideOutLeft"
            offset={70}
            className="roadmap-content"
          >
            <h3>10%</h3>
            <p>We are giving away 5 Crazy pirates to random holders.</p>
            <br />
          </ScrollAnimation>
          <br />

          <ScrollAnimation
            animateIn="animate__slideInRight"
            animateOut="animate__slideOutRight"
            offset={70}
            className="roadmap-content"
          >
            <h3>25%</h3>
            <p>
              A raffle for a trip to go to the Caribbean to dive in search of a
              pirate treasure!
            </p>
            <br />
          </ScrollAnimation>

          <br />

          <ScrollAnimation
            animateIn="animate__slideInLeft"
            animateOut="animate__slideOutLeft"
            offset={70}
            className="roadmap-content"
          >
            <h3>35%</h3>
            <p>We are giving away 20 Solanas to our holders</p>
            <br />
          </ScrollAnimation>

          <br />

          <ScrollAnimation
            animateIn="animate__slideInRight"
            animateOut="animate__slideOutRight"
            offset={70}
            className="roadmap-content"
          >
            <h3>50%</h3>
            <p>A trip to a cruise for 2 people to travel wherever they want.</p>
            <br />
          </ScrollAnimation>

          <br />

          <ScrollAnimation
            animateIn="animate__slideInLeft"
            animateOut="animate__slideOutLeft"
            offset={70}
            className="roadmap-content"
          >
            <h3>60%</h3>
            <p>
              If these sales are reached and the price of the Crazy Pirate NFT
              are below 2 Solanas we will buy back 200 NFT.
            </p>
            <br />
          </ScrollAnimation>

          <br />

          <ScrollAnimation
            animateIn="animate__slideInRight"
            animateOut="animate__slideOutRight"
            offset={70}
            className="roadmap-content"
          >
            <h3>75%</h3>
            <p>We will give $ 20,000 in charity to save aquatic lives</p>
            <br />
          </ScrollAnimation>

          <br />

          <ScrollAnimation
            animateIn="animate__slideInLeft"
            animateOut="animate__slideOutLeft"
            offset={70}
            className="roadmap-content"
          >
            <h3>80%</h3>
            <p>
              If these sales are reached and the price of the Crazy Pirate NFT
              are below 2 Solanas we will buy back 200 NFT.
            </p>
            <br />
          </ScrollAnimation>

          <br />

          <ScrollAnimation
            animateIn="animate__slideInRight"
            animateOut="animate__slideOutRight"
            offset={70}
            className="roadmap-content"
          >
            <h3>100%</h3>
            <p>We will be giving away A 50,000$ boat to navigate the 7 seas</p>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
