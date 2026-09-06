---
qid: ing_9c100b934b__fp__local
question: 'Explain: MongoDB sharded database architecture — MongoDB Sharding | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 426
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:37:06-05:00'
sources: []
---

## Why MongoDB shards?

A single‑node MongoDB can’t keep up when a collection grows past the RAM of one machine or when latency must stay below a few milliseconds for millions of concurrent clients.  
The *fundamental problem* is **scalable throughput without sacrificing consistency**: each write should be atomic, reads should see a coherent snapshot, and the system should tolerate node failures.

## The sharding solution

1. **Shard** – a full replica set that owns a subset of the key space.  
2. **Config servers** – store metadata (chunk ranges → shard mapping) in a replicated set; they answer all routing queries.  
3. **Mongos routers** – stateless query proxies that read config data, route operations to the correct shard(s), and merge results.

### Chunking

The collection is split into *chunks* of roughly equal size (default 64 MB). Each chunk has a range of the sharding key. When a chunk grows beyond a threshold it splits; when many small chunks accumulate they coalesce. This keeps the **load balanced**: every shard receives about the same amount of traffic.

### Query routing

A mongos first looks up the key’s chunk in config servers, then forwards the operation to the owning shard. For range queries spanning multiple chunks, mongos issues parallel requests and merges results locally, preserving transaction semantics via two‑phase commits across shards when needed.

## Non‑obvious insight

Because sharding is *key‑based*, all writes that touch the same key (e.g., a user’s documents) hit the same shard. This guarantees **local consistency** without cross‑shard coordination, which is why MongoDB can still offer strong atomicity on single‑document operations even at petabyte scale. The system’s design turns a global scaling problem into many local, independent problems—an elegant application of divide‑and‑conquer to distributed databases.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
