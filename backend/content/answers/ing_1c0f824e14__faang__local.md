---
qid: ing_1c0f824e14__faang__local
question: 'Explain: Distributed Object Storage — Design Instagram | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 509
total_tokens: 748
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:50:17-05:00'
sources: []
---

**1️⃣ Clarify**  
We need a scalable, fault‑tolerant distributed object store for Instagram’s media (photos/video). Assume: 10⁶+ uploads/day, 200 GB/month per user, high read/write throughput, eventual consistency is acceptable, and the system must support global CDN caching. Ask about retention policy, data lifecycle, and geo‑replication requirements.

**2️⃣ Approach**  
*Layered architecture:*  
- **Client → Edge (CDN) → API Gateway → Object Service**  
- **Object Service ↔ Metadata DB (NoSQL)**  
- **Blob Storage Layer (sharded object store)**  
Key decisions: erasure coding vs replication, key‑value namespace design, and consistency model.

**3️⃣ Depth**  
*Metadata:* Store `{object_id, user_id, timestamp, tags, location, ACL}` in a partitioned NoSQL table keyed by `user_id#timestamp`. Use range scans for feeds.  
*Blob Storage:* Shard objects across 256 nodes using consistent hashing on `object_id`. Each node stores data in local SSD + tiered to HDD/Cold storage. Replicate each object 3× (or use erasure coding with k=6, m=3) for durability.  
*Write path:* Client uploads to edge → API generates unique `object_id`, writes metadata, streams blob to a randomly chosen shard; acknowledgments sent after replication.  
*Read path:* Feed query fetches metadata, then CDN caches the object via its URL (signed).  
*Consistency:* Use write‑through caching; eventual consistency achieved by background sync of replicas.

**4️⃣ Edge Cases**  
- *Hot objects*: use hot‑cache nodes or increase replica count.  
- *Node failure*: rehashing with consistent hashing, automatic replica promotion.  
- *Large uploads*: chunked streaming, resumable uploads.  
Test for 99.999% availability and latency <200 ms under peak traffic.

**5️⃣ Optimize & Communicate**  
Add CDN edge caching to reduce origin hits, use compression for small images, and employ object tiering (hot → warm → cold). Explain trade‑offs: replication gives fast reads but higher storage cost; erasure coding saves space at the expense of CPU overhead. Summarize with a diagram and note that monitoring/auto‑scaling are essential for operational health.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
