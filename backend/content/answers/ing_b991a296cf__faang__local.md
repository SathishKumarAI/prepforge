---
qid: ing_b991a296cf__faang__local
question: 'Explain: When Not to Shard — Sharding | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 413
total_tokens: 649
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:54:29-05:00'
sources: []
---

**Clarify**  
The question asks *when you should avoid sharding a database in an ML‑related system*. We assume the data set is large, read/write traffic high, and we’re dealing with typical ML pipelines (feature store, training data). Clarify whether the shard key will be stable, how queries span shards, and what consistency guarantees are required.

**Approach**  
1. Identify workloads that need global visibility or cross‑partition joins.  
2. Evaluate consistency vs. availability trade‑offs.  
3. Consider operational complexity versus performance gain.  

**Depth**  
- **Global aggregations / model evaluation**: If queries must scan the entire feature set (e.g., computing AUC over all users), sharding forces costly cross‑shard scans or a separate aggregation layer, defeating its purpose.  
- **Strong consistency needs**: Sharded systems often use eventual consistency; if your ML pipeline requires atomic updates to features (e.g., online learning with tight latency), single‑node or highly replicated storage is safer.  
- **Low cardinality data**: Feature tables with few distinct keys (user IDs) can be served efficiently from a single store without sharding overhead.  
- **Operational simplicity**: Shards introduce replication, failover, and rebalancing complexity; if the performance benefit is marginal, keep it simple.

**Edge Cases**  
- A sudden spike in traffic that outpaces a single node’s capacity → shard later.  
- Data skew (certain users generating disproportionate features) → consider sharding or partition‑by hash on user ID to balance load.

**Optimize & Communicate**  
Explain the trade‑offs: “We’ll avoid sharding here because global joins dominate our query pattern and the added complexity would outweigh the marginal speedup.” Highlight that as data grows, we can revisit sharding, but initially a monolithic or replicated store keeps ML pipelines reliable and maintainable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
