---
qid: ing_43ab083efe__fp__local
question: 'Explain: Highlights — How LedgerStore Supports Trillions of Indexes at
  Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 428
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:29:56-05:00'
sources: []
---

**Why an Uber‑scale index engine must be *ledger‑based* rather than a classic RDBMS**

The fundamental problem is **persistently mapping millions of events to billions of query dimensions while keeping latency < 10 ms and throughput > 1 M ops/s**.  
A traditional B‑tree or hash table would grow linearly with the number of keys, forcing expensive rebalancing and spilling to disk—untenable at Uber’s traffic scale.

**LedgerStore solves this by treating every index update as an immutable append to a distributed log (the “ledger”).**

1. **Write amplification is constant** – each event writes once to the ledger; no random updates.  
2. **Hot‑partitioning** – logs are split into micro‑shards based on key hash; hot shards receive their own replicas, keeping I/O balanced.  
3. **Incremental materialization** – a background worker scans the log and builds a *Bloom‑filter + LSM tree* per shard. Reads hit the compacted structure; writes never block reads.  
4. **Compaction & pruning** – stale entries are dropped in bulk, keeping storage linear to active data rather than total events.  

The non‑obvious insight: **the ledger acts as a *probabilistic accumulator***. By storing only the most recent value per key and using Bloom filters to test existence, LedgerStore turns a massive index problem into a sequence of bounded‑size lookup tables that scale sublinearly with cardinality. This guarantees both high throughput and low latency across trillions of indexes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
