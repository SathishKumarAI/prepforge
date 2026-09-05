---
qid: ing_89b2952783__star__local
question: 'Explain: Distributed Counter API Design — Distributed Counter System Design
  - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 377
total_tokens: 618
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:08:14-05:00'
sources: []
---

**Situation:**  
At my previous company we built a real‑time analytics platform that needed to expose a “page view” counter for every user’s dashboard widget. The service had to support millions of concurrent widgets, each updating the counter at least once per second, while keeping latency below 10 ms and ensuring eventual consistency across data centers.

**Task:**  
I was tasked with designing a distributed counter API that could handle high write throughput, provide fast read responses, and gracefully recover from node failures without losing count accuracy.

**Action:**  
I chose a sharded design: each widget’s counter key mapped to a hash‑ring shard. Within a shard we ran an in‑memory Redis cluster for hot reads/writes, backed by a write‑ahead log stored on a replicated Cassandra tier for durability. To avoid hotspots I introduced probabilistic “counter bloom” updates—widgets sent a lightweight “increment batch” (up to 100 increments) that the shard aggregated locally before flushing to Cassandra every 200 ms. For cross‑region consistency we used an eventual‑sync service that merged deltas via vector clocks, ensuring no double‑counting. I also implemented a RESTful API with HTTP/2 multiplexing and per‑shard rate limiting to protect against burst traffic.

**Result:**  
The system handled 15 M increments/sec across 12 regions while keeping read latency under 8 ms for 99.9% of requests. After deployment, we saw a 30 % reduction in counter drift compared to the legacy single‑node approach and achieved zero data loss during a simulated node failure test. I learned that combining in‑memory speed with durable async batching can meet strict SLAs without sacrificing correctness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
