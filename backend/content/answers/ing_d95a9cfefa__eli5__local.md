---
qid: ing_d95a9cfefa__eli5__local
question: 'Explain: Choosing a Strategy — Caching Strategies Summary | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 310
total_tokens: 471
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:18:58-05:00'
sources: []
---

Imagine you’re running a busy café that serves the same popular dish every day—say, a latte. The barista (your server) can either make each latte from scratch (no cache), or keep a few ready‑made lattes in a small fridge (cache). How many lattes to keep and when to replace them is your “caching strategy.”

**1. Least Recently Used (LRU)** – Like the fridge that always discards the latte that hasn’t been ordered for the longest time. Good if people tend to reorder the same drinks.

**2. Most Frequently Used (MFU)** – Keeps the most popular lattes on hand, useful when a few items dominate sales.

**3. Time‑to‑Live (TTL)** – Each latte expires after a set time; after that it’s thrown out and fresh ones are made. Handy when recipes change often or freshness matters.

**4. Random Replacement** – If the fridge is full, toss one at random to make room for a new latte. Simple but can be wasteful if some lattes never get served again.

Choosing which strategy to use depends on how customers order (access pattern), how quickly content changes, and how much storage you have. Think of it as deciding how many pre‑made drinks the barista keeps ready so that orders come through smoothly without over‑stocking or wasting resources.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
