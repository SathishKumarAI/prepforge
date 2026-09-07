---
qid: ing_e1a744ba43__faang__local
question: 'Explain: Object Storage & CDN — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 462
total_tokens: 702
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:24:07-05:00'
sources: []
---

**Clarify**  
We’re asked to design the object‑storage + CDN layer that powers Instagram’s media delivery (photos/video). Key assumptions:  
- Millions of uploads daily, each ~10 MB avg.  
- Global user base → low latency everywhere.  
- High read/write throughput; writes are write‑once, reads many‑to‑many.  
- Strong consistency for the same user’s own uploads is required.

**Approach**  
1. **Object store backend** – distributed key/value (S3‑style).  
2. **Replication & sharding** – consistent hashing across nodes with replication factor 3.  
3. **CDN edge layer** – pull‑based, cache by content hash, TTL per media type.  
4. **Metadata service** – PostgreSQL + Redis for fast lookup of owner → objects.  
5. **API gateway** – upload/download endpoints that issue pre‑signed URLs.

**Depth**  
- *Write path*: Client uploads to edge node → signed URL → object store node (via consistent hash). Store metadata in DB; asynchronously replicate to other shards. Write latency ≈ 50 ms.  
- *Read path*: User requests a media URL; CDN checks cache; miss triggers fetch from nearest object‑store shard, stores locally for TTL (e.g., 24 h). Consistency achieved by versioned keys and eventual replication lag < 1 s.  
- *Complexity*: O(1) average per operation; sharding gives linear scalability. Replication ensures durability ≥99.999%.  

**Edge Cases**  
- Hot objects: CDN cache eviction policy (LRU with weight).  
- Large videos: chunked upload + multipart resume.  
- Data loss: cross‑region backups, immutable storage.

**Optimize & Communicate**  
Future improvements: use erasure coding for cost savings, edge compute for on‑the‑fly transformations, and a CDN that serves region‑specific thumbnails. In interviews I’d explain trade‑offs (cost vs latency), show the data flow diagram, and justify each design choice with metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
