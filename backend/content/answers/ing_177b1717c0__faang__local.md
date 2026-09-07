---
qid: ing_177b1717c0__faang__local
question: 'Explain: When to choose sharded clusters — MongoDB Sharding | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 464
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:39:11-05:00'
sources: []
---

**Clarify**

You’re asking when a MongoDB deployment should use *sharding* instead of a single replica set or a multi‑primary cluster.  
Assumptions to confirm:  

1. The dataset grows beyond the storage capacity of one server (tens–hundreds of GB).  
2. Query patterns involve large scans or heavy write traffic that can’t be handled by a single node.  
3. You need horizontal scalability and high availability.

**Approach**

1. Evaluate data volume & growth rate → compute required shards.  
2. Analyze query mix (range vs point lookups) to pick an appropriate shard key.  
3. Check write throughput; if it exceeds what one server can sustain, sharding is warranted.  
4. Consider operational complexity: backup, monitoring, and maintenance overhead.

**Depth**

- **When to shard:**  
  - *Large datasets* that exceed a single node’s RAM/SSD or would cause significant disk I/O bottlenecks.  
  - *High write workloads* (tens of thousands ops/sec) that risk saturation on one server.  
  - *Geographically distributed traffic* where latency matters; shards can be placed closer to users.  

- **Shard key selection:**  
  - Must be *high cardinality*, evenly distributed, and frequently used in queries.  
  - Avoid hotspotting: a monotonic field (e.g., timestamp) alone is usually bad unless combined with another key.

**Edge Cases**

- If most queries are point lookups on a non‑shardable field, sharding can actually hurt performance due to cross‑shard routing.  
- Small clusters (< 10 GB total) benefit more from a replica set than shards.  
- Frequent *range scans* across the shard key boundary may cause extra network traffic.

**Optimize & Communicate**

Explain that sharding trades **horizontal scalability and throughput for added operational overhead**. Highlight how to monitor *balancer activity*, *chunk distribution*, and *latency spikes*. Conclude: “Shard when you hit capacity limits or write throughput ceilings, choose a well‑distributing key, and be ready to manage the extra complexity.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
