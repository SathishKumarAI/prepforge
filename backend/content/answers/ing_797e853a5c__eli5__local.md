---
qid: ing_797e853a5c__eli5__local
question: 'Explain: What is the KV cache, why is it needed, and how big does it get?
  Ballpark it for a 70B-class model at 128K context.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 234
total_tokens: 417
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:48:57-05:00'
sources: []
---

Imagine your brain is reading a long novel. Each page you read builds up “notes” in your head—what’s been said so far and what the characters might say next. In an AI model, those notes are called the **KV cache** (short for *Key‑Value cache*).  

- **Keys** store the hidden “thoughts” that describe every word you’ve already processed.  
- **Values** hold the extra information needed to predict the next words quickly.

The cache is essential because it lets the model remember all earlier context without re‑computing everything from scratch, saving huge time and memory.  

For a 70‑billion‑parameter model with a 128‑k token context window, the KV cache can grow to **hundreds of megabytes—roughly 200–300 MB** (about 1–2 GB if you’re using very large hidden sizes). This is just enough to keep all past “notes” handy while the model talks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
