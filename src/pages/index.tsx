import Head from "next/head";

import React from "react";
import NavBar from "../components/Navbar/navbar";
import Bubbles from "../components/Animation/animation";
import WelcomeCard from "../components/Cards/WelcomeCard/WelcomeCard";
import TopArrow from "../components/ScrollTopButton/scrollTopButton";

import Footer from "../sections/Footer/footer";
import AboutSection from "../sections/About/about";
import MenuFAQ from "../sections/FAQ/MenuFAQ";
import Roadmap from "../sections/Roadmap/roadmap";
import Crew from "../sections/Crew/crew";

import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { useWallet } from "@solana/wallet-adapter-react";
import Image from "next/image";

import { shortenAddress } from "../utils/candy-machine";
import useCandyMachine from "../hooks/use-candy-machine";
import useWalletBalance from "../hooks/use-wallet-balance";
import Countdown from "react-countdown";
import {
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";

const Home = () => {
  const [balance] = useWalletBalance();
  const [isActive, setIsActive] = useState(false);
  const wallet = useWallet();
  const [quantity, setQuantity] = useState(1);

  const setMintCount = (count: number) => {
    setQuantity(count);
  };

  const {
    isSoldOut,
    mintStartDate,
    isMinting,
    nftsData,
    onMintNFT,
  } = useCandyMachine();

  let buttonClassName =
    "flex justify-center items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-36";
  let disabled = isMinting || isSoldOut || !isActive;
  if (disabled) {
    buttonClassName =
      "flex justify-center items-center bg-blue-500 text-white font-bold py-2 px-4 opacity-50 rounded-full cursor-not-allowed w-36";
  }

  let buttonContent: any = "LOG IN TO MINT";
  let buttonContentConnected: any = "MINT";
  if (isMinting) {
    buttonContent = (
      <div>
        <div
          style={{ borderTopColor: "transparent" }}
          className="w-8 h-8 border-4 border-blue-400 border-solid rounded-full animate-spin"
        ></div>
      </div>
    );
  }

  if (isSoldOut) {
    buttonContent = "SOLD OUT";
  }

  if (!isActive) {
    buttonContent = !isActive && (
      <Countdown
        date={mintStartDate}
        onMount={({ completed }) => completed && setIsActive(true)}
        onComplete={() => setIsActive(true)}
        renderer={renderAliveCounter}
      />
    );
  }

  return (
    <main>
      <Toaster />
      <Head>
        <link rel="icon" href="favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        />
        <meta name="theme-color" content="#000000" />
        <meta property="og:title" content="Crazy Pirates NFT's" />
        <meta
          property="og:type"
          content="A website for the Craziest Pirates of the NFT sea!"
        />
        <meta property="og:url" content="https://crazypiratenft.com" />
        <meta property="og:image" content="pirate.png" />
        <link rel="apple-touch-icon" href="logo192.png" />

        <link rel="manifest" href="manifest.json" />

        <title>Crazy Pirates!</title>
      </Head>
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
    </main>
  );
};

const renderAliveCounter = ({
  days,
  hours,
  minutes,
  seconds,
  completed,
}: any) => {
  return (
    <span>
      {hours} hours, {minutes} minutes, {seconds} seconds
    </span>
  );
};

export default Home;
