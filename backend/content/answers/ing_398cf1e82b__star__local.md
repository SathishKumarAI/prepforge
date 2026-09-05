---
qid: ing_398cf1e82b__star__local
question: 'Explain: Consistent Hashing — Top 4 Data Sharding Algorithms Explained'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 359
total_tokens: 599
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:24:04-05:00'
sources: []
---

**Situation:**  
At my last company we were migrating a user‑profile service from a single monolith to a microservice architecture. The data grew to over 50 million records and our existing range‑based sharding scheme caused hot spots when new regions launched, leading to >30 % latency spikes during peak hours.

**Task:**  
I had to design a sharding strategy that evenly distributed load, allowed smooth scaling, and minimized data movement when adding or removing nodes. The goal was to keep read/write latency under 200 ms for 99th‑percentile traffic while supporting dynamic node churn.

**Action:**  
I evaluated four common algorithms: range sharding, hash‑based modulo, consistent hashing with virtual nodes, and rendezvous (highest random weight) hashing. I implemented a prototype using **consistent hashing with virtual nodes**, adding 100 virtual replicas per physical server to smooth distribution. I also integrated a lightweight load balancer that rebalanced only the affected shards on node changes. For comparison, I ran benchmarks against the other three algorithms under simulated traffic spikes and node churn.

**Result:**  
Consistent hashing reduced data movement by ~85 % when adding a new shard versus modulo hashing, and kept the 99th‑percentile latency below 180 ms during peak load—an improvement of 35 %. The system now scales horizontally with minimal operational overhead. I learned that while hash‑based methods are simple, consistent hashing’s ability to limit data reshuffling is critical for large, dynamic distributed systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
