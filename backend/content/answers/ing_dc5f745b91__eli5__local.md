---
qid: ing_dc5f745b91__eli5__local
question: 'Explain: SLRU (Segmented LRU) — Top 8 Cache Eviction Strategies'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 256
total_tokens: 423
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:23:05-05:00'
sources: []
---

Imagine a library that only has room for 100 books. Every time a book is borrowed, it’s moved to the “Recently Read” shelf; when the shelf gets full, the oldest book goes to the “Old Shelf.” After a while, if a book on the Old Shelf is read again, it jumps back to the top of the Recently Read shelf.  

That’s **Segmented LRU (SLRU)** in a nutshell.  
*LRU* = Least‑Recently‑Used: evict the item that has gone longest without being accessed.  
In SLRU you split the cache into two segments – “Hot” (recently used) and “Cold” (older). New or rarely used items start in Cold; if they’re accessed again, they move to Hot. When space is needed, only the oldest item in Cold is thrown out first; Hot items are protected until they become stale.

It’s one of the eight common cache‑eviction strategies because it balances quick access for popular data with a simple rule that keeps the most useful items alive longer than pure LRU would.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
