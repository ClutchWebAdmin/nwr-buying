export default function Footer() {
    return (
      <footer className="bg-[#0b1120] text-sm text-center py-4 text-white">
{/* FOOTER */}

  <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
    <div className="text-center md:text-left">
      <h3 className="text-xl font-bold">NWR Buyback</h3>
      <p className="text-sm text-gray-400 mt-2">© {new Date().getFullYear()} NW Remarketing. All rights reserved.</p>
    </div>

    <div className="flex gap-6">
      <a href="/sell" className="hover:underline text-sm">Sell Equipment</a>
      <a href="/contact" className="hover:underline text-sm">Contact</a>
      <a href="/about" className="hover:underline text-sm">About</a>
    </div>
  </div>


      </footer>
    )
  }
  