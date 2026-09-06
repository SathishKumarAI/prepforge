---
qid: ing_f443a4e295__fp__local
question: 'Explain: of dynamo so yeah cool let''s move — AWS re:Invent 2018: Amazon
  DynamoDB Under the Hood: How We Built a Hyper-Scale Database (DAT321)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 198
output_tokens: 506
total_tokens: 704
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:38:19-05:00'
sources: []
---

### Why DynamoDB works

At its core, a **distributed key‑value store** must satisfy two seemingly opposing goals:

1. **Low latency & high throughput** – every read/write should be *O(1)* on the node that owns the key.
2. **Strong consistency across many replicas** – all clients see the same data, even under failure.

The design of DynamoDB forces a trade‑off between these goals by **sharding** and **replication** in a way that turns the “consistency vs. availability” dilemma into an *optimization problem* over *partition latency* and *repair bandwidth*.

### The underlying principles

| Principle | How it’s applied |
|-----------|-----------------|
| **Consistent hashing + virtual nodes** | Keys map to a ring; each physical node owns many small ranges, making re‑balancing cheap. |
| **Quorum reads/writes (RA/WA)** | Parameters `R` and `W` trade off latency vs. consistency. DynamoDB’s default (`R=2`, `W=3`) guarantees linearizability for single‑item ops. |
| **Gossip + Merkle trees** | Nodes periodically exchange state summaries; only the *differences* are sent, keeping repair traffic bounded. |
| **Compaction & LSM‑trees** | Write‑amplified logs are merged lazily, yielding high write throughput while keeping read amplification low. |

### One non‑obvious insight

Most people think “more replicas = better availability.”  
In DynamoDB the *real* benefit of replication is **locality of repair**: by keeping each replica’s state summarized in a small Merkle tree, an out‑of‑sync node can request only the missing blocks, often just a few megabytes. This keeps **repair bandwidth** independent of table size—a key enabler for 100 TB+ tables that still finish repairs within minutes.

### Bottom line

DynamoDB’s architecture is a *tight coupling* of hashing, quorum protocols, gossip‑based repair, and LSM‑style storage. Each component emerges from a concrete optimization: minimize read latency while bounding the cost of keeping replicas consistent. That is why the system scales to millions of requests per second with sub‑10 ms latencies across any region.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
