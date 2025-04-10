import Image from 'next/image'

export const metadata = {
  title: 'NWR Buyback | Sell Your Networking Equipment',
  description: 'Sell your used IT equipment to NWR. We buy servers, switches, firewalls, and more from top brands like Cisco and Juniper.',
  keywords: [
    'sell used networking equipment',
    'IT equipment buyback',
    'NWR Buyback',
    'sell used servers',
    'used Cisco hardware',
    'used Juniper switches',
    'network gear recycling',
    'data center liquidation',
    'sell used IT gear',
    'switch and router buyback',
    'business IT equipment resale',
    'enterprise network resale',
    'surplus IT hardware buyers',
    'IT asset recovery',
    'sell enterprise tech equipment'
  ]
}

export default function Home() {
  return (
    <main style={{ background: 'var(--background)', color: 'var(--foreground)' }}>
      {/* HERO SECTION */}
      <section className="relative min-h-[80vh] flex items-center justify-center text-center">
      <Image
    src="/placeholder.png"
    alt="Server rack background"
    fill
    className="object-cover z-0 rounded-2xl"
  />
        <div className="absolute inset-0  bg-opacity-50 z-10" />
        <div className="relative z-20 px-4">
          <h1 className="text-4xl sm:text-6xl font-bold text-white">Sell Your Used IT Equipment</h1>
          <p className="text-xl mt-4 text-white">Fast, secure buyback for servers, switches, routers & more.</p>
          <a
            href="/sell"
            className="mt-6 inline-block bg-[var(--foreground)] text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Get a Quote
          </a>
        </div>
      </section>

      {/* BRANDS WE'RE INTERESTED IN */}
      <section className="py-16 bg-white text-[#1b2a41] text-center px-4">
        <h2 className="text-3xl font-bold mb-6">Brands We’re Interested In</h2>
        <p className="max-w-2xl mx-auto text-gray-600 mb-12">
          We buy and resell IT equipment from the top manufacturers in networking and data center infrastructure.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {[
            { name: 'Cisco', src: '/logo-placeholder.png' },
            { name: 'Juniper', src: '/logo-placeholder.png' },
            { name: 'Arista', src: '/logo-placeholder.png' },
            { name: 'HPE', src: '/logo-placeholder.png' },
            { name: 'Dell', src: '/logo-placeholder.png' }
          ].map((brand) => (
            <div key={brand.name} className="flex flex-col items-center">
              <img
                src={brand.src}
                alt={brand.name}
                className="h-16 sm:h-20 grayscale hover:grayscale-0 transition"
              />
              <span className="mt-2 text-sm font-medium">{brand.name}</span>
            </div>
          ))}
        </div>
      </section>



      {/* WHAT WE BUY */}
      <section
        className="py-16 text-center px-4 text-white rounded-2xl"
        style={{
          background: 'linear-gradient(105deg, #a8ff78 0%, #1b2a41 15%, #1b2a41 85%, #a8ff78 100%)',
        }}
      >

        <h2 className="text-3xl text-accent font-bold mb-6">What We Buy</h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-12">
          We purchase all kinds of networking and data center equipment from top brands like Cisco, Juniper, Arista, Dell, HP, and more.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: 'Servers', img: '/server-placeholder.png' },
            { title: 'Switches', img: '/switch-placeholder.png' },
            { title: 'Firewalls', img: '/firewall-placeholder.png' },
            { title: 'Storage Arrays', img: '/storage-array-placeholder.png' },
            { title: 'Access Points', img: '/access-point-placeholder.png' },
            { title: 'Transceivers', img: '/transceiver-placeholder.png' },
          ].map(({ title, img }) => (
            <div key={title} className="bg-foreground rounded-lg text-gray-300 overflow-hidden shadow-sm">
              <Image
                src={img}
                alt={title}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 bg-white text-center text-[#1b2a41] px-4">
        <h2 className="text-3xl font-bold mb-6">How It Works</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Selling your used IT gear to NWR is simple, fast, and secure.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: 'Submit Equipment Info',
              desc: 'Tell us what you’re selling — make, model, and quantity.',
              icon: '📝',
            },
            {
              title: 'Get a Custom Quote',
              desc: 'We’ll evaluate your gear and send a fair market offer fast.',
              icon: '💰',
            },
            {
              title: 'Ship & Get Paid',
              desc: 'We handle shipping and pay you fast. It’s that easy.',
              icon: '🚚',
            },
          ].map(({ title, desc, icon }) => (
            <div key={title} className="flex flex-col items-center text-center p-6 rounded-xl shadow-md bg-gray-50">
              <div className="text-5xl mb-4">{icon}</div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 text-center bg-[var(--foreground)] text-white rounded-lg">
        <h2 className="text-3xl font-bold mb-4">Ready to Sell Your Equipment?</h2>
        <p className="mb-6">It only takes 2 minutes to get a custom quote.</p>
        <a href="/sell" className="inline-block bg-white text-[var(--foreground)] font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition">
          Get a Quote
        </a>
      </section>



    </main>
  )
}





