---
qid: ing_30872b68e1__star__local
question: 'Explain: Basic Redis Commands — The Ultimate Redis 101'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 363
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:05:33-05:00'
sources: []
---

**Situation** – In my last role I was tasked with improving the real‑time recommendation engine for an e‑commerce site that was generating over 1 million requests per hour. The existing caching layer was a simple in‑memory dict, which caused memory spikes and stale data.

**Task** – I had to design a lightweight, fault‑tolerant cache that could store user session tokens, product view counts, and hot‑item lists, while keeping latency below 5 ms per request.

**Action** – I introduced Redis as the new caching layer.  
- Used **SET** with `EX` to store session tokens (e.g., `SET session:1234 <token> EX 1800`).  
- Leveraged **INCR** for atomic product view counters (`INCR product:view:5678`).  
- Implemented a sorted set (**ZADD**) to maintain the top‑10 trending items (`ZADD trending 100 itemA 99 itemB …`).  
- Employed pipelining to batch up to 50 commands per request, cutting round‑trip time.  
- Configured Redis persistence with RDB snapshots every 5 minutes and AOF for durability.

**Result** – The new cache reduced average response time from 12 ms to 3 ms, cut memory usage by 35%, and eliminated stale session data. I learned how to balance latency, consistency, and persistence in a high‑throughput environment using Redis’ core commands.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
