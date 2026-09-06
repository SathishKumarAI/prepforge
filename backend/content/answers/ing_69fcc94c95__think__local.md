---
qid: ing_69fcc94c95__think__local
question: 'Explain: Playback Service — Design Spotify | System Design Interview |
  AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 656
total_tokens: 850
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T08:01:56-05:00'
sources: []
---

**1. Clarify the ask & set assumptions**  
   - *What* is required? A high‑level design of a “Playback Service” that could power Spotify‑style music streaming.  
   - *Scope*: focus on core playback features (play, pause, skip, queue), user state, caching, scaling, and resilience.  
   - *Constraints*: millions of concurrent users, low latency (<100 ms), high availability, eventual consistency for playlists.  
   - *Assumptions*: we already have a catalog service, authentication, and a CDN; the playback API is stateless except for user‑specific session data.

**2. Adopt a system‑design framework**  
   - **Functional decomposition**: Client → API Gateway → Playback Service (stateless workers) → Cache/DB → Storage & CDN.  
   - **Data model**: UserSession, QueueItem, TrackMetadata, PlayerState.  
   - **Scalability patterns**: horizontal scaling of stateless workers, sharding user sessions, read‑through cache for track data.

**3. Step‑by‑step reasoning**  
   1. *Entry point*: Client sends a REST/GRPC request to the API Gateway; gateway authenticates via JWT and forwards to Playback Service.  
   2. *Session handling*: Playback Service checks Redis (or Memcached) for an existing UserSession; if missing, create one in Cassandra or DynamoDB.  
   3. *Queue operations*: `addTrack`, `removeTrack`, `skip` update the session’s queue list atomically (e.g., using optimistic locking).  
   4. *Playback streaming*: Service resolves the track URL from Catalog Service, streams via CDN; metadata cached in Redis for quick look‑ups.  
   5. *State persistence*: Periodically snapshot UserSession to a durable store; on restart, reload from DB.  
   6. *Scaling*: Use load balancers to distribute requests; employ rate limiting per user/IP.  
   7. *Resilience*: Retry logic for CDN failures, fallback to alternate bitrate if primary stream fails.

**4. Common traps to avoid**  
   - **Over‑engineering the cache**: keep it simple (read‑through) unless profiling shows a bottleneck.  
   - **Synchronous DB writes on every skip**: batch or use eventual consistency for queue updates.  
   - **Ignoring CDN edge caching**: neglecting this can inflate latency and bandwidth costs.  
   - **Single point of failure in session store**: ensure replication/auto‑failover.

**5. Sanity‑check & verbalize**  
   - *Ask*: Does the design meet latency targets? Are we handling millions of concurrent streams? Is data consistency acceptable for user experience?  
   - *Explain*: Start with a diagram, walk through a typical request path, highlight where scaling and fault tolerance are applied, then address trade‑offs (e.g., cache invalidation vs. freshness).  

By following this structured approach you’ll produce a clear, scalable playback service design that satisfies interview expectations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
