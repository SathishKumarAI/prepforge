---
qid: ing_e1a744ba43__think__local
question: 'Explain: Object Storage & CDN — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 196
output_tokens: 438
total_tokens: 634
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T15:53:48-05:00'
sources: []
---

**1️⃣ Clarify the scope and assumptions**  
- Identify what “Object Storage & CDN” mean in Instagram’s context (e.g., storing media blobs, delivering them globally).  
- Assume a large user base (~10 B users) with high read/write traffic; storage cost and latency are critical.  

**2️⃣ Choose a mental model / framework**  
- Use the *Three‑Tier Storage* paradigm: **Upload → Ingestion & Transformation → Edge Delivery**.  
- Map each tier to concrete services (S3/Blob, CDN edge nodes, cache).  

**3️⃣ Step‑by‑step reasoning**  
1. **Ingest**: Users upload images/videos → HTTPS endpoint → temporary bucket → trigger transformation (resize, thumbnails).  
2. **Persist**: Store original + derived objects in a global object store (S3/Google Cloud Storage) with strong consistency guarantees.  
3. **Indexing**: Update metadata tables (PostgreSQL / Bigtable) linking user IDs to object URLs and access policies.  
4. **Distribution**: Edge CDN nodes cache popular media; use cache‑control headers, signed URLs for private content.  
5. **Eviction & Lifecycle**: Policy to delete old or low‑access objects after a retention window.  

**4️⃣ Common traps to avoid**  
- Forgetting to separate public vs. private media (security).  
- Ignoring cache invalidation on edits → stale thumbnails.  
- Over‑optimizing for write throughput at the expense of read latency.  

**5️⃣ Sanity‑check & verbalize**  
- Verify that each user action maps to a single storage path and CDN fetch.  
- Explain how the system scales horizontally (new object store nodes, CDN edge rollouts).  
- Emphasize cost control: use multi‑region replication only where needed, tiered storage for cold data.

This structured thought process can be reused for any large‑scale media delivery design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
