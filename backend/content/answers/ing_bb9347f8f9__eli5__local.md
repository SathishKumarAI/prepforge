---
qid: ing_bb9347f8f9__eli5__local
question: 'Explain: Infinite TTL — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 224
total_tokens: 385
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:34:40-05:00'
sources: []
---

**Infinite TTL – “Forever‑Storing a Book in the Library”**

Imagine you’re reading a book at the library and you want to keep it handy for future visits. A normal shelf (finite TTL) is like putting the book back after a week; if you need it again, someone else might have taken it, or it could be misplaced. An *infinite Time‑To‑Live* cache keeps that exact copy on a special “never‑expire” shelf so every time you return, the same book is instantly in front of you.

In computer terms, caching stores data (like database results) in fast memory so later requests can skip slow calculations. With an infinite TTL, the cached entry never expires automatically; it stays until you decide to remove it yourself. This is useful when the data rarely changes or you’re willing to risk serving slightly stale information for speed.

So think of infinite‑TTL caching as a library’s “permanent shelf” that guarantees instant access but requires careful maintenance to avoid outdated copies.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
