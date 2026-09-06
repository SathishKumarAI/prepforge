---
qid: ing_f23eae921c__think__local
question: 'Explain: 18 Scaling a Database — System Design: How to Scale a Database'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 465
total_tokens: 660
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:00:41-05:00'
sources: []
---

**1. Clarify the goal & scope**  
   - What “scaling” means (read‑heavy vs write‑heavy, latency limits, data size).  
   - Which database type is in play (relational, NoSQL, OLTP/OLAP).  
   - Assumptions: single‑region deployment, budget constraints, need for ACID vs eventual consistency.  

**2. Adopt a system‑design framework**  
   - *Requirements → Constraints → Trade‑offs*.  
   - Map “scaling” to classic patterns: sharding, replication, caching, partitioning, and tiered storage.  

**3. Step‑by‑step reasoning**  
   1. **Measure current load & bottlenecks** (CPU, I/O, lock contention).  
   2. **Choose horizontal vs vertical scaling** based on the identified bottleneck.  
   3. If horizontal: decide *sharding strategy* (range, hash, directory) and how to route queries.  
   4. Add *replication* for read scalability; consider master‑slave or multi‑master depending on consistency needs.  
   5. Integrate a *cache layer* (Redis/Memcached) for hot data.  
   6. Plan for *backup, sharding key evolution*, and *failover* procedures.  

**4. Common traps to avoid**  
   - Over‑optimizing read performance without addressing write bottlenecks.  
   - Choosing a shard key that leads to hotspots or uneven distribution.  
   - Ignoring cross‑shard joins; they can kill scalability.  
   - Neglecting the cost of data migration when re‑sharding.  

**5. Sanity‑check & communicate**  
   - Verify each decision against the original requirements (latency, throughput).  
   - Explain trade‑offs in plain terms: “We’re trading a bit of consistency for 10× read throughput.”  
   - Use diagrams to show data flow and shard boundaries.  

Follow this checklist whenever you need to explain or design database scaling strategies.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
