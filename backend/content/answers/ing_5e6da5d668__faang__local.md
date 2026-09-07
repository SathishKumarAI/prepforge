---
qid: ing_5e6da5d668__faang__local
question: 'Explain: 7.1 Scalability — Design Instagram | System Design Interview |
  AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 509
total_tokens: 751
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:23:30-05:00'
sources: []
---

**Clarify**  
The task is to design a scalable backend for an image‑heavy social network (Instagram). Key requirements: fast upload, real‑time feeds, high read/write throughput, low latency, global distribution, and fault tolerance. I’ll assume we need ~10 M active users, 1 GB/day per user, and a 99.9% availability SLA.

**Approach**  
1. **Client → CDN edge** for uploads (HTTPS + multipart).  
2. **Ingestion micro‑service**: validates, thumbnails, stores raw image in an object store (S3/MinIO) with versioning.  
3. **Metadata service** (PostgreSQL + Redis): keeps user feeds, likes, comments.  
4. **Feed generator**: pre‑build personalized timelines in a distributed queue (Kafka).  
5. **Serving layer**: CDN cache for images; GraphQL/REST API for metadata, backed by read replicas.  
6. **Data replication & sharding** across regions; use consistent hashing.

**Depth**  
- *Upload*: multipart + checksum → S3; 200 ms avg latency.  
- *Feed*: publish‑subscribe (Kafka) writes to a per‑user queue; consumer builds feed in Redis Streams; read latency < 100 ms.  
- *Scaling*: auto‑scaling on CPU/memory, horizontal sharding of metadata tables, read replicas for heavy traffic.  
- *Complexity*: O(1) for CRUD on objects, O(log N) for feed fetch (sorted set).  
- *Trade‑offs*: Consistency vs availability—use eventual consistency for feeds to keep latency low.

**Edge Cases**  
- High burst uploads → backpressure via Kafka partitions.  
- User deletion → cascade cleanup of S3 objects & metadata.  
- CDN cache invalidation on edits.  
- Data loss in object store → dual‑region replication.

**Optimize & Communicate**  
Explain how caching layers (Redis, CDN) reduce load, how sharding prevents hotspots, and how the Kafka pipeline decouples write traffic from read latency. Conclude with monitoring: request/latency metrics, S3 bucket usage alerts, and a disaster‑recovery drill plan. This showcases structured thinking, technical depth, and clear communication—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
