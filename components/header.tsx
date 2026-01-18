"use client"

import { useState } from "react"
import Link from "next/link"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50 animate-slide-down">
      <div className="absolute inset-0 overflow-hidden">
        <video autoPlay muted loop className="w-full h-full object-cover">
          <source src="/images/whatsapp-20video-202025-11-19-20at-203.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#0a1f1a]/95 backdrop-blur-md"></div>
      </div>

      {/* Navigation content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-[#00d4aa]/20 flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-3 group hover:scale-105 transition-transform duration-300">
            <div className="w-12 h-12 relative rounded-full flex items-center justify-center">
              <img src="/vior-logo.jpg" alt="VIOR Token" className="w-12 h-12 object-contain rounded-full" />
            </div>
            <span className="text-xl font-bold text-white hidden sm:inline group-hover:text-[#00d4aa] transition-colors duration-300">
              VIOR
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {["Ecosystem", "Tokenomics", "Trading", "Roadmap", "Whitepaper"].map((item, i) => (
              <Link
                key={i}
                href={`#${item.toLowerCase()}`}
                className="text-[#b0d4cc] hover:text-[#00d4aa] transition-colors duration-300 relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00d4aa] to-[#d4af37] group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          <div className="hidden sm:flex items-center gap-4">
            <Link
              href="/airdrop"
              className="px-6 py-2.5 rounded-full bg-[#00d4aa] text-[#0a1f1a] font-bold hover:shadow-xl hover:shadow-[#00d4aa]/40 transition-all duration-300 hover:scale-105 transform"
            >
              Apply for Airdrop
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#00d4aa] p-2 hover:bg-[#00d4aa]/10 rounded-lg transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 pt-4 flex flex-col gap-4 animate-slide-down">
            {["Ecosystem", "Tokenomics", "Trading", "Roadmap", "Whitepaper"].map((item, i) => (
              <Link
                key={i}
                href={`#${item.toLowerCase()}`}
                className="text-[#b0d4cc] hover:text-[#00d4aa] transition-colors"
              >
                {item}
              </Link>
            ))}
            <Link
              href="/airdrop"
              className="w-full px-4 py-2.5 rounded-full bg-[#00d4aa] text-[#0a1f1a] font-bold mt-4 hover:shadow-lg transition-all"
            >
              Apply for Airdrop
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
