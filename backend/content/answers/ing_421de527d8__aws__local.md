---
qid: ing_421de527d8__aws__local
question: 'Explain: Scalability — Peer-To-Peer Networks: Features, Pros, and Cons
  - Spiceworks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 484
total_tokens: 724
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:55:28-05:00'
sources: []
---

**Situation**  
I was asked to scale a customer‑support knowledge base for a mid‑size SaaS firm that had 1 M active users and an internal chat bot consuming the data in real time. The existing monolithic MySQL service could not handle peak loads of >10 k concurrent queries per second.

**Task**  
Design a peer‑to‑peer (P2P) distributed cache that would keep the knowledge base highly available, low‑latency, and cost‑effective while keeping data consistent across 50+ geo‑distributed edge nodes.

**Action**  
1. **Requirements & Design** – Adopted an *eventual consistency* model using **Amazon DynamoDB Global Tables** for master–write coordination.  
2. Each edge node runs a local **Redis Cluster** (via Amazon ElastiCache) as the P2P cache, replicating changes via DynamoDB Streams → Lambda → Redis Pub/Sub.  
3. Implemented *cache‑aside* pattern: read hit → serve from Redis; miss → fetch from DynamoDB, populate Redis, return to client.  
4. **Scalability** – Auto‑scaling on CPU/Memory metrics ensures each node handles up to 20 k RPS locally.  
5. **Availability** – Multi‑AZ deployment and automatic failover in ElastiCache; DynamoDB’s built‑in replication guarantees 99.999% uptime.  
6. **Cost** – Savings of ~40 % versus a single regional database by offloading reads to the edge.

**Result**  
- Read latency dropped from 350 ms to <20 ms for 95th percentile queries.  
- Peak throughput increased from 4 k RPS to 12 k RPS with zero downtime.  
- Operational cost fell by $18K/month, and we eliminated a single point of failure.

**Learning**  
I realized that *ownership* means continuously monitoring consistency gaps; *dive deep* into cache invalidation patterns prevented stale data issues. I documented the trade‑offs between eventual vs strong consistency and built automated alerts for divergence thresholds—ensuring we stay customer‑obsessed while delivering reliable performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
