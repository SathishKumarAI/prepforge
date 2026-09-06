---
qid: ing_7cfc029584__think__local
question: Why Shard? — Sharding | System Design
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 486
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T09:16:42-05:00'
sources: []
---

**1. Clarify the context & assumptions**  
   - *What kind of ML workload?* (online inference, batch training, model serving).  
   - *Scale targets:* number of requests per second, data volume, latency tolerance.  
   - *Infrastructure constraints:* single‑node vs distributed cluster, cost, operational expertise.

**2. Adopt a mental framework**  
   - **Scalability axis:** throughput → horizontal scaling.  
   - **Consistency & partitioning trade‑offs:** CAP theorem + eventual consistency for inference.  
   - **Cost–benefit model:** compute/IO savings vs added complexity (routing, rebalancing).

**3. Reason step‑by‑step toward sharding**  
   1. *Identify bottlenecks:* is a single node becoming CPU, memory or network bound?  
   2. *Determine data/model partitioning criteria:* key space (user ID), time window, feature hash, etc.  
   3. *Design shard routing:* deterministic hashing vs consistent hashing; include fallback/replication.  
   4. *Evaluate consistency needs:* for inference you can tolerate eventual; for training you may need strict sync.  
   5. *Plan rebalancing strategy* (add/remove shards, data migration) and monitor metrics.

**4. Common traps to avoid**  
   - Assuming sharding solves everything—ignores the “big‑table” problem or hot keys.  
   - Over‑engineering with too many shards; leads to high coordination overhead.  
   - Neglecting cross‑shard joins/aggregations that can become expensive.  
   - Forgetting fault tolerance: single point of failure if a shard dies.

**5. Sanity‑check & verbalize the answer**  
   - Run through “What if we hit 10× traffic?” and see if sharding keeps latency bounded.  
   - Ask: *Does this architecture still meet SLAs?* *Is operational complexity justified?*  
   - Summarize in plain terms: “We shard to distribute load, keep each node small enough for fast inference, and accept eventual consistency because the model can tolerate slight staleness.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
