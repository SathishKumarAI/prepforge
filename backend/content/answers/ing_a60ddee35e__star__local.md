---
qid: ing_a60ddee35e__star__local
question: 'Explain: 2.4 Memory Requirements — Design Load Balancer | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 389
total_tokens: 636
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:05:08-05:00'
sources: []
---

**Situation:**  
While working at a fintech startup, we had to launch a new payment gateway that needed to handle 100k concurrent users. Our existing load balancer was a simple round‑robin instance with 8 GB RAM, and the traffic spikes during holidays caused out‑of‑memory errors.

**Task:**  
I was tasked with redesigning the load balancer to scale horizontally while keeping per‑node memory usage below 4 GB, ensuring low latency (<5 ms) for session stickiness and real‑time health checks.

**Action:**  
First, I profiled the current implementation in Go using pprof; the majority of memory was spent on storing full session objects (user ID + token). I refactored to use a compact LRU cache that only keeps 32‑byte keys and 16‑byte values, dropping non‑essential metadata. Next, I switched from a single global map to a sharded concurrent hash table (256 shards), reducing lock contention and allowing each shard to fit in its own CPU cache line. For health checks, I replaced the blocking HTTP client with an asynchronous, pooled client that reuses connections, cutting memory overhead by 30 %. Finally, I added a memory‑watchdog that triggers graceful eviction when usage hits 70 % of the limit.

**Result:**  
The new load balancer ran on nodes with only 2 GB RAM, handled peak traffic without OOMs, and maintained <4 ms average latency. Overall throughput increased by 25 %, and we saved $12k/month in infrastructure costs. I learned that aggressive data structure simplification combined with sharding can dramatically reduce memory footprint while keeping performance high.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
