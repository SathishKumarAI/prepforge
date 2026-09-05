---
qid: ing_5a93f1f19e__star__local
question: 'Explain: Most Recently Used (MRU) — 7 Cache Eviction Strategies You Should
  Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 352
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:28:45-05:00'
sources: []
---

**Situation**  
In my last role at a fintech startup we were building a real‑time fraud detection engine that ingested millions of transaction records per day. The machine learning model required quick access to the most recent user embeddings stored in an LRU cache, but our latency metrics were slipping past the 50 ms SLA.

**Task**  
I was tasked with re‑engineering the cache eviction logic to reduce miss rates while keeping memory usage under 4 GB and ensuring the eviction policy didn’t accidentally drop high‑frequency users.

**Action**  
After profiling, I implemented a hybrid MRU/LRU scheme: we kept a small “hot” window (top 10% by access count) that used MRU to evict stale items that were still being accessed frequently, while the rest of the cache operated on classic LRU. I leveraged Redis’ `XADD` stream for eviction tracing and added a TTL fallback for items that stayed in MRU longer than 30 seconds. I also tuned the eviction threshold via A/B testing, adjusting the hot window size from 10% to 15% based on hit‑rate improvements.

**Result**  
The cache hit rate jumped from 78 % to 92 %, cutting average latency from 68 ms to 42 ms—well under our SLA. Memory usage stayed constant at ~3.8 GB, and we reduced CPU overhead by 18 %. This exercise taught me how a nuanced MRU strategy can complement LRU in high‑velocity ML pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
