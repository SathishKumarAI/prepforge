---
qid: ing_172e9344d7__fp__local
question: 'Explain: Sharding — System Design: How to Scale a Database'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 359
total_tokens: 532
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:55:08-05:00'
sources: []
---

**Sharding – the “divide‑and‑conquer” of databases**

At its core, sharding solves a *capacity* versus *latency* trade‑off: a single machine can’t hold all data and process all queries fast enough, yet naïvely splitting data hurts consistency. The fundamental problem is that relational or document stores expose a *global key space*. When the key space grows, so does the cost of scanning, locking, and network hops.

**Why partition on keys?**  
A key‑based shard map turns every lookup into an O(1) routing decision: hash(key) → node. This eliminates global coordination; each node only needs to know its own bounds. The design hinges on *independence*: operations that touch disjoint shards never contend, so throughput scales linearly with added nodes.

**Deep principle – locality of reference in distributed systems**  
Sharding exploits the fact that most workloads exhibit *data locality* (users read their own records). By keeping hot data together you reduce cross‑node traffic. The non‑obvious insight: **shard boundaries should be chosen to align with natural access patterns, not just evenly sized ranges**. A “hash” shard may spread a user’s history across many nodes, forcing expensive joins; a range or consistent‑hash shard that groups by user ID preserves locality and yields lower latency.

In short, sharding is a practical application of *divide‑conquer* + *locality* + *stateless routing*, turning an intractable monolith into a horizontally scalable, low‑latency service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
