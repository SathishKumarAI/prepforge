---
qid: ing_b6105c3158__eli5__local
question: Your index will not fit on one machine. How do you shard it, and what breaks?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 282
total_tokens: 448
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:25:05-05:00'
sources: []
---

Think of your AI index as a gigantic library that no single computer can hold in its shelves.  
**Sharding** is like splitting the library into several “micro‑libraries” and storing each one on a different machine (or cluster). Each micro‑library contains only a part of the books, but every book still has a unique tag so you know which micro‑library holds it.

*How it works:*  
1. **Partition** the index by a key—often the hash of the text or its topic.  
2. Send each partition to a different server (the “shard”).  
3. When a query arrives, you first figure out which shard(s) could contain relevant books and ask only those.

*What can break:*  
- **Consistency:** If one shard is updated but others aren’t, the index becomes out of sync.  
- **Latency:** A search that needs many shards must wait for all responses; if a shard hangs, the whole query slows down.  
- **Rebalancing:** Moving data between shards (e.g., when adding more servers) can temporarily leave some books missing or duplicated.

In short, sharding spreads the load across machines but adds a little complexity to keep everything in sync and fast.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
