---
qid: ing_eaeccfe3db__fp__local
question: 'Explain: Database Storage — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 498
total_tokens: 673
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:18:19-05:00'
sources: []
---

**Why the problem matters**

A photo‑sharing app must keep millions of images, user profiles, comments and likes while delivering sub‑second feeds. The *fundamental* constraint is that read throughput (feed rendering) vastly exceeds write throughput (photo uploads). Any storage design that treats all data uniformly will choke on hot “follow” edges.

**Core insight: locality ≠ symmetry**

The key to scaling is *data locality*: a user’s feed is essentially the union of the last N posts from a handful of followed users. If we can materialise that set once per user, subsequent reads are just look‑ups in a local cache. The non‑obvious point most designers miss is that **the graph of follows is far denser than the graph of photos**; storing a reverse index (who follows whom) and precomputing feed shards turns an O(F) read into O(1).

**Design sketch**

| Layer | Responsibility |
|-------|----------------|
| **User & Auth Service** | Relational DB for immutable profiles. |
| **Photo Store** | Object storage (S3‑like) + CDN; metadata in a key‑value store keyed by photo_id. |
| **Follow Graph** | Distributed hash table storing adjacency lists (`user → [followees]`). |
| **Feed Shard Service** | On photo upload, push the new post id into each follower’s *feed queue* (Kafka or Redis Streams). The queue is capped at 10 k items; eviction follows LRU. |
| **Read API** | Fetch a user’s feed by concatenating the latest K ids from the shard, then batch‑load photo metadata and thumbnails. |

**Optimization principle**

We trade *write amplification* (duplicating post IDs across followers) for *read latency*. The system is thus *eventually consistent*: a follower sees a new post within seconds of upload, which is acceptable for social feeds.

**Non‑obvious insight**

The bottleneck is not the storage medium but the *fan‑out* operation. By materialising feeds ahead of time and storing them in a write‑optimized queue (rather than recomputing on each read), we convert a *graph traversal problem* into a *stream processing problem*, enabling horizontal scaling with minimal coordination.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
