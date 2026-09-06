---
qid: ing_5a35106abc__fp__local
question: 'Explain: Audio Files (The Big One) — Design Spotify | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 413
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:16:04-05:00'
sources: []
---

**Why the problem is hard**

We need a service that ingests millions of tracks (≈ 30 GB each), serves them to billions of users worldwide with sub‑second latency, and scales to tens of thousands of concurrent streams—all while keeping storage costs under control.  
The fundamental tension is between **latency vs. cost**: storing every bit on cheap flash forces us to stream from a single location (high bandwidth) or pre‑cache everywhere (expensive).  

**Core principle – *geometric locality + redundancy* in erasure coding**

1. **Chunk the file into fixed‑size blocks (e.g., 4 MiB).**  
2. **Encode each block with an erasure code (Reed–Solomon) to produce *k* data shards and *r* parity shards.**  
3. Store shards on distinct CDN edge nodes distributed globally.  

Because any *k* shards recover the original block, a request can pull its needed shards from the *nearest* nodes, achieving low latency without requiring every node to hold the full file. The erasure coding also limits storage overhead (≈ 10‑20 %) while providing fault tolerance.

**Delivery layer**

- **Edge cache**: first 5 s of each track stored locally; subsequent chunks fetched on demand from the nearest shard nodes.  
- **Prefetching heuristic**: if a user starts track *X*, prefetch its next *n* blocks in parallel, exploiting spatial locality.  

**Non‑obvious insight**

The *k/r ratio* should be tuned per popularity tier. Popular tracks can use a higher *k* (fewer parity shards) to reduce read latency; niche tracks can tolerate more parity, saving storage. This dynamic coding scheme is rarely mentioned but yields significant cost savings while preserving QoS.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
