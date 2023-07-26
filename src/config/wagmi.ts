import { getDefaultWallets } from "@rainbow-me/rainbowkit";
import { configureChains, createClient } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { avalanche, arbitrum, bsc, polygon, optimism, polygonMumbai, avalancheFuji, optimismGoerli, arbitrumGoerli } from "@wagmi/core/chains";

import { createWagmiAdapter } from "@layerzerolabs/x-trader-joe-bridge";


const { chains: wagmiChains, provider } = configureChains(
  // provide wagmi chain configuration
  [avalanche, bsc, arbitrum, optimism, polygon, avalancheFuji, arbitrumGoerli, optimismGoerli, polygonMumbai],
  [alchemyProvider({ apiKey: process.env.ALCHEMY_ID! }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "NFTEarth",
  chains: wagmiChains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

const wagmiAdapter = createWagmiAdapter(wagmiClient as any);

export const wagmi = {
  wagmiClient,
  wagmiChains,
  wagmiAdapter,
};