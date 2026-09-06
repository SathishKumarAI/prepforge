---
qid: ing_f535be2e81__fp__local
question: 'Explain: Challenges — How Uber Serves Over 40 Million Reads Per Second
  from Online Storage Using an Integrated Cache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 442
total_tokens: 624
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:40:48-05:00'
sources: []
---

**Why the problem is hard**

A single key‑value store can only push a few thousand reads per second before I/O becomes the bottleneck. Uber’s routing, pricing and surge algorithms need *real‑time* access to millions of user records, each read triggering a network round‑trip that would saturate even a fast SSD cluster. The data are *write‑heavy* (ride updates, driver status) and *read‑intensive*, so the system must keep the most recent state fresh while serving a steady stream of queries.

**Why an integrated cache solves it**

Treating the cache as part of the storage engine turns the read path into a two‑stage lookup: first probe the in‑memory index, then fall back to disk only on miss. Because the index is kept in RAM and updated atomically with writes, every read can be answered in *O(1)* time for ~90 % of requests. The cache’s eviction policy (e.g., LRU‑based on recent access frequency) is tuned so that hot data stays resident while stale entries are purged before they become a disk hit.

**Deeper principle**

This architecture embodies the *caching theorem*: the overall latency is bounded by  
\[ L = p \cdot L_{\text{mem}} + (1-p)\cdot L_{\text{disk}}, \]  
where \(p\) is cache hit probability. Maximising \(p\) via an adaptive eviction policy directly reduces average latency and I/O load, a classic optimisation trade‑off between memory cost and performance.

**Non‑obvious insight**

Many engineers treat the cache as a separate layer; Uber instead *co‑manages* the metadata (keys, timestamps) with the storage. By keeping consistency guarantees at the same granularity as writes, they avoid costly cross‑node invalidations that would otherwise negate the latency gains. This tight coupling is what lets them sustain >40 M reads/sec while keeping data fresh across thousands of nodes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
