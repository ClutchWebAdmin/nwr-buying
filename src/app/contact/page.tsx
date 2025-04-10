export default function ContactPage() {
    return (
      <main className="min-h-screen bg-[#0b1120] text-white pt-28 px-4 rounded-lg">
        <section className="max-w-3xl mx-auto bg-white text-[#0b1120] p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-4 text-center">Contact Us</h1>
          <p className="text-center text-gray-600 mb-8">
            Reach out with any questions about selling your IT gear, partnerships, or general inquiries.
          </p>
  
          <div className="space-y-6 text-sm text-gray-700">
            <div>
              <h2 className="font-semibold text-base text-[#1b2a41] mb-1">📧 Email</h2>
              <p>info@nwrusa.com</p>
            </div>
  
            <div>
              <h2 className="font-semibold text-base text-[#1b2a41] mb-1">📞 Phone</h2>
              <p>(503) 391-8191</p>
            </div>
  
            <div>
              <h2 className="font-semibold text-base text-[#1b2a41] mb-1">📍 Address</h2>
              <p>360 E. Belmont St.<br />Salem, OR 97301</p>
            </div>
          </div>
        </section>
      </main>
    )
  }
  