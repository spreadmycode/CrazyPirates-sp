import { useMemo } from "react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import "../styles/globals.css";
import "../styles/about.css";
import "../styles/crew.css";
import "../styles/footer.css";
import "../styles/homepage.css";
import "../styles/menu_faq.css";
import "../styles/mint_slider.css";
import "../styles/navbar.css";
import "../styles/roadmap.css";
import "../styles/scroll_top_button.css";
import "../styles/welcome_card.css";

let WALLETS: any = {
  getPhantomWallet: () => ({ name: "Phantom" }),
  getSolflareWallet: () => ({ name: "Solflare" }),
  getSolletWallet: () => ({ name: "Sollet" }),
  getSlopeWallet: () => ({ name: "Slope" }),
};
if (typeof window !== "undefined") {
  WALLETS = require("@solana/wallet-adapter-wallets");
}

import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import "@solana/wallet-adapter-react-ui/styles.css";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { WalletBalanceProvider } from "../hooks/use-wallet-balance";

const network = process.env.NEXT_PUBLIC_SOLANA_NETWORK as WalletAdapterNetwork;

const App = ({ Component, pageProps }: any) => {
  const endpoint = useMemo(() => "https://solana-api.projectserum.com", []);

  const wallets = useMemo(
    () => [
      WALLETS.getPhantomWallet(),
      WALLETS.getSolflareWallet(),
      WALLETS.getSolletWallet({ network }),
      WALLETS.getSlopeWallet(),
    ],
    []
  );

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY}
      scriptProps={{
        async: false,
        defer: false,
        appendTo: "head",
        nonce: undefined,
      }}
    >
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoConnect>
          <WalletModalProvider featuredWallets={4}>
            <WalletBalanceProvider>
              <Component {...pageProps} />
            </WalletBalanceProvider>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </GoogleReCaptchaProvider>
  );
};

export default App;
