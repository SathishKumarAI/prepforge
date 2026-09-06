---
qid: ing_63ba41c6b0__fp__local
question: 'Explain: Playlist Service — Design Spotify | System Design Interview |
  AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 551
total_tokens: 726
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:37:10-05:00'
sources: []
---

**Problem & Goal**

A *playlist* is a user‑defined ordered list of tracks that can be edited on the fly and streamed in real time. The system must support  
1) **low‑latency reads** (≈ 20 ms per track for playback),  
2) **high write throughput** (users add/remove up to 10⁴ operations/second globally),  
3) **strong consistency** for a user’s own view, and  
4) **global scalability** across millions of concurrent users.

---

### From first principles

1. **Ordering as a primary key** – the position of a track is *the* identity that drives both read (next track) and write (insert/delete).  
2. **Partitioning by user** – keeps all operations for a single playlist isolated, enabling per‑user consistency without sharding conflicts.  
3. **Append‑only logs + skip list** – an immutable log of changes guarantees durability; the skip list over offsets lets us jump to any position in *O(log N)* time.  

### Architecture

| Layer | Function | Rationale |
|-------|----------|-----------|
| **Client SDK** | Enqueue local edits, stream playback | Keeps latency low by speculatively applying edits before server ack. |
| **API Gateway** | Throttle/route to shard | Protects backend from bursts; each user’s requests go to the same shard. |
| **Write Service** | Append to per‑user log + update skip list | Linear write cost, no locking. |
| **Read Cache (Redis)** | Store last N tracks of active playlists | Serves playback with < 5 ms latency. |
| **Background Reconciler** | Merge logs into a compact array stored in Cassandra | Periodic compaction keeps storage linear. |

### Non‑obvious insight

*The skip list, not the log itself, is the key to fast reads.*  
If we naïvely store every edit as an append-only entry, fetching the 10 th track would require scanning O(10) entries per read—acceptable for small playlists but disastrous at scale. By maintaining a *height‑based index* (skip list) alongside the log, we can skip over large blocks of unchanged positions in constant time, yielding sub‑20 ms reads even when a playlist has millions of tracks.

---

**Result:** A system that scales linearly with user count, guarantees per‑user consistency, and delivers instant playback while keeping storage overhead modest.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
