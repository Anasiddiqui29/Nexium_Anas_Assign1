"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { quotes } from "@/data/quotes"

export default function Home() {
  const [topic, setTopic] = useState("")
  const [result, setResult] = useState<string[]>([])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const matched = quotes.filter(q => q.topic.toLowerCase() === topic.toLowerCase()).slice(0, 3)
    setResult(matched.map(q => q.text))
  }

return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-800 via-indigo-700 to-blue-700 text-white p-6">
      <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg w-full max-w-md">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input
            placeholder="Enter topic (e.g. motivation)"
            value={topic}
            onChange={e => setTopic(e.target.value)}
            className="text-black"
          />
          <Button type="submit">Generate Quotes</Button>
        </form>

        {result.length > 0 && (
          <div className="mt-6 space-y-2">
            <h2 className="text-lg font-semibold">Quotes:</h2>
            {result.map((quote, index) => (
              <p key={index} className="text-sm text-white/90">• {quote}</p>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
  
