
'use client';
import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { ReactNode,useState,useEffect } from 'react'
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
    arbitrum,
    goerli,
    mainnet,
    optimism,
    polygon,
    zora,
} from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

const { chains, publicClient, webSocketPublicClient } = configureChains(
    [
        mainnet,
        polygon,
        optimism,
        arbitrum,
        zora,
        ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [goerli] : []),
    ],
    [publicProvider()]
);


const { connectors } = getDefaultWallets({
    appName: 'X-NFT',
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID||'f69945d89a7a2ba608de15c6c66c9e00',
    chains,
});

const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient,
    webSocketPublicClient,
});

function RainbowWagmiProvider({children}:{children:ReactNode}) {
    const [mounted,setMounted]=useState(false)
    useEffect(() => setMounted(true), []);
    return (
        <WagmiConfig config={wagmiConfig}>
            <RainbowKitProvider chains={chains}>
               {mounted && children}
            </RainbowKitProvider>
        </WagmiConfig>
    );
}

export default RainbowWagmiProvider;
