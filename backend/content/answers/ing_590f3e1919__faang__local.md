---
qid: ing_590f3e1919__faang__local
question: 'Explain: Redundancy & Replication — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 559
total_tokens: 801
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:10:47-05:00'
sources: []
---

**1️⃣ Clarify**  
We’re asked how *redundancy* and *replication* help build a highly‑available, scalable Instagram‑style photo service. Assume we need: (a) instant read/write of media & metadata, (b) 10× traffic spikes, (c) <50 ms latency, (d) durability against server/node failure.

**2️⃣ Approach**  
- Identify *data types*: user profiles, posts, comments, likes, and large binary blobs (photos/videos).  
- Separate concerns: **hot read/write paths** vs. **cold archival**.  
- Use *replication* for data that must survive node loss; use *redundancy* to keep multiple copies in distinct failure domains.

**3️⃣ Depth**  

| Layer | Redundancy / Replication | Rationale |
|-------|--------------------------|-----------|
| Metadata DB (PostgreSQL) | 3‑node synchronous replication across AZs | Guarantees ACID, strong consistency; latency ≈ 1–2 ms. |
| Cache (Redis) | Geo‑replicated shards with write‑through to DB | Fast reads; local cache for hot keys reduces DB load. |
| Media Store (S3‑compatible object store) | Object replication across regions + CDN edge caching | Durability ≥ 99.999%; low latency via edge nodes. |
| Search Index (Elasticsearch) | Multi‑master with sharding, replica shards per AZ | Near‑real time search; replicas provide fault tolerance. |
| CDN (CloudFront) | Edge caching with automatic invalidation | Offloads origin, reduces global RTT. |

*Redundancy*: keep at least 3 copies of each shard in different racks/regions.  
*Replication*: synchronous for critical ops, asynchronous for bulk media uploads.

**4️⃣ Edge Cases**  
- *Split‑brain*: handle write conflicts with version vectors or CRDTs.  
- *Cold storage*: move infrequently accessed photos to Glacier; replicate metadata to keep pointers.  
- *Network partitions*: use quorum reads/writes to avoid stale data.  

Test for: 50 % node failure, network latency spikes, cross‑region failover.

**5️⃣ Optimize & Communicate**  
Explain trade‑offs: synchronous replication → higher write latency but stronger consistency; asynchronous → lower latency but risk of brief inconsistency. Mention cost vs. availability: more replicas increase storage and bandwidth costs but reduce MTTR. Conclude that a layered, geo‑distributed approach with appropriate redundancy/replication guarantees Instagram’s uptime and performance targets while keeping operational complexity manageable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
