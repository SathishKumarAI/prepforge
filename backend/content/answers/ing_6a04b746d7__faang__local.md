---
qid: ing_6a04b746d7__faang__local
question: 'Explain: 4.1 Requirement 1: Music Streaming — Design Spotify | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 483
total_tokens: 729
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:50:34-05:00'
sources: []
---

**Clarify**  
We’re asked to design the core of a music‑streaming service like Spotify: catalog storage, user playlists, recommendation, playback, and scaling. Key assumptions:  
- Millions of users, billions of tracks, each ~3 min MP3/FLAC (~10 MB).  
- Low latency (<200 ms) for playback start; high throughput (tens of MB/s per user).  
- Strong consistency for playlists but eventual consistency acceptable for catalog.  

**Approach**  
1. **Catalog layer** – immutable media objects in an object store (S3/Blob), metadata in a distributed NoSQL DB (Cassandra) with secondary indexes on artist/genre.  
2. **Playback layer** – CDN edge nodes cache popular tracks; origin pulls from storage, streams via HTTP/HTTPS HLS/DASH.  
3. **User data** – relational DB for accounts + key‑value store (Redis) for session tokens and playlist cache.  
4. **Recommendation engine** – offline batch job builds user–item matrix → ALS or neural CF; online microservice serves top-N per user, cached in Redis.  

**Depth**  
- *Scalability*: Shard catalog by hash of track ID; use consistent hashing to add nodes without rebalancing. CDN reduces origin load; edge cache hit rate >90 %.  
- *Latency*: Pre‑fetch next tracks, keep 2–3 buffers ahead. Use HTTP/2 multiplexing for multiple streams.  
- *Consistency*: Playlists stored in ACID DB; use optimistic locking (ETag) to prevent race conditions.  

**Edge Cases**  
- Offline users → serve cached local copies.  
- Sudden spike (e.g., new release) → auto‑scale CDN, add origin nodes via Kubernetes HPA.  
- Broken links → fallback to alternate bitrate or silent track.  

**Optimize & Communicate**  
Explain trade‑offs: using object store vs block storage for cost; eventual consistency vs performance for catalog queries. Highlight monitoring (latency dashboards), A/B testing of recommendation models, and gradual rollout via feature flags. Conclude with a high‑level diagram to illustrate component interactions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
