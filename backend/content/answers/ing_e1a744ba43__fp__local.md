---
qid: ing_e1a744ba43__fp__local
question: 'Explain: Object Storage & CDN — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 447
total_tokens: 624
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:59:43-05:00'
sources: []
---

**Why an “object‑storage + CDN” layer is mandatory for a photo‑centric app**

*Fundamental problem:* every user upload is a *large, immutable blob* that must be read many times by geographically dispersed clients.  
*Key insight*: reading the same file repeatedly is far cheaper than writing it again; therefore we separate **write‑once storage** from **read‑optimized delivery**.

1. **Object store (immutable blobs + metadata)**  
   *Why immutable?* Guarantees idempotence and enables safe parallel uploads, versioning, and audit trails.  
   *Why key‑value?* The primary access pattern is “get by URL”, so a flat namespace with strong consistency satisfies O(1) lookups.  
   *Why erasure coding / replication?* Balances durability (≥ 99.9999%) against cost: we can tolerate multiple disk/node failures without excessive redundancy.

2. **CDN cache layer**  
   *Why edge caching?* Latency dominates user experience; placing a copy in the nearest point of presence reduces round‑trip time from ~200 ms to < 20 ms.  
   *Cache invalidation strategy:* Use immutable URLs (hashes) so that once cached it never expires, eliminating the need for aggressive purge logic.  

3. **Interaction**  
   - Upload → object store writes blob + metadata.  
   - Serve request → CDN checks local cache; miss triggers fetch from object store, caches result, and returns.  
   - Because URLs are content‑hash based, any user can share a link that will always resolve to the same cached image.

**Non‑obvious insight:** *Treat the CDN as part of the storage tier rather than a separate “delivery” layer.* By exposing the CDN’s origin as an HTTP endpoint with signed tokens, you unify authentication, rate limiting, and analytics in a single request path—simplifying the architecture while keeping each component at its optimal scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
