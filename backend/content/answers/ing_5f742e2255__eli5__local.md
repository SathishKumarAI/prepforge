---
qid: ing_5f742e2255__eli5__local
question: 'Explain: So let’s add another 16 bytes. So — FAANG System Design Interview:
  Design A Location Based Service (Yelp, Google Places)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 246
total_tokens: 425
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:08:00-05:00'
sources: []
---

Imagine you’re building a giant library that tells people where the best cafés are in every city. Every time someone asks “What’s a good café near me?” the system has to fetch a handful of facts: address, rating, opening hours, and a short photo. Think of each fact as a tiny booklet—about 16 bytes (tiny enough to hold a few words). When you add another 16‑byte booklet, it’s like adding a new page that stores an extra piece of information, say “has Wi‑Fi?” or “serves vegan options.”  

In the design interview for a location‑based service (like Yelp or Google Places), you’ll explain how you’d store these booklets efficiently—using a database table with columns for each 16‑byte field—and then show how to quickly look them up using an index on the user’s coordinates. The key idea is that every extra 16 bytes is just another small detail that makes the service richer, and the system must be built so those details can be added without slowing down the search or overwhelming storage.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
