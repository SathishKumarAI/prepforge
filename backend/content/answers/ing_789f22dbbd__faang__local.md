---
qid: ing_789f22dbbd__faang__local
question: 'Explain: Read Replicas — Scalability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 396
total_tokens: 630
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:24:26-05:00'
sources: []
---

**Clarify**  
The interviewer asks how read replicas help scale a database‑centric system. I’d confirm: *Are we targeting OLTP workloads?* *What read/write ratio do you expect?* *Is eventual consistency acceptable for reads from replicas?*  

**Approach**  
1. Identify read‑heavy operations that can be offloaded.  
2. Deploy one or more replica nodes behind a load balancer.  
3. Use asynchronous replication from the primary to keep replicas near real‑time.  
4. Route writes exclusively to the master; reads go to any replica.  

**Depth**  
- **Consistency model:** eventual consistency—replicas lag by `Δ` ms, acceptable for metrics dashboards or catalog lookups.  
- **Replication strategy:** logical (SQL replication) or physical (snapshot/stream).  
- **Scalability:** each replica adds linear read throughput; bottleneck shifts to network and query distribution.  
- **Fault tolerance:** failover to a promoted replica if master dies; use health checks and automatic promotion logic.  

**Edge Cases**  
- *Hot keys*: if a key is updated frequently, replicas may serve stale data; consider read‑through cache or primary reads for such keys.  
- *Large writes*: bulk inserts can overwhelm replication lag—use batch replication or separate write‑optimized shards.  
- *Network partitions*: ensure graceful degradation and avoid split‑brain by using consensus protocols (e.g., Raft) for promotion.  

**Optimize & Communicate**  
Explain trade‑offs: higher read latency vs. throughput, consistency vs. availability. Mention monitoring (`replication lag`, `query distribution`) to detect imbalance. Conclude that read replicas are a proven pattern for scaling reads while keeping writes centralized, and can be layered with caching or sharding for further growth.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
