import React from 'react'
import { useMemo } from 'react'
import { ConnectionProvider,WalletProvider } from '@solana/wallet-adapter-react'
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui'
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets'
import { SolflareWalletAdapter } from '@solana/wallet-adapter-wallets'
import { SOLANA_HOST } from '../utils/const'

const WalletConnectionProvider = ({children})=> {

        const endpoint = useMemo(()=> SOLANA_HOST,[])
        const wallets = useMemo(() => 
        [new SolflareWalletAdapter], [])
    
  return (
    <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets}
        autoConnect>
            <WalletModalProvider>{children}</WalletModalProvider>
        </WalletProvider>
    </ConnectionProvider>
  )
}

export default WalletConnectionProvider