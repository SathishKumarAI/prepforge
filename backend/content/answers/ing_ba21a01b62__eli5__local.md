---
qid: ing_ba21a01b62__eli5__local
question: What is the difference between pull and push CDNs?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 231
total_tokens: 390
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:32:13-05:00'
sources: []
---

Imagine you’re at a library that wants to give people books from all over the world.  

**Pull CDN (content delivery network)** is like a “just‑in‑case” system: when someone asks for a book, the library’s local shelf checks if it already has a copy. If not, it goes back to the main library, pulls that book over, stores it locally, and then gives it to the reader. The library only fetches books when someone actually wants them.

**Push CDN** is like a “pre‑distributed” system: before anyone asks, the library takes every popular book from the main library and ships copies to all its local shelves ahead of time. Readers get instant access because the books are already there.

*Unavoidable terms*:  
- **CDN** – a network that stores copies of content close to users so they load faster.  
- **Pull** – fetches data only when requested.  
- **Push** – sends data proactively, regardless of immediate demand.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
