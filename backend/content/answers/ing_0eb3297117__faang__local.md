---
qid: ing_0eb3297117__faang__local
question: 'Explain: When to unshard a collection — MongoDB Sharding | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 491
total_tokens: 731
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:17:50-05:00'
sources: []
---

**Clarify**  
We’re asked when you should *unshard* (i.e., remove sharding) from a MongoDB collection.  
Assumptions to confirm:  
- The cluster is a single‑region or multi‑region deployment?  
- What’s the current shard key distribution and write load?  
- Is data size < 16 TB (single‑node limit)?  

**Approach**  
1. Identify performance bottlenecks caused by sharding.  
2. Evaluate alternative architectures: replica set, single node, or a different shard key.  
3. Plan the migration path—drop sharding vs. re‑shard.

**Depth**  
Unsharding is justified when:  

| Condition | Reasoning |
|-----------|-----------|
| **Data < 16 TB & writes are low** | A single node can handle reads/writes efficiently; sharding adds overhead (balancer, metadata). |
| **Uneven shard key distribution** | Hot spots lead to unbalanced shards, causing latency spikes. Re‑sharding may be cheaper than unsharding. |
| **Simplified backup/restore** | Unsharded collections are easier to snapshot and restore, especially for compliance. |
| **Cost constraints** | Fewer nodes → lower infrastructure cost; no need for balancer or extra config servers. |

Procedure:  
- Disable the balancer (`config.settings.setBalancerState(false)`).  
- Use `mongodump`/`mongorestore` to move data to a single node, or run `sh.unshardCollection()`.  
- Verify replication and index integrity post‑migration.

**Edge Cases**  
- **Large write volume**: unsharding may throttle; consider sharding with a better key.  
- **Multi‑region deployments**: latency spikes if all data sits on one region.  
- **Data growth projections**: if size >16 TB soon, unshard now and plan for scaling later.

**Optimize & Communicate**  
Explain trade‑offs clearly to stakeholders: *unsharding reduces operational complexity but may hurt horizontal scalability.* Highlight that the decision should be data‑driven (metrics on shard key entropy, write rates, size). Conclude with a migration checklist to ensure zero downtime.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
