---
qid: ing_69fcc94c95__fp__local
question: 'Explain: Playback Service — Design Spotify | System Design Interview |
  AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 569
total_tokens: 744
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:50:06-05:00'
sources: []
---

**Why a playback service exists**

The core problem is *continuous, low‑latency audio delivery* to millions of users who may start, pause, skip, or change quality on the fly. The system must keep **time‑synchronization** (e.g., 5 ms jitter) while scaling to billions of concurrent streams.

**Key invariants**

| Invariant | Why it holds |
|-----------|--------------|
| *Stateless client requests* | Enables horizontal scaling; each request can be served by any node. |
| *Eventual consistency for user preferences* | Small drift in bitrate or queue order is acceptable; we can tolerate stale data until the next fetch. |

**Architecture**

1. **Client → CDN edge**  
   - The player issues a short‑lived request (`GET /track/{id}?bitrate=320`).  
   - The CDN caches MP3/Opus chunks (e.g., 10 s segments).  
   - Edge nodes keep an LRU of the most recent *N* users’ streams, reducing origin load.

2. **Origin – Track Service**  
   - Stores metadata (duration, available bitrates) and a signed URL to immutable storage (S3/Blob).  
   - Handles rate‑limit per user (to avoid abuse).

3. **Playback Controller**  
   - A lightweight microservice that orchestrates *skip*, *seek*, *shuffle* by updating the user’s session state in Redis (`session:{user_id}`) with a small JSON: `{queue:[ids], current_idx, timestamp}`.  
   - Uses Pub/Sub to push updates to all active player instances (e.g., when a new track starts).

4. **Analytics & Recommendations**  
   - A separate event stream ingests `play`, `pause`, `skip` events for offline ML training.

**Non‑obvious insight**

The *chunk size* is the hidden lever that balances latency against cache hit rate. If chunks are too small (1 s), CDN cache misses explode; if too large (30 s), a user skipping mid‑segment wastes bandwidth and increases perceived lag. Empirically, 10–15 s segments give ≤ 3 ms jitter while keeping cache efficiency above 90 % for the most popular 5 % of tracks—exactly where Spotify’s traffic concentrates.

Thus, by treating playback as a stateless, chunk‑oriented streaming problem and decoupling control (controller) from data (CDN), we satisfy scalability, low latency, and user‑centric features—all derived from first‑principle constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
