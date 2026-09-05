---
qid: ing_1e33f39f87__fp__local
question: 'Explain: Endpoint: GET /songs/{song_id}/stream — Design Spotify | System
  Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 366
total_tokens: 549
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:10:42-05:00'
sources: []
---

**Endpoint: `GET /songs/{song_id}/stream`**

The core problem is *continuous delivery of high‑bandwidth audio with low latency and maximal availability*.  
1. **Statelessness & scalability** – The endpoint must be stateless so that any CDN edge can serve a request.  
2. **Cache‑friendly chunking** – Audio is split into 30‑second HLS fragments; each fragment has a deterministic URL (`song_id/segment_{N}.ts`). This lets browsers and CDNs cache aggressively, reducing load on origin servers.  
3. **Content‑addressable storage** – Fragments are stored in an object store (S3, GCS) with keys derived from SHA‑256 of the fragment data. Two songs that share identical segments (e.g., remastered versions) automatically dedupe, saving bandwidth and cost.  
4. **Adaptive bitrate switching** – The API serves a *manifest* (`song_id/playlist.m3u8`) listing multiple quality variants; clients switch based on measured throughput. This leverages information theory: the manifest encodes probability distributions of network states, allowing the client to optimize expected QoE.  
5. **Rate‑limiting & CDN pull** – Each request triggers a signed URL that expires after 10 s, preventing abuse and ensuring CDN edges can fetch from origin only when needed.  

**Non‑obvious insight:** By storing fragments *content‑addressably*, identical audio across artists or versions becomes a single object in storage. This turns the streaming service into an implicit deduplication engine, dramatically reducing storage footprint while keeping latency unchanged.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
