---
qid: ing_1e33f39f87__think__local
question: 'Explain: Endpoint: GET /songs/{song_id}/stream — Design Spotify | System
  Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 202
output_tokens: 442
total_tokens: 644
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T04:42:33-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**

* Ask whether we’re designing a public API or an internal micro‑service.  
* Assume `song_id` is globally unique and that the service must serve millions of concurrent streams.  
* Decide on statelessness, caching, and eventual consistency for metadata.

**2️⃣ Adopt a layered framework**

1. *Client layer*: REST endpoint (`GET /songs/{id}/stream`).  
2. *API gateway / load balancer*: handles TLS termination, rate limiting, auth.  
3. *Service layer*: fetches stream URL & metadata.  
4. *Storage layer*: CDN for actual audio blobs + DB for metadata.  
5. *Cache layer*: in‑memory (Redis) to keep hot track URLs.

**3️⃣ Step‑by‑step reasoning**

1. **Auth / Authorization** – Verify user token, check subscription tier.  
2. **Metadata lookup** – Query a read‑optimized DB; if miss, fallback to cache.  
3. **CDN URL generation** – Use a signed URL (expires after few minutes).  
4. **Return response** – JSON containing streaming URL and bitrate options.  
5. **Metrics & tracing** – Log request ID, latency, success/failure for monitoring.

**4️⃣ Common pitfalls to avoid**

* Over‑caching the CDN URL forever → stale or revoked URLs.  
* Tight coupling between API and storage → hard to swap CDNs.  
* Ignoring back‑pressure from media servers leading to throttling issues.  
* Forgetting to handle partial failures (e.g., CDN down) gracefully.

**5️⃣ Sanity‑check & verbalize**

* Verify that the endpoint is idempotent, stateless, and can be load‑balanced.  
* Confirm that scaling paths are clear: cache → DB → storage.  
* Explain latency budgets (≤ 200 ms for metadata + CDN lookup).  

By walking through these steps, you demonstrate a structured approach to designing a robust streaming endpoint.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
