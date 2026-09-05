---
qid: ing_15daeace95__fp__local
question: 'Explain: Need for high availability — MongoDB Sharding | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 375
total_tokens: 549
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:51:44-05:00'
sources: []
---

## Why Sharding Needs High Availability

When a dataset grows beyond the capacity of a single server, **sharding** distributes data across many machines (shards). The core problem is *“how to keep the system usable even if some shards fail or become slow”*.  

1. **Availability vs. Partition Tolerance** – By CAP’s theorem, a distributed database that must stay online during network partitions can only give up strict consistency. MongoDB therefore adopts *eventual* consistency and relies on replicas (primary/secondaries) to keep each shard operational even if the primary crashes.  
2. **Automatic Failover** – The router (`mongos`) routes queries to the current primary of each shard. If a primary dies, an election selects a new one; the router updates its cache so clients are never blocked. This is a *local* recovery: only one shard fails, not the whole cluster.  
3. **Geographic Redundancy** – Replicas can be spread across data centers, protecting against site‑wide outages while still keeping latency low for local reads.  

### Non‑obvious Insight  
The **shard key** dictates which nodes handle which queries. Poorly chosen keys lead to *hot shards*: a few replicas become bottlenecks and their failure cripples the whole cluster’s throughput. Thus, high availability is not just about replication; it starts with an even data distribution that keeps every shard equally useful. In practice, one should profile query patterns before picking a key—otherwise you trade “availability” for “performance” inadvertently.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
