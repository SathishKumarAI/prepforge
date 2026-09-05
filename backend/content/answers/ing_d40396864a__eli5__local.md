---
qid: ing_d40396864a__eli5__local
question: 'Explain: Rebalancing and Resharding — Sharding | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 195
total_tokens: 358
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:11:06-05:00'
sources: []
---

Imagine a library that keeps books on shelves.  
**Rebalancing** is like redistributing the books so each shelf has roughly the same number of titles; it prevents one shelf from becoming overcrowded while another stays empty.  

**Resharding** is what you do when the library grows too large for its current shelving system—perhaps you add a new wing or split a big shelf into two smaller ones. You then move books to the new shelves, keeping each book’s location (its “shard”) consistent with where it belongs.

In distributed databases, sharding splits data across many servers (the shelves). Rebalancing keeps those servers evenly loaded; resharding adds more servers or changes how data is split when the system outgrows its current capacity. Both keep the system fast and reliable, just as a well‑organized library stays easy to navigate.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
