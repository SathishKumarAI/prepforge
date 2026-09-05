---
qid: ing_476e33580d__eli5__local
question: 'Explain: Table Schemas — How Uber Serves Over 40 Million Reads Per Second
  from Online Storage Using an Integrated Cache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 232
total_tokens: 404
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:30:23-05:00'
sources: []
---

Imagine a huge library that holds every book (data) in the world, but the readers (Uber’s app users) need to grab pages in seconds.  
The “table schema” is the library’s catalog: it tells you exactly where each page lives—what shelf, what aisle, which room.  
Instead of making every reader walk all the way to that exact spot (online storage), Uber places a tiny “mini‑library” right at the front desk—the integrated cache.  

When a user asks for a page, the system first checks the mini‑library. If it’s there (a cache hit), the book is handed out instantly.  
If not, the system fetches it from the main library (online storage) and copies that page into the mini‑library so future readers get it faster.  

Because the catalog lets the system find pages quickly and the front‑desk cache keeps the most‑requested ones nearby, Uber can answer more than 40 million read requests every second while keeping the huge back‑end library running smoothly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
