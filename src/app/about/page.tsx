export default function AboutPage() {
    return (
      <main className="min-h-screen bg-[#0b1120] text-white pt-28 px-4 pb-20 rounded-lg">
        <section className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-center">All About Our Team</h1>
          <p className="text-center text-gray-300 mb-12">
            Northwest Remarketing is a leading, nationally known reseller of IT and surplus technology equipment. Companies of all sizes have been entrusting Northwest Remarketing to resell their excess inventory.
          </p>
  
          {/* TEAM MEMBERS */}
          <div className="space-y-12">
            {/* Chris */}
            <div className="bg-white text-[#1b2a41] p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-2">Chris Blackburn</h2>
              <p className="mb-4">
                Hello, I am a Gemini, I enjoy long walks in our warehouse, spending quality time reviewing asset lists, and love buying equipment. In my spare time, I explore the recently painful world of investment real estate. My passions include stocks, options, and new inventions. I&apos;m incredibly excited about the future — with software companies and side projects to prove it. I&apos;m also setting up a BFRO branch on the Oregon Coast... email me if you want in.
              </p>
              <p className="font-semibold">Hobbies:</p>
              <p>Real Estate, Investing, Bigfoot Hunting</p>
            </div>
  
            {/* Sean */}
            <div className="bg-white text-[#1b2a41] p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-2">Sean Blackburn</h2>
              <p className="mb-4">
                A Salem, Oregon native for over 41 years, and a proud father of 2, Sean is an accomplished fly fisherman with more than 40 years of experience. He enjoys duck hunting and high-intensity workouts. With 28+ years in telecom, Sean has built the professional team that drives NWR forward.
              </p>
              <p className="font-semibold">Hobbies:</p>
              <p>Fishing, Working Out</p>
            </div>
  
            {/* Louis */}
            <div className="bg-white text-[#1b2a41] p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-1">
                Louis Zahler <a href="mailto:louis@nwrusa.com" className="text-sm font-normal text-blue-600 hover:underline ml-1">louis@nwrusa.com</a>
                </h2>

              <p className="mb-4">
                I’ve been with NW Remarketing for over 12 years and love the IT industry. When I&apos;m not providing customer solutions, I enjoy time with my wife and two children. I&apos;m always improving strategies and focused on long-lasting relationships. Reach out with any questions!
              </p>
              <p className="font-semibold">Hobbies:</p>
              <p>Fishing, Hunting, Bowling, Woodworking</p>
            </div>
  
            {/* Kurt */}
            <div className="bg-white text-[#1b2a41] p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-1">
                Kurt Paulus <a href="mailto:kurt@nwrusa.com" className="text-sm font-normal text-blue-600 hover:underline ml-1">kurt@nwrusa.com</a>
                </h2>

              <p className="mb-4">
                Native Oregonian and Oregon State grad, I&apos;ve been in telecom sales with NWR for 23 years. I thrive in our fast-paced environment and value strong relationships with customers. Outside work, I enjoy time with family, the outdoors, and sampling Oregon&apos;s best craft brews.
              </p>
              <p className="font-semibold">Hobbies:</p>
              <p>Family, Fishing, Hunting, Biking, Sampling Brews</p>
            </div>
          </div>
        </section>
      </main>
    )
  }
  