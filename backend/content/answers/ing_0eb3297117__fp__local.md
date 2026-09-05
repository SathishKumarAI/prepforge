---
qid: ing_0eb3297117__fp__local
question: 'Explain: When to unshard a collection — MongoDB Sharding | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 454
total_tokens: 631
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:36:52-05:00'
sources: []
---

When you decide *not* to shard a collection, you are essentially choosing a simpler data‑locality model: all documents live on one node (or the primary of a replica set).  
The decision is driven by an optimization problem over **latency + throughput vs. storage cost**.

1. **Workload profile** – If most queries hit only a tiny fraction of the collection (e.g., a user‑specific cache or a lookup table), the *shard key* would produce a highly uneven distribution. The “hot” shards would become bottlenecks, while others sit idle, increasing per‑operation latency and wasting bandwidth on inter‑node traffic.

2. **Shard key cardinality** – A low‑cardinality key forces many documents into a few shards. In the extreme (e.g., `{"type":"log"}`), every write must coordinate between shards, incurring network round‑trips that outweigh the benefits of parallelism. Unsharding eliminates this coordination cost.

3. **Resource constraints** – Sharding introduces metadata overhead (chunk maps, balancer) and requires a router (`mongos`). If your deployment is small (< 5 TB or few nodes), the marginal throughput gain from sharding is negligible compared to the added complexity.

4. **Consistency requirements** – For strongly consistent workloads that read/write the entire collection frequently (e.g., an audit log), keeping data on one node avoids cross‑shard consistency checks and simplifies failover logic.

**Non‑obvious insight:**  
Even with a high‑cardinality key, if the *write pattern* is highly skewed (many writes target a single user), sharding can hurt because the balancer will continually move chunks to even out load, causing hot‑spot churn. Unsharding keeps that hotspot stable and lets you tune replicas for throughput instead of balancing.

In short: unshard when your data size, query pattern, or write skew makes the cost of maintaining shard boundaries outweigh the parallelism benefits.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
