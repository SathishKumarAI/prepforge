---
qid: ing_528af98201__faang__local
question: 'Explain: I I decided that what if so — Seattle Conference on Scalability:
  YouTube Scalability'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 469
total_tokens: 712
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:56:18-05:00'
sources: []
---

**Clarify**  
You’re asking how a platform like YouTube can scale to millions of concurrent viewers while keeping latency low and storage costs manageable. I’ll assume we need to support real‑time streaming, on‑demand playback, and adaptive bitrate (ABR) across global regions.

**Approach**  
1. **Content delivery network (CDN)** – edge caching reduces round‑trips.  
2. **Micro‑services architecture** – decouple encoding, recommendation, billing, etc.  
3. **Data partitioning & sharding** – user data in a graph DB; video metadata in a key‑value store.  
4. **Auto‑scaling compute pools** for transcoding and serving.  
5. **Observability + chaos engineering** to detect bottlenecks early.

**Depth**  
- *CDN*: Use consistent hashing to map videos to edge nodes, with cache invalidation on new uploads or updates.  
- *Encoding*: Parallelize ABR generation across GPU clusters; store tiers (1080p, 720p, etc.) in S3‑like object storage.  
- *Serving*: HTTP/2 + QUIC for multiplexing; use a CDN that supports origin failover.  
- *Data*: Video ID → metadata sharded by hash; user watch history stored in a time‑series DB (e.g., ClickHouse).  
- *Scalability metrics*: Target 99th percentile latency < 200 ms; 99.9% cache hit rate.

**Edge Cases**  
- Sudden viral spikes: burst autoscaling and pre‑warming of edge caches.  
- Region‑specific regulations: data residency, GDPR compliance.  
- Device fragmentation: fallback to lower bitrates for legacy browsers.

**Optimize & Communicate**  
We can reduce cost by leveraging spot instances for encoding jobs and using serverless functions for lightweight services. I’d present a diagram showing CDN ↔ edge nodes ↔ origin clusters, annotate autoscaling triggers, and highlight the observability stack (Prometheus + Grafana). This keeps the explanation concise yet complete for a FAANG interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
