---
qid: ing_cc23824508__faang__local
question: 'Explain: Static Web Assets — Content Delivery Network (CDN) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 482
total_tokens: 721
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:33:59-05:00'
sources: []
---

**Static Web Assets – CDN Architecture**

| Step | What I’d say |
|------|--------------|
| **Clarify** | “You want an end‑to‑end design for serving static files (JS/CSS/img) to millions of users worldwide with low latency, high availability and cost efficiency. Are we focusing on read‑heavy traffic only? Do we need versioning or cache‑busting? What SLA do we target?” |
| **Approach** | 1️⃣ Ingest assets → store in a *global* object store (S3/Blob). <br>2️⃣ Replicate to edge nodes via a CDN (e.g., CloudFront, Akamai). <br>3️⃣ Cache‑control headers + immutable URLs. <br>4️⃣ Route through DNS (Route 53) to nearest edge. <br>5️⃣ Invalidate on updates; use signed URLs for private assets. |
| **Depth** | • *Storage*: Object store with versioning → durability 99.999999999%. <br>• *Edge Caching*: TTLs, ETag/If‑None‑Match, compression (gzip/Brotli). <br>• *Invalidation cost*: O(1) per object vs bulk. <br>• *Security*: Origin access identity + HTTPS; signed cookies for auth. <br>• *Cost trade‑offs*: Larger TTL = fewer origin hits but stale data risk. |
| **Edge Cases** | • Large file (>100 MB): fallback to direct S3 download with presigned URL.<br>• Geo‑restricted content: edge origin failover or regional bucket.<br>• Rapidly changing assets: use cache‑busting query strings instead of invalidation. |
| **Optimize & Communicate** | “To hit 99.9 % availability, I’d enable multi‑region replication and health‑check routing so traffic automatically shifts if an edge fails. For cost, we’ll use a tiered caching policy: static libraries stay cached long; dynamic page fragments short. I’d present this as a diagram with data flow, latency budget, and a table of expected cost vs TTL.” |

*Word count: ~190 words.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
