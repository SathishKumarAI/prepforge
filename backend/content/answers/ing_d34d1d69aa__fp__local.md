---
qid: ing_d34d1d69aa__fp__local
question: 'Explain: Playlist Database — Design Spotify | System Design Interview |
  AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 514
total_tokens: 689
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:30:22-05:00'
sources: []
---

**Why a “playlist database” is essential**

Spotify’s core value proposition is the *personalized listening journey*.  
A user’s playlist is a **dynamic, ordered list of songs** that can be created, updated, and shared at any time.  
To keep playback instant while allowing millions of concurrent edits, the underlying model must separate three concerns:

| Concern | What it solves | Design principle |
|---------|----------------|------------------|
| **Identity & ordering** | Each playlist has a unique ID and a stable order even after concurrent edits. | *Ordered set abstraction* (linked‑list + versioning). |
| **Content lookup** | Retrieve the next track quickly for playback or sharing. | *Sparse array + caching* (gap‑based index). |
| **Consistency & scalability** | Users across regions must see their own view instantly, while global consistency is eventually achieved. | *Eventual‑consistency with conflict‑free replicated data type (CRDT)*. |

**Core data model**

1. **Playlist table** – `playlist_id`, `owner_id`, `metadata` (title, description).  
2. **Track‐sequence table** – `seq_id`, `playlist_id`, `track_id`, `position`, `prev_seq_id`, `next_seq_id`.  
   *Positions are stored as floating‑point gaps; inserts create a new gap between neighbours.*  
3. **Event log** – every add/remove/ reorder operation is appended with a monotonically increasing `event_ts` and `vector_clock`.  

**Why this works**

- The *gap strategy* keeps insertions O(1) in the log while preserving order.  
- The CRDT‑based event log guarantees that concurrent edits converge without locking, which is vital for mobile clients offline‑first.  
- A read‑optimized cache (e.g., Redis Streams) serves the first few tracks of a playlist with sub‑millisecond latency; deeper positions are fetched lazily.

**Non‑obvious insight**

Most designs treat playlists as simple arrays and rely on full scans to re‑order.  
The key is **to materialize the ordering as an explicit graph** (`prev/next` pointers). This transforms a linear‑scan problem into a constant‑time update, enabling Spotify to support millions of concurrent edits while keeping playback latency negligible.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
