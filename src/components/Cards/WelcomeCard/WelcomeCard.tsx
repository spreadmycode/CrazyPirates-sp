import React, { useState } from "react";
import "animate.css";
import MintSlider from "../Slider/MintSlider";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import useCandyMachine from "../../../hooks/use-candy-machine";
import useWalletBalance from "../../../hooks/use-wallet-balance";
import { shortenAddress } from "../../../utils/candy-machine";
import Countdown from "react-countdown";

const renderAliveCounter = ({ days, hours, minutes, seconds }: any) => {
  return (
    <span className="text-gray-800 font-bold lg:text-2xl sm:text-xl cursor-default">
      Live in {days} days, {hours} hours, {minutes} minutes, {seconds} seconds
    </span>
  );
};

function WelcomeCard() {
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
    <div className="animate__fadeInDown">
      <div className="row-container">
        <ScrollAnimation
          animateIn="animate__slideInLeft"
          animateOut="animate__slideoutLeft"
          className="welcome-card"
        >
          <span>Welcome to Crazy Pirates!</span>

          {/*<div>
             {!wallet.connected &&
              <span
              className="text-gray-800 font-bold text-2xl cursor-default">
                NOT CONNECTED, PLEASE CLICK SELECT WALLET...
              </span>
            }

            {wallet.connected &&
              <p className="text-gray-800 font-bold text-lg cursor-default">Address: {shortenAddress(wallet.publicKey?.toBase58() || "")}</p>
            }

            {wallet.connected &&
              <>
                <p className="text-gray-800 font-bold text-lg cursor-default">Balance: {(balance || 0).toLocaleString()} SOL</p>
                <p className="text-gray-800 font-bold text-lg cursor-default">Available/Minted/Total: {nftsData.itemsRemaining}/{nftsData.itemsRedeemed}/{nftsData.itemsAvailable}</p>
              </>
            }
          </div> */}

          {wallet.connected && (
            <div>
              <MintSlider setMintCount={setMintCount} />
            </div>
          )}
          {!wallet.connected && (
            <div className="wallets">
              <WalletMultiButton>{buttonContent}</WalletMultiButton>
            </div>
          )}
          {wallet.connected && (
            <button
              className={buttonClassName}
              onClick={() => onMintNFT(quantity)}
              disabled={disabled}
            >
              {buttonContentConnected}
            </button>
          )}
        </ScrollAnimation>
        <div className="column-container">
          <ScrollAnimation
            animateIn="animate__slideInRight"
            animateOut="animate__slideOutRight"
            className="pirate-card"
          >
            <img src={`/images/Pirates/Gif-loop.gif`} alt="DemoPirates" />
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
}

export default WelcomeCard;
