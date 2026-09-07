---
qid: ing_c25c69cc36__faang__local
question: 'Explain: Replication — System Design: How to Scale a Database'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 452
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:13:00-05:00'
sources: []
---

**1️⃣ Clarify**  
You’re asked to design a replication‑aware database that can grow horizontally.  
Assumptions to confirm:  

* Workload is read‑heavy with occasional writes (e.g., social feed).  
* Strong consistency for updates isn’t required; eventual consistency is acceptable.  
* Latency targets are < 200 ms globally.  
* Failures will be node‑level and network partitions.

**2️⃣ Approach**  
1. Pick a distributed key‑value store (Cassandra/Spanner).  
2. Partition data by consistent hashing → each token range handled by a replica set.  
3. Use *write‑to‑majority* quorum for writes; reads can be *read‑one* or *read‑quorum*.  
4. Employ anti‑entropy background jobs (repair) to reconcile divergent replicas.  
5. Add a CDN‑style read layer with local caches (Redis/Cloudflare Workers) for low‑latency reads.

**3️⃣ Depth**  
*Replication factor = 3.*  
- **Write path:** client → coordinator → all replicas; ack when ≥2 replicas persist.  
- **Read path:** coordinator returns first response if `LOCAL_QUORUM`; otherwise waits for majority.  
- **Consistency trade‑off:** tunable via consistency level per operation.  
Complexity: O(1) for writes/reads (hash lookup), O(N) repair where N = nodes in cluster.  

**4️⃣ Edge Cases**  
* Network split → read/write to isolated partitions → eventual convergence after heal.*  
* Hot key → shard it or use consistent hashing with virtual nodes.*  
* Node churn → re‑balance token ranges, trigger repairs.

**5️⃣ Optimize & Communicate**  
- Use *read repair* on the fly for stale reads.  
- Introduce *write backpressure* when replicas lag (back‑off).  
- Monitor latency and adjust consistency level dynamically.  

Explain that this design gives linear scalability for reads, bounded write latency, and graceful degradation under failure—all key FAANG expectations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
