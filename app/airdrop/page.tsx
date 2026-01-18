'use client'

import React from "react"

import { useState } from 'react'
import Link from 'next/link'
import { Twitter, Instagram, Copy, Check } from 'lucide-react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { useWallet } from '@/components/wallet-context'

export default function AirdropPage() {
  const { connectWallet, connected, publicKey } = useWallet()
  const [walletAddress, setWalletAddress] = useState('')
  const [copied, setCopied] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleCopyAddress = () => {
    if (publicKey) {
      navigator.clipboard.writeText(publicKey)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (walletAddress.trim()) {
      setSubmitted(true)
      setTimeout(() => {
        setWalletAddress('')
        setSubmitted(false)
      }, 3000)
    }
  }

  return (
    <main className="min-h-screen bg-[#0a1f1a] overflow-hidden">
      <Header connectWallet={connectWallet} connected={connected} publicKey={publicKey} />
      
      {/* Airdrop Section */}
      <section className="min-h-screen flex items-center justify-center pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Back Button */}
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-[#00d4aa] hover:text-[#00d4aa]/80 transition-colors mb-8"
          >
            <span>←</span>
            <span>Back to Home</span>
          </Link>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Info */}
            <div className="space-y-8 animate-fade-in-up">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-[#ffffff] mb-4">
                  Free VIOR Airdrop
                </h1>
                <p className="text-xl text-[#b0d4cc]">
                  Get 1000 free VIOR tokens! Follow us on social media and submit your Phantom wallet address to claim your airdrop.
                </p>
              </div>

              {/* Steps */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-[#00d4aa]">How to Claim:</h2>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#00d4aa] text-[#0a1f1a] font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="font-bold text-[#ffffff] mb-1">Follow on X (Twitter)</h3>
                      <p className="text-[#b0d4cc]">Follow @Vior_Coin on Twitter for the latest updates</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#00d4aa] text-[#0a1f1a] font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h3 className="font-bold text-[#ffffff] mb-1">Follow on Instagram</h3>
                      <p className="text-[#b0d4cc]">Follow @viorcoin on Instagram</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#00d4aa] text-[#0a1f1a] font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h3 className="font-bold text-[#ffffff] mb-1">Submit Your Wallet</h3>
                      <p className="text-[#b0d4cc]">Enter your Phantom wallet address below</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                <a
                  href="https://twitter.com/Vior_Coin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-lg bg-[#132b24] border border-[#00d4aa]/30 text-[#00d4aa] hover:border-[#00d4aa] hover:bg-[#1a3a32] transition-all"
                >
                  <Twitter size={20} />
                  <span>Follow on X</span>
                </a>
                <a
                  href="https://instagram.com/viorcoin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-lg bg-[#132b24] border border-[#00d4aa]/30 text-[#00d4aa] hover:border-[#00d4aa] hover:bg-[#1a3a32] transition-all"
                >
                  <Instagram size={20} />
                  <span>Follow on IG</span>
                </a>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="space-y-6 animate-fade-in-right">
              <div className="p-8 rounded-2xl border border-[#00d4aa]/30 bg-gradient-to-br from-[#132b24]/50 to-[#0a1f1a]/50 backdrop-blur-sm">
                <div className="mb-6">
                  <div className="inline-block px-4 py-2 rounded-full bg-[#00d4aa]/10 border border-[#00d4aa]/30 mb-4">
                    <span className="text-[#00d4aa] font-bold">Reward: 1000 VIOR</span>
                  </div>
                </div>

                {!connected ? (
                  <div className="space-y-4">
                    <p className="text-[#b0d4cc] mb-6">
                      Connect your Phantom wallet to submit your airdrop claim.
                    </p>
                    <button
                      onClick={connectWallet}
                      className="w-full px-6 py-3 rounded-lg bg-[#00d4aa] text-[#0a1f1a] font-bold hover:shadow-lg hover:shadow-[#00d4aa]/40 transition-all"
                    >
                      Connect Phantom Wallet
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-[#b0d4cc] text-sm font-medium mb-2">
                        Your Phantom Wallet Address
                      </label>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={publicKey || ''}
                          readOnly
                          className="flex-1 px-4 py-3 rounded-lg bg-[#0a1f1a] border border-[#00d4aa]/20 text-[#00d4aa] text-sm"
                        />
                        <button
                          type="button"
                          onClick={handleCopyAddress}
                          className="px-4 py-3 rounded-lg bg-[#132b24] border border-[#00d4aa]/20 text-[#00d4aa] hover:border-[#00d4aa] transition-all"
                        >
                          {copied ? <Check size={20} /> : <Copy size={20} />}
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[#b0d4cc] text-sm font-medium mb-2">
                        Confirm Your Wallet Address
                      </label>
                      <input
                        type="text"
                        placeholder="Paste your wallet address to confirm"
                        value={walletAddress}
                        onChange={(e) => setWalletAddress(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg bg-[#0a1f1a] border border-[#00d4aa]/20 text-[#ffffff] placeholder-[#b0d4cc]/50 focus:outline-none focus:border-[#00d4aa]/50"
                      />
                    </div>

                    <div className="p-4 rounded-lg bg-[#00d4aa]/10 border border-[#00d4aa]/20">
                      <p className="text-[#b0d4cc] text-sm">
                        ✓ Make sure you've followed us on both X and Instagram before submitting
                      </p>
                    </div>

                    <button
                      type="submit"
                      disabled={!walletAddress.trim()}
                      className="w-full px-6 py-3 rounded-lg bg-[#00d4aa] text-[#0a1f1a] font-bold hover:shadow-lg hover:shadow-[#00d4aa]/40 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {submitted ? 'Claimed! 🎉' : 'Claim 1000 VIOR'}
                    </button>

                    {submitted && (
                      <div className="p-4 rounded-lg bg-[#00d4aa]/20 border border-[#00d4aa]/50">
                        <p className="text-[#00d4aa] font-bold">
                          🎉 Airdrop claimed successfully! Check your wallet.
                        </p>
                      </div>
                    )}
                  </form>
                )}
              </div>

              {/* Info Box */}
              <div className="p-4 rounded-lg bg-[#132b24]/50 border border-[#00d4aa]/20">
                <p className="text-[#b0d4cc] text-sm">
                  <strong>Note:</strong> Make sure to follow both social accounts and use a valid Phantom wallet address to receive your free 1000 VIOR tokens.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
