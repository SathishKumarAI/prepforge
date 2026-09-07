---
qid: ing_300bd33731__faang__local
question: 'Explain: Product — The WhatsApp Architecture Facebook Bought For $19\u00a0Billion
  - High Scalability -'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 548
total_tokens: 795
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:35:33-05:00'
sources: []
---

**Clarify**

The interviewer wants a concise explanation of the architecture that enabled WhatsApp to scale to ~1 billion users after Facebook’s $19 B acquisition.  
Key assumptions:  
- Focus on *high‑level* components (not code).  
- Emphasis on scalability, reliability, and cost efficiency.  

**Approach**

Outline the system in four layers:  
1. Client ↔ Edge servers (CDN + load balancers)  
2. Message routing & persistence layer  
3. User state & presence service  
4. Infrastructure & operational practices  

Then detail each component’s scaling strategy.

**Depth**

| Layer | Design | Scaling Mechanisms |
|-------|--------|--------------------|
| **Edge** | 3‑layer CDN → regional load balancers → app servers | Global DNS + Geo‑IP routing; horizontal server pools; auto‑scaling groups. |
| **Routing/Persistence** | Erlang/OTP clusters (WhatsApp’s core) with a sharded key‑value store (Riak, later Cassandra). | Sharding by user ID; consistent hashing; replication factor 3 for fault tolerance. |
| **Presence** | Pub/Sub via Erlang message queues; distributed in-memory cache (Mnesia). | Partitioned presence topics; TTLs to avoid stale data; eventual consistency acceptable for “online” status. |
| **Infra** | AWS EC2 + S3, Kubernetes for micro‑services; automated CI/CD; chaos engineering. | Auto‑scaling, spot instances for cost savings; multi‑region disaster recovery. |

*Complexity*:  
- Message delivery O(1) per user (constant‑time lookup).  
- Sharding reduces contention; replication gives high availability.

**Edge Cases**

- Sudden traffic spikes (e.g., viral event): load balancers auto‑scale, CDN caches mitigate spikes.  
- Network partitions: local message queue buffers until connectivity resumes.  
- Data center outage: cross‑region replicas take over with minimal latency.

**Optimize & Communicate**

Explain trade‑offs: Erlang’s lightweight processes give high concurrency but require specialized ops; sharding simplifies scaling yet introduces data consistency nuances. Highlight how the architecture balances *throughput* (10 M msgs/s) with *low cost* by leveraging spot instances and open‑source tech. Conclude that this design enabled WhatsApp to grow from 1 million to 1 billion users while keeping latency <200 ms, a benchmark for FAANG‑grade scalability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
