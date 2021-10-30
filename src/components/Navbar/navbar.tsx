import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";

function Navbar() {
  const wallet = useWallet();
  return (
    <div id="Top" className="Navbar">
      <div className="leftSide">
        <img
          src={`/images/Pirates/PirateLogo.jpeg`}
          className="logo"
          alt="Logo"
        />
        <div className="links">
          <a href="#About">About</a>

          <a href="#Roadmap">Roadmap</a>

          <a href="#FAQ">FAQ</a>

          <a href="#Crew">Crew</a>
          {!wallet.connected && (
            <div className="wallets">
              <WalletMultiButton>Select wallet</WalletMultiButton>
            </div>
          )}
          {wallet.connected && (
            <div className="wallets">
              <WalletMultiButton />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
