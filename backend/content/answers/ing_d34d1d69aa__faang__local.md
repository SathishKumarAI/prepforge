---
qid: ing_d34d1d69aa__faang__local
question: 'Explain: Playlist Database — Design Spotify | System Design Interview |
  AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 525
total_tokens: 763
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:51:34-05:00'
sources: []
---

**Clarify**

We need a scalable “playlist” service for a music platform (Spotify‑style).  
Assumptions:  

* Users create, edit, delete playlists; each playlist contains up to ~10 k tracks.  
* Tracks are immutable metadata objects in a global catalog.  
* Read traffic dominates (streaming & UI), writes are less frequent but must be ACID for consistency.  
* We care about low latency (<50 ms) and high throughput.

**Approach**

1. **Data model** – Two tables: `Playlists(id, user_id, name, visibility)` and `PlaylistTracks(playlist_id, track_id, position, added_at)`.  
2. **Storage** – Use a relational DB (PostgreSQL) for ACID guarantees; sharded by `user_id` to distribute load.  
3. **Caching** – Redis cache per user’s playlists + LRU eviction for hot playlists.  
4. **API surface** – REST/GRPC endpoints: create, add/remove track, reorder, delete, fetch playlist (full or paginated).  
5. **Background jobs** – Rebuild materialized view of top‑popular playlists; update recommendation cache.

**Depth**

*Writes*: transactional batch insert for adding multiple tracks to keep order atomic.  
*Reads*: first hit Redis; on miss, query DB, populate cache, and return. Pagination via `OFFSET`/`LIMIT` or keyset (position).  
*Consistency*: eventual consistency between cache and DB is acceptable for reads; write‑through ensures updates propagate immediately.  
*Complexity*: Reads O(1) cache + O(log n) DB lookup; writes O(k log n) where k = number of tracks added.

**Edge Cases**

*Playlist exceeds size limit → reject with 400.*  
*Concurrent edits → optimistic locking via version field.*  
*Cache invalidation on delete → publish to message queue (Kafka) to evict.*

**Optimize & Communicate**

- Shard by `user_id` and use read replicas for hot playlists.  
- Compress playlist metadata in cache (protobuf).  
- Expose metrics (cache hit rate, latency) to monitor SLA.  

Narration: “We first define the data model, then choose storage that balances consistency with scalability, add a caching layer for low‑latency reads, and finally outline how writes maintain integrity while background jobs keep recommendation engines fresh.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
