---
qid: ing_a3c23659b4__eli5__local
question: 'Explain: Implement an LRU cache with O(1) get/put. Now add per-entry TTL.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 268
total_tokens: 437
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:57:47-05:00'
sources: []
---

Imagine a coffee shop that only has a single shelf for fresh drinks.  
The **LRU cache** is like that shelf: it keeps the last N cups you served. When a new cup comes in and the shelf is full, the shop removes the *oldest* (least recently used) cup to make room. We can find any cup on the shelf by name (the **get**) or put a new one there (the **put**) in constant time because we keep two helpers:  
1. A quick lookup table that points each name straight to its spot, and  
2. A double‑linked list that remembers the order of usage.

Now add a **TTL** (“time‑to‑live”). Think of each cup having an expiration sticker. When you request a cup, first check whether the sticker’s time has passed; if it has, treat the cup as gone—remove it from both helpers and act like it was never there. If you put a new cup, attach a fresh sticker with its own expiry time. Thus every entry still behaves in O(1) for get/put, but we also ignore any that have outlived their shelf life.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
