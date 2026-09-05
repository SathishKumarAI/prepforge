---
qid: ing_9c1182874f__eli5__local
question: 'Explain: Cache Invalidation — Change Data Capture (CDC) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 220
total_tokens: 383
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:44:47-05:00'
sources: []
---

Think of a library that keeps a quick‑look “index card” for every book so readers can find titles fast. When a book’s information changes—say the cover art or a new chapter is added—the index must be updated, otherwise people will get stale details.  

In software, the **cache** is that index card: it holds recently used data to speed up lookups. **Cache invalidation** means telling the cache “this entry is now out of date.”  
**Change Data Capture (CDC)** is a system that watches the main database for every change (insert, update, delete) and pushes those changes to whoever needs them—just like an assistant who updates index cards as soon as a book is edited.  

So, CDC listens to the source of truth, captures each modification, and immediately invalidates or refreshes the corresponding cache entry. This keeps fast reads accurate without re‑querying the whole database every time.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
