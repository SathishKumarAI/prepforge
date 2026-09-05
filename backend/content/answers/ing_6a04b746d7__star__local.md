---
qid: ing_6a04b746d7__star__local
question: 'Explain: 4.1 Requirement 1: Music Streaming — Design Spotify | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 423
total_tokens: 672
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:59:37-05:00'
sources: []
---

**Situation**  
During my internship at a mid‑size SaaS startup, we were tasked with building a prototype for a music‑streaming platform similar to Spotify. The product had to support millions of users, deliver low‑latency playback, and handle 10 k concurrent streams during peak hours.

**Task**  
I was responsible for designing the core streaming architecture: how songs would be stored, how requests would be routed, and how we’d ensure high availability and cost efficiency while keeping latency under 200 ms.

**Action**  
1. **Storage & CDN** – I chose Amazon S3 for immutable audio blobs (MP3/FLAC) and front‑loaded them through CloudFront edge caches to reduce egress costs and latency.  
2. **Metadata Service** – A PostgreSQL cluster with read replicas held song, album, artist tables; we sharded by artist ID to keep lookups fast (<5 ms).  
3. **Streaming API** – Implemented a stateless REST endpoint that fetched the presigned S3 URL and streamed via HTTP Range requests. For concurrency, I added an Nginx reverse proxy with connection pooling.  
4. **Rate Limiting & Throttling** – Redis distributed locks limited per‑user simultaneous streams to 2; a token bucket algorithm prevented burst spikes.  
5. **Monitoring** – Prometheus collected request latency, cache hit ratios, and S3 read bytes; Grafana dashboards triggered alerts when cache hit < 85 %.  

**Result**  
The prototype handled 15 k concurrent streams in production tests with an average latency of 145 ms and a CDN cache hit rate of 92 %, reducing bandwidth costs by ~30 % compared to a naïve architecture. I learned the importance of separating concerns (storage, metadata, delivery) and how edge caching can dramatically lower operational costs while meeting stringent performance SLAs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
