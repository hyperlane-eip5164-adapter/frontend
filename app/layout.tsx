'use client'
import './globals.css'
import type { Metadata } from 'next'
import { Inter,Fredoka } from 'next/font/google'
import { ChakraProvider } from './providers/chakra-provider'
import RainbowWagmiProvider from './providers/rainbow-wagmi-provider'
import { Box } from '@chakra-ui/react'
const inter = Fredoka({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'X-NFT',
  description: 'Bridge, Mint and Swap NFTS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
    <Box as='main' px={{base:4,lg:6}}>

        <RainbowWagmiProvider>

        <ChakraProvider>

        {children}
        </ChakraProvider>
        </RainbowWagmiProvider>
      </Box>
      </body>
    </html>
  )
}
