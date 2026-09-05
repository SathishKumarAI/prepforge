---
qid: ing_3044f10bb9__think__local
question: 'Explain: Object Storage — Design Spotify | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 452
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:20:58-05:00'
sources: []
---

**1️⃣ Clarify the scope and assumptions**  
- What “object storage” means in this context (S3‑style key/value store).  
- The size/scale of Spotify’s catalog (millions of tracks, many GB per track).  
- Key constraints: low latency for playback, high throughput for uploads, durability, cost.  

**2️⃣ Choose a mental model / framework**  
- Break the system into layers: *API layer → metadata service → storage tier → persistence*.  
- Apply CAP and PACELC trade‑offs to decide consistency vs availability.  
- Use a CDN + edge cache pattern for read amplification.  

**3️⃣ Step‑by‑step reasoning**  
1. **Client API**: REST/GRPC endpoints for upload, fetch, delete.  
2. **Metadata service**: Store track metadata (UUID, owner, permissions) in a relational DB or distributed KV store.  
3. **Object placement**: Compute hash of key → shard → storage node; replicate to N nodes.  
4. **Storage tier**: Use erasure coding + SSDs for hot data, cold tier on HDD/infiniBand.  
5. **Consistency model**: Read‑your‑writes for uploads, eventual consistency for global reads.  
6. **Cache layer**: Edge CDN (e.g., CloudFront) with origin pull from object store; use cache‑aside in app servers.  

**4️⃣ Common traps to avoid**  
- Assuming single‑region storage solves latency.  
- Ignoring write amplification when using erasure coding.  
- Over‑optimizing for cost at the expense of availability.  

**5️⃣ Sanity‑check & verbalize**  
- Verify each requirement is met: durability (≥ 11 nines), latency (< 200 ms), scalability (10k RPS).  
- Explain trade‑offs aloud: “We choose eventual consistency because read traffic dominates and users tolerate a slight delay.”  

This structured thought process can be reused for any large‑scale object storage design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
