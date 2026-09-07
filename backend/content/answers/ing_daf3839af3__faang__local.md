---
qid: ing_daf3839af3__faang__local
question: 'Explain: That''s pretty expensive to keep in the — Google I/O 2009 - Google
  Wave: Under the hood'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 489
total_tokens: 735
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:07:31-05:00'
sources: []
---

**Clarify**  
The speaker is saying that keeping a large‑scale, real‑time collaboration platform (Google Wave) running on Google’s data centers is expensive. I’ll assume the question asks *why* it costs so much and how Google mitigates those costs.

**Approach**  
1. Identify cost drivers: compute, storage, networking, latency guarantees, reliability.  
2. Explain each driver with concrete numbers or analogies.  
3. Show mitigation techniques (caching, sharding, efficient protocols).  

**Depth**  

| Driver | Why it’s costly | Google’s tactics |
|--------|-----------------|------------------|
| **Compute** | Wave needs to process every edit in real time for millions of users; latency < 200 ms is required. | Use massively parallel, low‑latency clusters (Bigtable + custom RPC). Autoscaling keeps spare capacity for spikes. |
| **Storage** | Each user’s document history must be retained (audit, rollback). With >10⁸ docs → TBs of data. | Distributed log (Spanner‑like) with compression; hot vs cold tiering: frequently edited parts live in SSD shards, rarely used in cheap object storage. |
| **Networking** | Real‑time ops require high bandwidth and low jitter across global regions. | Edge caching, content‑delivery networks, and Google’s private fiber reduce transit costs and improve QoS. |
| **Reliability / Availability** | 99.999% uptime for a product used in business workflows. | Multi‑region replication, automated failover, continuous health checks; the cost of extra replicas is offset by avoided downtime. |

**Edge Cases**  
- Sudden traffic spikes (e.g., during a major event) can overwhelm shards → throttling or graceful degradation.  
- Data locality issues if users spread across continents—must shard per region to keep latency low.

**Optimize & Communicate**  
To improve, Google could adopt more aggressive delta‑encoding for edits, use machine‑learning to predict hot shards, and explore serverless compute where possible. I would present this as a trade‑off diagram: higher upfront infrastructure → lower operational cost over time, ensuring the user experience remains smooth while keeping the total cost of ownership manageable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
