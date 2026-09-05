---
qid: ing_407e4cf601__eli5__local
question: 'Explain: Origin Overload on Misses — Content Delivery Network (CDN) | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 215
total_tokens: 382
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:18:18-05:00'
sources: []
---

Think of a CDN as a giant library that keeps copies of books (web pages, videos) all over the world so people can read them quickly.  
When someone asks for a book that isn’t in the nearest copy‑cat’s shelf, the library must fetch it from somewhere else—this is a *miss*.  

Now imagine every time a miss happens, the library automatically orders an extra copy of that same book and ships it to the nearest shelves. That “extra copy” is the *origin overload on misses*: the CDN keeps sending new copies to the origin server (the main source) whenever a user can’t find the content locally.  

The result? The origin gets hit with more requests than necessary, like a clerk being asked to re‑order the same book over and over, which slows down the whole system.  
In plain terms: the CDN keeps overloading its own source by repeatedly pulling missing data instead of caching it efficiently.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
