'use client'

import { useState } from 'react'

export default function SellPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // TODO: hook this into backend or email system
  }

  return (
    <main style={{ background: 'var(--background)', color: 'var(--foreground)' }} className="min-h-screen py-16 px-4 flex justify-center">
      <form onSubmit={handleSubmit} className="w-full max-w-xl bg-white p-8 rounded-lg shadow-md space-y-4 border">
        <h1 className="text-3xl font-bold mb-6 text-center" style={{ color: 'var(--foreground)' }}>
          Sell Your Equipment
        </h1>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full p-3 border rounded"
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full p-3 border rounded"
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="What are you selling?"
          rows={4}
          className="w-full p-3 border rounded"
          onChange={handleChange}
          required
        />
        <button type="submit" className="w-full bg-[var(--foreground)] text-white p-3 rounded font-bold hover:opacity-90">
          Submit
        </button>
      </form>
    </main>
  )
}
