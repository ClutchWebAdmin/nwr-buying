'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[rgba(11,17,32,0.85)] backdrop-blur-sm px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-white text-lg font-bold">NW Remarketing Buyback</h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-white text-sm font-medium">
          <Link href="/">Home</Link>
          <Link href="/sell">Sell</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
  className="md:hidden relative w-6 h-6 flex flex-col justify-between items-center"
  onClick={() => setIsOpen(!isOpen)}
  aria-label="Toggle Navigation"
>
  <span
    className={`block h-0.5 w-full bg-white transform transition duration-300 ease-in-out ${
      isOpen ? 'rotate-45 translate-y-2' : ''
    }`}
  />
  <span
    className={`block h-0.5 w-full bg-white transition duration-300 ease-in-out ${
      isOpen ? 'opacity-0' : ''
    }`}
  />
  <span
    className={`block h-0.5 w-full bg-white transform transition duration-300 ease-in-out ${
      isOpen ? '-rotate-45 -translate-y-2' : ''
    }`}
  />
</button>

      </div>

      {/* Mobile Nav with animation */}
      <div
        className={`md:hidden flex flex-col space-y-2 text-white text-sm font-medium px-6 transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-60 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}
      >
        <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link href="/sell" onClick={() => setIsOpen(false)}>Sell</Link>
        <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
        <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
      </div>

    </header>
  )
}
