---
qid: ing_7c97c2c51d__eli5__local
question: 'Explain: Strongly consistent indexes — How LedgerStore Supports Trillions
  of Indexes at Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 228
total_tokens: 395
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:54:08-05:00'
sources: []
---

Imagine a gigantic library where every book is a data record and each shelf is an index that lets you find books quickly. In most libraries, the shelves are updated after the books arrive—so sometimes you look on a shelf that still shows an old title even though the new copy has already been shelved. That’s “eventual consistency.”  

Uber’s LedgerStore builds its library so every time a book is added or moved, **all** relevant shelves are updated *atomically* – in one single, unbreakable step. It’s like having a magic conveyor that places the book on the shelf and writes the new address into every related index at exactly the same instant. If you look up any book right after it arrives, you’re guaranteed to see its correct location because the update never lags behind.  

This “strong consistency” lets LedgerStore manage trillions of indexes—each one instantly reflects the latest data—without letting stale pointers confuse queries or services that rely on them.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
