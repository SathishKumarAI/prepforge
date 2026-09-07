---
qid: ing_70151dc9fe__faang__local
question: 'Explain: Dropbox system design | Google drive system design | System design
  file share and upload'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 545
total_tokens: 785
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:03:48-05:00'
sources: []
---

**Clarify**  
We’re asked to sketch the high‑level architecture for a cloud storage service that supports *upload, download, sharing, versioning,* and *scalable consistency* (think Dropbox/Google Drive). I’ll assume: 1) users upload large blobs; 2) reads are frequent and latency‑sensitive; 3) sharing is via ACLs or links; 4) eventual consistency is acceptable for non‑critical paths.

**Approach**  
1. **API Gateway → Load Balancer → Stateless App Servers**  
   – Route REST/GRPC calls, handle auth/token validation.  
2. **Metadata Service (NoSQL + Search)**  
   – Store file/folder hierarchy, ownership, ACLs, and version history.  
3. **Object Storage Layer**  
   – Sharded S3‑compatible buckets; use erasure coding for durability.  
4. **Content Delivery Network (CDN) / Edge Cache**  
   – For fast download & prefetching.  
5. **Background Workers**  
   – Deduplication, virus scan, thumbnail generation, sync to secondary region.

**Depth**  
- *Upload*: client streams chunks → App server writes to object store; metadata transaction records file ID and chunk refs.  
- *Download*: CDN fetches latest version; fallback to app if stale.  
- *Sharing*: ACL entry in metadata; share link generates signed token that bypasses auth.  
- *Versioning*: Append‑only log of changes; each write creates new object, old pointers retained.  
- **Complexities**: O(1) read latency via CDN, O(log N) metadata ops in NoSQL, cost ≈ O(size) for storage, throughput ≈ 10⁶ IOPS per region.

**Edge Cases**  
- Simultaneous edits → conflict resolution (last‑write wins or merge).  
- Large file (>1 GB) → multipart upload with retry.  
- Network partition → eventual consistency; user sees “stale” copy until sync.

**Optimize & Communicate**  
We can add a *pre‑fetch* queue to cache upcoming files for active users, and implement *server‑side encryption* per tenant. I’d explain trade‑offs: using CDN reduces latency but adds caching staleness; erasure coding saves cost vs RAID. This structured walk‑through showcases problem framing, design choices, and awareness of real‑world constraints—key signals for FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
