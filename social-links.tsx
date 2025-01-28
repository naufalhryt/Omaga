import { Github, Instagram, Linkedin } from "lucide-react"
import Link from "next/link"

export default function SocialLinks() {
  return (
    <div className="flex justify-center space-x-6">
      <Link href="https://instagram.com/yourusername" className="text-green-400 hover:text-green-300 transition-colors">
        <Instagram size={24} />
        <span className="sr-only">Instagram</span>
      </Link>
      <Link
        href="https://linkedin.com/in/yourusername"
        className="text-green-400 hover:text-green-300 transition-colors"
      >
        <Linkedin size={24} />
        <span className="sr-only">LinkedIn</span>
      </Link>
      <Link href="https://github.com/yourusername" className="text-green-400 hover:text-green-300 transition-colors">
        <Github size={24} />
        <span className="sr-only">GitHub</span>
      </Link>
    </div>
  )
}

