'use client'

import { useState } from 'react'


export default function SellPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    equipment: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', form)
    // You can hook into an API here (like Formspree, Google Sheet, EmailJS, etc.)
  }

  return (
    <main className="min-h-screen bg-[#0b1120] text-white pt-28 px-4 rounded-lg">
      <section className="max-w-3xl mx-auto bg-white text-[#0b1120] p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-center">Sell Your Equipment</h1>
        <p className="text-center text-gray-600 mb-8">
          Fill out the form below and our team will get back to you with a custom quote.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              className="mt-1 w-full p-3 border border-gray-300 rounded"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="mt-1 w-full p-3 border border-gray-300 rounded"
              required
            />
          </div>

          <div>
            <label htmlFor="equipment" className="block text-sm font-medium">What are you selling?</label>
            <textarea
              id="equipment"
              name="equipment"
              rows={4}
              value={form.equipment}
              onChange={handleChange}
              className="mt-1 w-full p-3 border border-gray-300 rounded"
              placeholder="Make, model, quantity, etc."
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#1b2a41] text-white py-3 px-6 rounded font-semibold hover:bg-opacity-90 transition"
          >
            Submit Quote Request
          </button>
        </form>
      </section>
    </main>
  )
}
