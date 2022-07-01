import '../styles/globals.css'
import dynamic from 'next/dynamic'

require('@solana/wallet-adapter-react-ui/styles.css')
const WalletConnectionProvider = dynamic(
  () => import('../context/WalletConnectionProvider'),
  {
    ssr:false
  }
)

function MyApp({ Component, pageProps }) {
  return (
  <WalletConnectionProvider>
      <Component {...pageProps} />
  </WalletConnectionProvider>
  )
}

export default MyApp
