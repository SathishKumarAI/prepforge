---
qid: ing_63ba41c6b0__star__local
question: 'Explain: Playlist Service — Design Spotify | System Design Interview |
  AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 350
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:47:15-05:00'
sources: []
---

**Situation** – At my previous company we had a feature where users could create collaborative playlists that were shared across devices. The existing backend was monolithic and couldn’t handle the spike in concurrent edits when a new “party mode” launch went live; latency jumped from 30 ms to over 1 s, and users reported lost updates.

**Task** – I was tasked with redesigning the playlist service so it could support thousands of simultaneous edits per second, guarantee eventual consistency across shards, and keep read latency under 50 ms for both personal and collaborative playlists.

**Action** – I broke the system into three layers: a REST/GRPC API gateway, an event‑driven microservice that applied edits to a sharded PostgreSQL + Redis cache, and a Kafka stream that replayed changes for audit. Edits were idempotent and versioned with Lamport timestamps; optimistic concurrency was enforced at the database level using `SELECT … FOR UPDATE`. I added a read‑replica pool with an in‑memory cache per region to reduce cross‑region latency. For collaborative playlists, I implemented a CRDT (conflict‑free replicated data type) so concurrent inserts/updates merged deterministically.

**Result** – After deployment, write throughput increased from 200 ops/s to 15,000 ops/s, read latency dropped to 35 ms on average, and the error rate fell below 0.01%. I learned that coupling event sourcing with CRDTs can dramatically simplify consistency in highly concurrent collaborative systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
