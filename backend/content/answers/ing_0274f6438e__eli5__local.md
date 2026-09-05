---
qid: ing_0274f6438e__eli5__local
question: 'Explain: How to do distributed locking — How to do distributed locking
  \u2014 Martin Kleppmann\u2019s blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 240
total_tokens: 414
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:38:57-05:00'
sources: []
---

Imagine a big kitchen where many chefs (processes) need the same special oven (resource). If everyone could just walk in, they’d collide and bake nothing right. A *distributed lock* is like a shared “oven‑ticket” system that lives on a separate server everyone can see.

**How it works**

1. **Ask for a ticket** – A chef sends a request to the ticket‑server (the lock manager).  
2. **Get or wait** – If no one else has the oven, the server gives the chef an *exclusive ticket* and records who holds it.  
3. **Use the oven** – With the ticket, the chef can safely bake.  
4. **Return the ticket** – When finished, the chef tells the server to release the ticket so another chef can take it.

If a chef crashes or forgets to return the ticket, the server times out the lock and hands it to someone else. This way, no two chefs ever use the oven at once, even though they’re all spread across different machines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
