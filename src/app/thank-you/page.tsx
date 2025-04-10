import Link from "next/link";

export default function ThankYouPage() {
    return (
      <main className="min-h-screen bg-[#0b1120] text-white pt-28 px-4 flex items-center justify-center">
        <section className="max-w-xl bg-white text-[#0b1120] p-8 rounded-lg shadow-md text-center">
          <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
          <p className="text-gray-600 mb-6">
            We’ve received your information and a team member will follow up with you shortly.
          </p>
          <Link
            href="/"
            className="inline-block bg-[#1b2a41] text-white py-3 px-6 rounded-lg font-semibold hover:bg-opacity-90 transition"
          >
            Return to Home
          </Link>
        </section>
      </main>
    )
  }
  