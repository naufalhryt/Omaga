import Link from "next/link"
import { Gift } from "lucide-react"

export default function AirdropGroupLink() {
  return (
    <div className="text-center my-8">
      <Link
        href="https://chat.whatsapp.com/DmSKtLW0ZH4IHlPh78H0xl"
        className="inline-flex items-center px-6 py-3 border border-green-500 text-green-400 font-semibold text-lg rounded-full hover:bg-green-500 hover:text-black transition-colors duration-300"
      >
        <Gift className="mr-2" />
        Join Our Whatsapp Group Airdrop Catcher
      </Link>
    </div>
  )
}

