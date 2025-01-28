import { Card, CardContent } from "@/components/ui/card"

async function getCryptoData(id: string) {
  try {
    const res = await fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${id}&vs_currencies=usd&include_24hr_change=true`,
      {
        next: { revalidate: 60 },
        headers: {
          Accept: "application/json",
        },
      },
    )
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`)
    }
    return await res.json()
  } catch (error) {
    console.error("Error fetching crypto data:", error)
    return null
  }
}

const CryptoLogos = {
  BTC: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" width="32" height="32" {...props}>
      <g fill="none" fillRule="evenodd">
        <circle cx="16" cy="16" r="16" fill="#F7931A" />
        <path
          fill="#FFF"
          fillRule="nonzero"
          d="M23.189 14.02c.314-2.096-1.283-3.223-3.465-3.975l.708-2.84-1.728-.43-.69 2.765c-.454-.114-.92-.22-1.385-.326l.695-2.783L15.596 6l-.708 2.839c-.376-.086-.746-.17-1.104-.26l.002-.009-2.384-.595-.46 1.846s1.283.294 1.256.312c.7.175.826.638.805 1.006l-.806 3.235c.048.012.11.03.18.057l-.183-.045-1.13 4.532c-.086.212-.303.531-.793.41.018.025-1.256-.313-1.256-.313l-.858 1.978 2.25.561c.418.105.828.215 1.231.318l-.715 2.872 1.727.43.708-2.84c.472.127.93.245 1.378.357l-.706 2.828 1.728.43.715-2.866c2.948.558 5.164.333 6.097-2.333.752-2.146-.037-3.385-1.588-4.192 1.13-.26 1.98-1.003 2.207-2.538zm-3.95 5.538c-.533 2.147-4.148.986-5.32.695l.95-3.805c1.172.293 4.929.872 4.37 3.11zm.535-5.569c-.487 1.953-3.495.96-4.47.717l.86-3.45c.975.243 4.118.696 3.61 2.733z"
        />
      </g>
    </svg>
  ),
  ETH: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" width="32" height="32" {...props}>
      <g fill="none" fillRule="evenodd">
        <circle cx="16" cy="16" r="16" fill="#627EEA" />
        <g fill="#FFF" fillRule="nonzero">
          <path fillOpacity=".602" d="M16.498 4v8.87l7.497 3.35z" />
          <path d="M16.498 4L9 16.22l7.498-3.35z" />
          <path fillOpacity=".602" d="M16.498 21.968v6.027L24 17.616z" />
          <path d="M16.498 27.995v-6.028L9 17.616z" />
          <path fillOpacity=".2" d="M16.498 20.573l7.497-4.353-7.497-3.348z" />
          <path fillOpacity=".602" d="M9 16.22l7.498 4.353v-7.701z" />
        </g>
      </g>
    </svg>
  ),
  BNB: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" width="32" height="32" {...props}>
      <g fill="none">
        <circle cx="16" cy="16" r="16" fill="#F3BA2F" />
        <path
          fill="#FFF"
          d="M12.116 14.404L16 10.52l3.886 3.886 2.26-2.26L16 6l-6.144 6.144 2.26 2.26zM6 16l2.26-2.26L10.52 16l-2.26 2.26L6 16zm6.116 1.596L16 21.48l3.886-3.886 2.26 2.259L16 26l-6.144-6.144-.003-.003 2.263-2.257zM21.48 16l2.26-2.26L26 16l-2.26 2.26L21.48 16zm-3.188-.002h.002V16L16 18.294l-2.291-2.29-.004-.004.004-.003.401-.402.195-.195L16 13.706l2.293 2.293z"
        />
      </g>
    </svg>
  ),
}

export default async function CryptoPrice({ id, name, symbol }: { id: string; name: string; symbol: string }) {
  const data = await getCryptoData(id)
  const Logo = CryptoLogos[symbol as keyof typeof CryptoLogos]

  if (!data) {
    return (
      <Card className="bg-gray-900 border-green-500 border-2 overflow-hidden">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              {Logo && <Logo className="mr-2" />}
              <h2 className="text-xl font-bold text-green-400">{name}</h2>
            </div>
            <span className="text-sm font-medium">{symbol}</span>
          </div>
          <div className="text-xl font-bold mb-2 text-green-400">Data unavailable</div>
          <div className="text-sm text-yellow-400">Unable to fetch price data</div>
        </CardContent>
      </Card>
    )
  }

  const price = data[id].usd
  const change = data[id].usd_24h_change

  return (
    <Card className="bg-gray-900 border-green-500 border-2 overflow-hidden">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            {Logo && <Logo className="mr-2" />}
            <h2 className="text-xl font-bold text-green-400">{name}</h2>
          </div>
          <span className="text-sm font-medium">{symbol}</span>
        </div>
        <div className="text-3xl font-bold mb-2 text-green-400">${price.toLocaleString()}</div>
        <div className={`text-sm ${change >= 0 ? "text-green-400" : "text-red-400"}`}>
          {change >= 0 ? "▲" : "▼"} {Math.abs(change).toFixed(2)}%
        </div>
      </CardContent>
    </Card>
  )
}

