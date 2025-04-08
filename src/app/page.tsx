import Image from 'next/image'

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

      {/* TRUST BRANDS SECTION */}
      <section className="py-12 text-center">
        <p className="text-gray-600 uppercase tracking-wide text-sm">Trusted by Companies Worldwide</p>
        <div className="flex flex-wrap justify-center items-center gap-8 mt-6 px-4">
          <Image src="/logo1.png" alt="Client 1" width={100} height={40} />
          <Image src="/logo2.png" alt="Client 2" width={100} height={40} />
          <Image src="/logo3.png" alt="Client 3" width={100} height={40} />
          <Image src="/logo4.png" alt="Client 4" width={100} height={40} />
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

    </main>
  )
}





