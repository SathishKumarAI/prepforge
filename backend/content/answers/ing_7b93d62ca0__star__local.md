---
qid: ing_7b93d62ca0__star__local
question: 'Explain: Cross-Shard Queries — Sharding | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 414
total_tokens: 652
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:41:05-05:00'
sources: []
---

**Situation:**  
At my previous startup we built a real‑time recommendation engine for a fashion retailer. The product catalog had 12 million SKUs and the user base grew to 2 M active users per day. We sharded the catalog horizontally by brand, which kept read latency under 15 ms but made cross‑brand “top‑10 by popularity” queries impossible because data resided on separate nodes.

**Task:**  
Design a system that could execute efficient cross‑shard popularity queries while preserving the low latency of single‑shard reads and without overloading the network.

**Action:**  
I introduced a lightweight, incremental aggregation layer. Each shard runs a nightly MapReduce job to compute per‑brand 10k “hot” SKUs and pushes them into a shared Kafka topic. A central “aggregator” service consumes this stream, maintains an in‑memory LRU cache of the top 100 k SKUs across all brands, and exposes a REST endpoint that serves cross‑shard queries in <20 ms. I also added a bloom filter per shard to quickly rule out brands that couldn’t contribute to a particular query, cutting inter‑node traffic by ~35%. All components were built with Go, gRPC for intra‑cluster calls, and Redis for the cache.

**Result:**  
The cross‑shard “top‑10” queries now return in 18 ms on average, up from an impossible 5 s. We reduced network usage by 30% and improved recommendation accuracy by 12% because the system could consider a truly global popularity signal. I learned that decoupling heavy analytics from real‑time reads via incremental aggregation can solve cross‑shard challenges without sacrificing performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
