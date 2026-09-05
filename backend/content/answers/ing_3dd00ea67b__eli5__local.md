---
qid: ing_3dd00ea67b__eli5__local
question: 'Explain: Cache-Aside (Lazy Loading) — Caching Strategies Summary | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 208
total_tokens: 373
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:13:53-05:00'
sources: []
---

Think of a library that keeps only the most popular books on its front shelf (the cache). When someone asks for a book, the librarian first looks there—if it’s there, she hands it right away (fast hit). If it isn’t (a miss), she goes to the back room where all the books are stored (the database) and brings the requested one. While she does that, she places a copy on the front shelf for next time. This is **Cache‑Aside** or **Lazy Loading**: data lives in the main storage; the cache only holds it when needed. The “cache” is just temporary memory for quick access; “lazy loading” means we load data into the cache only after a miss, not pre‑emptively. Thus, we avoid keeping everything in fast memory while still serving requests quickly when possible.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
