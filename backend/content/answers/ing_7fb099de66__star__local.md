---
qid: ing_7fb099de66__star__local
question: 'Explain: The Streaming Flow in Action — Design Spotify | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 377
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:49:04-05:00'
sources: []
---

**Situation** – At my previous company we built a music‑streaming prototype similar to Spotify. The product had to deliver 100 k concurrent streams with <150 ms latency while keeping the storage footprint manageable.  

**Task** – Design an end‑to‑end streaming pipeline that ingests user requests, fetches audio chunks from distributed storage, applies real‑time transcoding, and pushes them to clients via a CDN, all while balancing cost and QoS.

**Action** – I chose a microservice architecture:  
1. **API Gateway** (Kong) routes to a *Stream Manager* service that validates tokens and resolves track IDs.  
2. The manager queries a sharded PostgreSQL catalog for metadata and retrieves chunk pointers from a Cassandra cluster.  
3. A *Transcoder* pool runs on Kubernetes, using FFmpeg containers; it caches transcoded segments in Redis to avoid re‑encoding for the same bitrate requests.  
4. Segments are stored in S3 with versioned keys, then delivered through an edge CDN (CloudFront) using HLS/DASH manifests.  
5. I added a monitoring layer: Prometheus collects per‑segment latency; Grafana alerts if >200 ms. Load testing with k6 showed 95th percentile <120 ms at 50 k users.

**Result** – The system sustained 70 k concurrent streams with 98% success, reduced encoding cost by 30%, and lowered average playback start time from 3 s to 0.8 s. I learned that decoupling transcoding, caching, and CDN layers is key for scaling high‑quality audio streaming.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
