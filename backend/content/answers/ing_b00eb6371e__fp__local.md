---
qid: ing_b00eb6371e__fp__local
question: 'Explain: 5.8 Get Comments for a Post — Design Instagram | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 441
total_tokens: 623
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:18:53-05:00'
sources: []
---

**Why “Get Comments” is the hardest read‑path**

A user opens a post and instantly expects all comments to appear.  
That means **low latency** (≤ 200 ms) on a *hot* key (the post ID), while at the same time serving millions of users who may request it every few seconds. The system must therefore:

1. Keep the comment set fresh (writes are frequent).  
2. Scale to billions of reads with minimal contention.  
3. Preserve ordering (usually by timestamp or a “most‑engaged” score).  

**Fundamental design principle – *read‑amplification vs. write‑throughput***  

We model each comment as an immutable record in a **partitioned log** (e.g., Kafka or a sharded NoSQL table).  
*Write path*: append to the log → O(1) and linearizable.  
*Read path*: fetch the tail segment for the post ID, then filter by user‑visibility rules.  

Because reads are *much more frequent* than writes, we replicate each partition across **k** nodes (gossip + read‑repair). The read latency is dominated by a single node’s cache hit; if miss, we pull from a replica.

**Non‑obvious insight: leverage “eventual comment ordering” for caching**  
Instead of re‑reading the entire log on every request, we cache **snapshots** of the last *N* comments per post. Each new comment triggers an asynchronous “snapshot update” that invalidates only the affected key in the cache. This keeps read traffic constant regardless of comment churn, while still delivering fresh data within a bounded staleness window.

**Bottom line:**  
Treat comments as append‑only events, replicate logs for fault tolerance, and use cached snapshots to decouple read latency from write frequency—exactly what Instagram’s production stack does under the hood.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
