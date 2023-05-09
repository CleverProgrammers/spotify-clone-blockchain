import React from 'react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { useWallet } from '@solana/wallet-adapter-react'
import { Payment } from './Payment'

const styles = {
    loginPage:`w-screen h-screen bg-white flex justify-center
    flex-col items-center`,
    text:`text-2xl text-black p-10` 
}
function Login() {

  const wallet = useWallet()
    if(wallet.connected) return<Payment/>
  return (
    <div className={styles.loginPage}>
        <p className={styles.text}>Lütfen Giriş Yapınız</p>
        <WalletMultiButton/>
    </div>
  )
}

export default Login