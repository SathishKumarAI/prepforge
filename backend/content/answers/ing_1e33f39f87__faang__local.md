---
qid: ing_1e33f39f87__faang__local
question: 'Explain: Endpoint: GET /songs/{song_id}/stream — Design Spotify | System
  Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 529
total_tokens: 775
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:55:31-05:00'
sources: []
---

**Clarify**  
We’re asked to design the API endpoint `GET /songs/{song_id}/stream` that would serve a single track in Spotify‑style streaming.  
Key assumptions:  
- *Song size* (~5 MB).  
- *User authentication* is handled by middleware; we only see a valid `song_id`.  
- The service must support high concurrency (millions of concurrent streams) and low latency (< 200 ms).  

**Approach**  
1. **Cache tier** – CDN edge cache for popular songs, fallback to origin.  
2. **Storage tier** – Object store (S3‑compatible) for raw audio; HLS/DASH segments in a fast key‑value store (Redis/ElastiCache).  
3. **Streaming service** – A stateless microservice that streams byte ranges and records play metrics.  
4. **Monitoring & throttling** – Rate‑limit per user, enforce DRM checks, log to analytics pipeline.

**Depth**  
- *Request flow*: API Gateway → Auth → Stream Service → CDN cache → Object store (if miss).  
- *Byte‑range support*: Parse `Range` header; return 206 Partial Content with `Content-Range`.  
- *CDN integration*: Pre‑cache popular segments; use signed URLs to prevent hotlinking.  
- *Metrics*: Emit events (`play_start`, `play_end`, `buffer_events`) to Kafka → downstream analytics.  
- *Scalability*: Autoscale stream service via Kubernetes, keep stateless to allow horizontal scaling.  
- *Complexity*: O(1) per request for cache hit; O(log n) retrieval from object store on miss.

**Edge Cases**  
- **Cache miss**: Serve directly from S3 with a 5‑second warm‑up.  
- **Invalid `song_id`**: Return 404.  
- **Concurrent requests for same song**: Avoid thundering herd by caching the first response.  
- **Network partition**: Fallback to secondary CDN.

**Optimize & Communicate**  
Explain trade‑offs (e.g., CDN cost vs latency), highlight how we meet SLAs, and outline future improvements such as adaptive bitrate selection or edge‑computing transcoding. This structured narrative demonstrates problem framing, technical depth, and clear communication—key signals for a FAANG interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
