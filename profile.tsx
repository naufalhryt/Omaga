import Image from "next/image"
import { Github, Instagram, Linkedin } from "lucide-react"
import Link from "next/link"

export default function Profile() {
  return (
    <div className="bg-gray-900 border-green-500 border-2 rounded-lg p-6 mt-12 mb-8">
      <div className="flex flex-col md:flex-row items-center">
        <Image
          src="https://i.imgur.com/TEYTH0O.jpg"
          alt="Naufal Heriyanto"
          width={150}
          height={150}
          className="rounded-full border-4 border-green-500 mb-4 md:mb-0 md:mr-6"
        />
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold mb-2 text-green-400">Naufal Heriyanto</h2>
          <p className="text-green-400 mb-4">Crypto and Web3 enthusiast</p>
          <div className="flex justify-center md:justify-start space-x-4">
            <Link
              href="https://www.instagram.com/naufalhryt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-300 transition-colors"
            >
              <Instagram size={24} />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/naufal-heriyanto-44162a217/?originalSubdomain=id"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-300 transition-colors"
            >
              <Linkedin size={24} />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://github.com/naufalhryt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-300 transition-colors"
            >
              <Github size={24} />
              <span className="sr-only">GitHub</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

