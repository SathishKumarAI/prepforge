---
qid: ing_2e5091bb61__faang__local
question: 'Explain: Advantages of Replication — Redisleaderfollowreplication'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 536
total_tokens: 771
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:31:07-05:00'
sources: []
---

**1️⃣ Clarify**  
You’re asking why a Redis deployment that uses *master‑slave replication* (now called **Redis Sentinel** or **Cluster**) is advantageous compared to a single-node setup.  
Assumptions:  
- Data set fits in memory of one node;  
- Clients need high availability and read scalability;  
- Network latency between nodes is low.

**2️⃣ Approach**  
Explain benefits in three dimensions: reliability, performance, and maintainability. Then dive into each with concrete details (latency, fail‑over, etc.).

**3️⃣ Depth**  

| Benefit | Why it matters | Technical note |
|---------|----------------|---------------|
| **High Availability** | A replica can immediately take over if the master crashes. Sentinel monitors health every 150 ms and promotes a slave in <1 s. | Guarantees <5 s of downtime for most workloads. |
| **Read Scaling** | Replicas serve read traffic, reducing load on the master and improving overall throughput. | Redis uses *replica reads* (`READONLY`), keeping writes exclusive to the master. |
| **Data Redundancy & Disaster Recovery** | Data is copied in real‑time; a replica can be promoted as new master after disaster recovery or geographic failover. | Replication delay <1 ms for typical LAN links; asynchronous by default but can be configured with `sync` options. |
| **Operational Flexibility** | You can add/remove replicas without downtime, and perform maintenance on the master while reads continue. | Sentinel auto‑configures new slaves via `redis-cli --cluster create`. |

**4️⃣ Edge Cases**  
- *Network partition*: clients may see stale data until fail‑over resolves; use Redis’ `read-only` mode to detect partitions.  
- *Write skew*: if many writes occur, the master can become a bottleneck; consider sharding or Redis Cluster.  
- *Data loss risk*: asynchronous replication may lose up to one write per replication cycle if master dies.

**5️⃣ Optimize & Communicate**  
Highlight that replication is not a silver bullet: it trades off consistency for availability (CAP theorem). In practice, combine replication with **Redis Cluster** for sharding or use **Redis Enterprise**’s active‑active geo‑replication to get strong consistency across regions.  

Conclude: Master–slave replication in Redis dramatically improves uptime and read throughput while keeping implementation simple—key qualities top tech companies seek in their caching layer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
