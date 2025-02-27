import { injected, coinbaseWallet, walletConnect } from "@wagmi/connectors";
import { fallback, http, webSocket } from "viem";
import { polygon } from "@reown/appkit/networks";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";

const projectId = "96d9e23deb01fd797668d4bf3af4fec9";
const metadata = {
  name: "VERSE Voyagers",
  description:
    "Embark on an exciting journey of creativity and chance? Spin the virtual slot machine to craft your unique voyager. With over 160 million possible combinations, the possibilities are endless!",
  url: "https://voyager.verse.bitcoin.com",
  icons: ["https://voyager.verse.bitcoin.com/icon.png"],
};

let isWallet = false;
// dont have anything in session storage yet
if (!sessionStorage.getItem("isWallet")) {
  const search = new URLSearchParams(window.location.search);
  isWallet = search.get("origin") === "wallet";
  sessionStorage.setItem("isWallet", isWallet);
} else {
  isWallet = sessionStorage.getItem("isWallet") == "true";
}

const networks = [polygon];
const wagmiAdapter = new WagmiAdapter({
  projectId,
  networks,
  connectors: [
    walletConnect({
      projectId,
      showQrModal: false,
      metadata,
    }),
    ...(isWallet === true
      ? []
      : [
          injected({ shimDisconnect: true }),
          coinbaseWallet({ appName: metadata.name }),
        ]),
  ],
  transports: {
    [polygon.id]: http(),
  },
});

export default {
  projectId,
  isWallet,
  networks,
  wagmiAdapter,
  wagmiConfig: wagmiAdapter.wagmiConfig,
};
