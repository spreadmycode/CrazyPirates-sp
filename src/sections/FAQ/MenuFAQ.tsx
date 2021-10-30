import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

function MenuFAQ() {
  return (
    <div id="FAQ" className="faq-container">
      <h1>FAQ</h1>
      <img
        loading="lazy"
        src={`images/Props/crossed-swords.png`}
        alt="Section underline"
      />
      <ScrollAnimation
        animateIn="animate__fadeInLeft"
        animateOut="animate__fadeOutRight"
        className="faq-content"
      >
        <details>
          <summary>
            <span className="safari-fix">
              <img
                loading="lazy"
                src={`images/Props/FAQskull.png`}
                alt="box decoration"
              />
              <h2>Common questions</h2>
              <img
                loading="lazy"
                src={`images/Props/FAQarrow.png`}
                className="arrow"
                alt="Open/Close button"
              />
            </span>
          </summary>
          <span>
            NAME: Crazy Pirates
            <br />
            MINT DATE: Available soon!
            <br />
            PRICE: 2 Solanas
            <br />
            MAXIMUM MINTING/PERSON: 20
          </span>
        </details>
      </ScrollAnimation>
      <ScrollAnimation
        animateIn="animate__fadeInRight"
        animateOut="animate__fadeOutLeft"
        className="faq-content"
      >
        <details>
          <summary>
            <span className="safari-fix">
              <img
                loading="lazy"
                src={`images/Props/FAQskull.png`}
                alt="box decoration"
              />
              <h2>When will I get my Crazy Pirate?</h2>
              <img
                loading="lazy"
                src={`images/Props/FAQarrow.png`}
                className="arrow"
                alt="Open/Close button"
              />
            </span>
          </summary>
          <span>
            Your Crazy Pirate will bet to your wallet right after the minting,
            which might take few minutes
          </span>
        </details>
      </ScrollAnimation>
      <ScrollAnimation
        animateIn="animate__fadeInLeft"
        animateOut="animate__fadeOutRight"
        className="faq-content"
      >
        <details>
          <summary>
            <span className="safari-fix">
              <img
                loading="lazy"
                src={`images/Props/FAQskull.png`}
                alt="box decoration"
              />
              <h2>What wallets can I use?</h2>
              <img
                loading="lazy"
                src={`images/Props/FAQarrow.png`}
                className="arrow"
                alt="Open/Close button"
              />
            </span>
          </summary>
          <span>
            We will be using Sollet, Slope, Solflare and Phantom wallet for the
            website connection.
          </span>
        </details>
      </ScrollAnimation>
      <ScrollAnimation
        animateIn="animate__fadeInRight"
        animateOut="animate__fadeOutLeft"
        className="faq-content"
      >
        <details>
          <summary>
            <span className="safari-fix">
              <img
                loading="lazy"
                src={`images/Props/FAQskull.png`}
                alt="box decoration"
              />
              <h2>What if I have a question that hasnt been answered here?</h2>
              <img
                loading="lazy"
                src={`images/Props/FAQarrow.png`}
                className="arrow"
                alt="Open/Close button"
              />
            </span>
          </summary>
          <span>
            Dive on over to our Discord, don’t worry the Pirate don’t steal. We
            have a very active community and we’d be happy to answer any
            questions you may have.
          </span>
        </details>
      </ScrollAnimation>
    </div>
  );
}

export default MenuFAQ;
