---
qid: ing_69fcc94c95__faang__local
question: 'Explain: Playback Service — Design Spotify | System Design Interview |
  AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 442
total_tokens: 680
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:50:17-05:00'
sources: []
---

**Clarify**  
We need a scalable “playback service” for an app like Spotify that streams audio, handles user requests, and serves playlists/ads with low latency. Assume: millions of concurrent users, 10 k+ songs per user, real‑time ad insertion, support for offline caching, and eventual consistency across regions.

**Approach**  
1. **API Gateway → Auth Service** – validate tokens, rate‑limit.  
2. **Playback API** – accepts “play track X”, returns a signed stream URL.  
3. **Streaming Layer** – CDN edge nodes host encoded MP3/FLAC chunks; use HLS/DASH for adaptive bitrate.  
4. **Ad Scheduler Service** – per user queue, picks ad based on targeting, injects into playlist before delivery.  
5. **Metadata Cache (Redis)** – song info, cover art, DRM keys.  
6. **Analytics Queue (Kafka)** – log play events asynchronously.  
7. **Database** – PostgreSQL for relational data; DynamoDB for high‑write playlists.

**Depth**  
- **Latency**: CDN edge < 50 ms; API response < 100 ms.  
- **Throughput**: 1 M concurrent streams → 10 TB/day bandwidth; use sharded object storage (S3 + CloudFront).  
- **Fault tolerance**: Multi‑AZ, automatic failover of auth and cache; stream URLs expire after few minutes.  
- **Complexity**: O(1) per request for cache hits; streaming cost dominated by bandwidth.

**Edge Cases**  
- User offline → fallback to local cache or queue.  
- DRM key revocation → propagate via Pub/Sub.  
- Ad budget exhaustion → serve default “premium” content.  

**Optimize & Communicate**  
Explain trade‑offs: CDN vs. origin latency, caching granularity (track vs. chunk), and choice of HLS for broad device support. Conclude with monitoring (latency dashboards) and incremental rollout strategy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
