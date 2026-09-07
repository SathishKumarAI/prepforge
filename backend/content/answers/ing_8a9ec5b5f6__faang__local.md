---
qid: ing_8a9ec5b5f6__faang__local
question: 'Explain: Metadata — Design Spotify | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 499
total_tokens: 736
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:06:02-05:00'
sources: []
---

**Clarify**  
You’re asked to design the *metadata* layer for a music streaming service like Spotify.  
Key assumptions: we need to store song, album, artist info; support fast lookup by ID and by user‑generated tags; handle millions of updates per day; and keep latency < 50 ms for API calls.

**Approach**  
1. **Data model** – separate *core* (immutable) and *mutable* tables: `Track`, `Album`, `Artist` plus a key‑value store for user metadata (playlists, tags).  
2. **Storage** – use a relational DB (PostgreSQL) for consistency on core data; a distributed NoSQL (Cassandra/Spanner) for high‑write workloads and sharded by artist ID.  
3. **Caching** – read‑heavy paths hit an L1 Redis cache keyed by track ID, with TTLs for mutable fields.  
4. **API layer** – expose gRPC services; use request‑coalescing to avoid thundering herd.

**Depth**  
- **Schema**: `Track(id PK, title, duration, album_id FK, artist_id FK, release_date)`; `Album` and `Artist` similarly.  
- **Sharding key**: `artist_id % N` → ensures even write load.  
- **Consistency**: strong consistency on core tables; eventual consistency on caches.  
- **Complexity**: Read O(1) via cache, fallback to DB O(log N). Write O(log N) for distributed commit.

**Edge Cases**  
- Duplicate track uploads → deduplication logic in ingestion pipeline.  
- Rapid tag churn → TTL cache invalidation.  
- Offline reads during network partitions → serve stale data with “data‑stale” flag.

**Optimize & Communicate**  
Future improvements: add a search index (Elasticsearch) for full‑text queries; use read replicas to offload analytics. In the interview, I’d emphasize trade‑offs between consistency and latency, explain why relational storage is chosen for core data, and outline monitoring (latency dashboards, cache hit ratios). This showcases clear problem framing, architectural depth, and communication—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
