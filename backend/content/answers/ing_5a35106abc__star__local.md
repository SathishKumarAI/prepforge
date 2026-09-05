---
qid: ing_5a35106abc__star__local
question: 'Explain: Audio Files (The Big One) — Design Spotify | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 384
total_tokens: 630
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:28:08-05:00'
sources: []
---

**Situation:**  
During a product‑launch sprint at my previous company, we had to migrate our legacy music catalog—over 10 million tracks—to a new cloud platform that could support real‑time streaming for 50 k concurrent users. The existing monolithic storage was hitting latency spikes and the cost of bandwidth was spiraling.

**Task:**  
I needed to architect a scalable, fault‑tolerant audio delivery system that reduced end‑to‑end latency below 200 ms, cut CDN costs by 30%, and ensured 99.9% uptime while handling peak loads during live events.

**Action:**  
1. Decomposed the monolith into micro‑services: ingestion, transcoding, metadata, and cache layers using Docker/Kubernetes.  
2. Adopted a chunked‑streaming model with HLS/DASH; stored chunks in an S3‑compatible object store (MinIO) partitioned by artist/album to enable parallel fetches.  
3. Implemented a CDN edge cache with Redis for hot tracks, and used Lambda@Edge functions to rewrite URLs on the fly, reducing round‑trips.  
4. Added a rate‑limiting gateway (Kong) that throttled requests per user, preventing burst spikes from consuming bandwidth.  
5. Monitored QoS metrics via Prometheus/Grafana; auto‑scaled transcoding workers based on CPU usage.

**Result:**  
Latency dropped to 120 ms on average, CDN traffic fell by 35%, and the system sustained 60 k concurrent users during a live concert with no outages. I learned how architectural decomposition coupled with edge caching can dramatically improve performance while keeping costs in check.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
