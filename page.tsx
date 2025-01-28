import { Suspense } from "react"
import CryptoPrice from "./components/crypto-price"
import Profile from "./components/profile"
import AirdropGroupLink from "./components/airdrop-group-link"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-green-400 p-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-8 mt-12 text-green-400">Crypto Catcher</h1>
        <Suspense fallback={<div className="text-center">Loading crypto data...</div>}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <CryptoPrice id="bitcoin" name="Bitcoin" symbol="BTC" />
            <CryptoPrice id="ethereum" name="Ethereum" symbol="ETH" />
            <CryptoPrice id="binancecoin" name="Binance Coin" symbol="BNB" />
          </div>
        </Suspense>
        <AirdropGroupLink />
        <Profile />
      </div>
    </main>
  )
}

