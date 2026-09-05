---
qid: ing_03f91e639f__eli5__local
question: 'Explain: Disadvantage(s): DNS — GitHub - donnemartin/system-design-primer:
  Learn how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 198
output_tokens: 271
total_tokens: 469
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:41:37-05:00'
sources: []
---

Think of DNS (Domain Name System) as the phone book for the internet: you look up a name, and it gives you an address. That’s handy, but it also introduces two main hiccups.

**1. One‑stop bottleneck**  
All traffic to the “phone book” goes through a handful of servers. If one of those servers slows down or crashes, every lookup stalls—just like a busy call center that can’t answer phones fast enough. In large‑scale systems you often replicate DNS, but the extra round‑trip still adds latency and complexity.

**2. Slow updates**  
When an IP address changes (a server moves to a new host), the change has to propagate through many copies of the phone book. That propagation can take minutes or even hours because each copy caches the old data for its “time‑to‑live” period. For systems that need instant failover or dynamic scaling, this delay means users might keep hitting an old, dead address.

So while DNS is essential, its centralization and caching make it a potential slow point and a source of stale information in high‑performance, large‑scale architectures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
