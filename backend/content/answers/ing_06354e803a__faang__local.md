---
qid: ing_06354e803a__faang__local
question: 'Explain: Zone-Failure-Resilient OpenSearch at Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 467
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:58:53-05:00'
sources: []
---

**Clarify**  
We need to explain how Uber’s *Zone‑Failure‑Resilient* OpenSearch design keeps data available when an entire availability zone (AZ) goes down. Key assumptions:  

1. Data is sharded and replicated across AZs.  
2. Search traffic can be routed to any healthy node.  
3. Failover must preserve query latency and consistency guarantees.  

**Approach**  
1. **Sharding & Replication** – each logical shard has a primary copy in one AZ and at least two replicas in separate AZs.  
2. **Cluster Coordination** – the OpenSearch cluster elects a master node per zone; if a zone fails, remaining masters re‑elect a new cluster state.  
3. **Routing & Load Balancing** – traffic is directed via an external load balancer that can detect zone health and only forward to healthy nodes.  

**Depth**  
- *Cluster State Recovery*: when a zone dies, the cluster uses ZooKeeper/Elasticsearch’s internal election to re‑promote replicas as primaries. Latency spikes are bounded by the time to elect a new master (~50 ms).  
- *Consistency Model*: Uber opts for eventual consistency on search queries; writes may be temporarily unavailable but are replayed once the zone recovers (write‑ahead logs).  
- *Data Placement*: using “zone-aware” allocation filtering ensures each shard’s replicas are never co‑located, guaranteeing at least one live copy.  

**Edge Cases**  
- Simultaneous AZ failure and network partition → cluster may split; we rely on quorum to prevent split‑brain.  
- Load balancer misconfiguration could route traffic to the failed zone; health checks must be frequent (<5 s).  

**Optimize & Communicate**  
Improvements: add *cross‑region* replication for disaster recovery, and use a “hot‑standby” read replica tier to reduce latency under failure. I would explain this by walking through a failure scenario, showing state changes, and quantifying expected downtime (<1 s). This demonstrates structured problem solving, clear communication, and depth in distributed systems design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
