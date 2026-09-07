---
qid: ing_3044f10bb9__faang__local
question: 'Explain: Object Storage — Design Spotify | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 539
total_tokens: 777
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:36:35-05:00'
sources: []
---

**Clarify**  
You’re asked to design a scalable **object‑storage service** (think Amazon S3) that could power an app like Spotify: millions of users, petabytes of audio files, low latency for streaming, high durability, and fine‑grained access control. I’ll assume we need 99.999% availability, 11 9’s durability, support for HTTP APIs, versioning, and geo‑replication.

**Approach**  
1. **API layer** – RESTful endpoints (PUT/GET/DELETE) with token auth.  
2. **Metadata service** – a distributed key‑value store (e.g., DynamoDB) mapping object IDs → location metadata.  
3. **Storage tier** – object blobs stored on SSD disks in compute nodes; use erasure coding for durability.  
4. **Replication & caching** – replicate objects to nearby edge caches (CDN); use CDN’s pull‑through cache for hot tracks.  
5. **Consistency model** – eventual consistency with “read‑your‑writes” guarantees via version vectors.  
6. **Security** – bucket policies, signed URLs, encryption at rest.

**Depth**  
- *Write path*: client → API gateway → auth → metadata store (record location) → storage node write + ACK. Latency ≈ 10–15 ms.  
- *Read path*: client → CDN cache hit → edge; miss → API → metadata lookup → fetch from storage node; return stream.  
- *Durability*: 4‑node erasure coding (6+3) gives > 99.999% durability over 1 yr.  
- *Scalability*: Shard metadata by hash of object key; use consistent hashing to add nodes without rebalancing.

**Edge Cases**  
- Concurrent deletes/updates → versioning resolves conflicts.  
- Large objects (> 5 GB) → multipart upload with checkpointing.  
- Network partitions → stale reads allowed; writes queued locally and reconciled later.

**Optimize & Communicate**  
We can reduce cost by tiering cold data to tape or cheaper object storage, and use request‑based billing. For latency, adding more edge caches yields diminishing returns after ~3–5 regions. I’d explain trade‑offs: higher durability (more erasure coding) → more bandwidth; lower consistency → simpler design but potential stale reads.

This plan balances cost, performance, and reliability—key for a Spotify‑grade object store.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
