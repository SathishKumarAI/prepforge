---
qid: ing_017bd6182e__faang__local
question: 'Explain: Read Workflow — Spotify System Design - by Neo Kim and Hayk'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 523
total_tokens: 761
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:47:35-05:00'
sources: []
---

**Clarify**  
The “Read workflow” in Spotify’s system design refers to how a client fetches media (songs, playlists) from the backend. Key assumptions: we’re dealing with millions of users, each request can be for single tracks or large playlists; latency < 200 ms is required; data consistency is eventual; traffic is read‑heavy and cache‑centric.

**Approach**  
1. **Client → Edge Cache (CDN)** – first hop.  
2. **Edge → Regional Service** – resolves user, playlist metadata, and fetches media URLs.  
3. **Regional Service → Origin Store** – fallback to object storage if CDN miss.  
4. **Metrics & A/B testing** – monitor cache hit ratios and latency.

**Depth**  
- *CDN Layer*: Stores MP3/FLAC blobs; uses signed URLs for DRM. Cache‑control headers set to 24 h, refreshed via invalidation on updates.  
- *Regional Service*: Stateless microservice backed by a distributed key‑value store (e.g., Cassandra) for metadata and a relational DB for licensing. Uses read‑through caching: if metadata miss, fetch from DB then populate cache.  
- *Origin Store*: Object storage (S3/MinIO) holds immutable media files; versioned to support rollbacks.  
- *Consistency*: Leveraging eventual consistency with TTL on caches ensures stale data is acceptable for short periods.  
- *Load Balancing*: Round‑robin + health checks; auto‑scale based on request per second.

**Edge Cases**  
- **Cache miss spikes**: fallback latency increases; mitigate via prewarming popular playlists during off‑peak.  
- **User‑specific DRM tokens expiring mid‑stream**: handle by short token lifetimes and silent refresh.  
- **Data center outage**: traffic rerouted to nearest region; data replicated across zones.

**Optimize & Communicate**  
- *Cache hit ratio* → target > 95 % for top 10k tracks.  
- *Latency budget*: CDN (≤ 50 ms), Regional Service (≤ 80 ms), Origin Store (≤ 70 ms).  
- Explain trade‑offs: higher cache TTL reduces backend load but increases staleness; smaller shards improve latency but increase management overhead.  

This design balances performance, scalability, and cost while keeping the user experience smooth.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
