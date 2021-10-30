import React from "react";
import NavBar from "../../components/Navbar/navbar";
import Bubbles from "../../components/Animation/animation";
import WelcomeCard from "../../components/Cards/WelcomeCard/WelcomeCard";
import TopArrow from "../../components/ScrollTopButton/scrollTopButton";

import Footer from "../../sections/Footer/footer";
import AboutSection from "../../sections/About/about";
import MenuFAQ from "../../sections/FAQ/MenuFAQ";
import Roadmap from "../../sections/Roadmap/roadmap";
import Crew from "../../sections/Crew/crew";

function Homepage() {
  return (
    <div>
      <TopArrow />
      <Bubbles />
      <div className="ImageBackground">
        <NavBar />
        <WelcomeCard />
        <AboutSection />
      </div>
      <div className="LinearBackground">
        <Roadmap />
        <MenuFAQ />
        <Crew />
        <Footer />
      </div>
    </div>
  );
}

export default Homepage;
