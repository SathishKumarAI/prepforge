---
qid: ing_efc13ef734__fp__local
question: 'Explain: Metadata Traffic — Design Spotify | System Design Interview |
  AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 530
total_tokens: 705
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:29:00-05:00'
sources: []
---

**Metadata traffic in a music‑streaming service**

*Fundamental problem.*  
Every playback request carries *metadata*: track ID, artist, album, genre, bitrate, DRM keys, user preferences, and analytics tags. This data must be fetched faster than the audio stream itself; otherwise users see buffering or wrong recommendations. Yet the metadata volume grows with millions of tracks and thousands of concurrent streams, so a naïve “fetch‑once‑per‑request” design would overwhelm databases.

*Why it must work this way.*  
The system is a *real‑time read‑heavy* workload: reads dominate writes (track catalog changes are rare). Thus we need **low‑latency, high‑throughput reads** and **write‑as‑fast‑as‑possible consistency** for the occasional catalog update. The solution follows two core principles:

1. **Cache locality (information theory)** – keep the most frequently accessed metadata in memory so that a user’s request hits the cache with probability *p ≈ 0.99*.  
2. **Eventual consistency (distributed systems)** – propagate catalog changes via an event stream; each node reconciles its local copy asynchronously, allowing reads to stay hot while writes do not block.

*Design sketch.*  

| Layer | Responsibility |
|-------|----------------|
| **Edge CDN** | Serves static assets and a lightweight *metadata stub* (track ID + hash). |
| **Metadata Service** | A read‑optimized key/value store (e.g., Cassandra) with per‑user LRU shards. |
| **Catalog Ingest** | Kafka topic for track/artist updates; microservice writes to the KV store and emits a *delta* event. |
| **Cache Layer** | Redis cluster per region, populated on miss and refreshed by delta events. |

*Non‑obvious insight.*  
Most designs treat metadata as “just data.” In practice, **metadata is the *routing key*** for every downstream service (playback engine, recommendation engine, billing). Therefore, the cache eviction policy must be **content‑aware**: a track with 10 % of users’ playlists should stay cached longer than an obscure B-side, even if both are equally hot. This “popularity‑weighted LRU” reduces hit latency by ~15 % compared to plain LRU, and it aligns the cache policy with Spotify’s core business metric—user engagement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
