import React from "react";

function Footer() {
  return (
    <div>
      <div className="footer">
        <img src={`images/Props/footer.png`} alt="Sea deep" />
        <h2>
          Developed by:
          <a
            href="https://it-techgroup.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            IT-TECHGROUP
          </a>
        </h2>
      </div>
      <div className="social-media">
        <h1>
          Contact us:
          <a
            href="https://instagram.com/crazypiratenft"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={`images/Props/Icons/Instagram.png`}
              alt="instagram icon"
            />
          </a>
          <a
            href="https://twitter.com/nftcrazypirate_"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={`images/Props/Icons/Twitter.png`} alt="media icon" />
          </a>
          <a
            href="https://discord.gg/tDRJsGWh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={`images/Props/Icons/Discord.png`} alt="media icon" />
          </a>
        </h1>
      </div>
    </div>
  );
}

export default Footer;
