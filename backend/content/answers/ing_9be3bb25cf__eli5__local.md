---
qid: ing_9be3bb25cf__eli5__local
question: 'Explain: Setting Up Phoenix (Open-Source, Self-Hosted)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 281
total_tokens: 442
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:44:28-05:00'
sources: []
---

Imagine you’re building a tiny library in your own backyard that only you can visit.  
**Phoenix** is the “library software” that lets you run an AI chatbot on your own computer instead of sending questions to a big cloud server.

1. **Get the books (code)** – download Phoenix’s open‑source code from its GitHub page.  
2. **Prepare the shelves (dependencies)** – install Python, Node.js, and any other packages listed in the README; think of these as the tools that hold the books together.  
3. **Set up the library room (environment variables)** – create a file called `.env` where you write secrets like API keys or database URLs—these are just labels telling Phoenix where to find its resources.  
4. **Open the doors (run the server)** – execute `npm run dev` (or the command shown in the docs). Phoenix spins up a local web page, and you can chat with it right from your browser.

You now own the library: you control who uses it, how fast it runs, and keep all data on your own hardware. That’s self‑hosting Phoenix—your personal AI assistant, built and run entirely in your own space.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
