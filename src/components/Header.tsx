import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-foreground text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-xl font-bold">NWR</h1>
        <nav className="space-x-6">
          <Link href="/">Home</Link>
          <Link href="/sell">Sell</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  )
}
