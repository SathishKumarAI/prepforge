---
qid: ing_dd276469d2__fp__local
question: 'Explain: Groups — The Architecture Twitter Uses to Deal with 150M Active
  Users, 300K QPS, a 22 MB/S Firehose, and Send Tweets in Under 5\u00a0Seconds - High
  Scalability -'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 208
output_tokens: 381
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:49:39-05:00'
sources: []
---

**Why “groups” are the core of Twitter’s scalability**

At its heart, Twitter must satisfy two conflicting constraints:  
1) **Throughput** – 300 k queries per second (QPS) and a 22 MB/s fire‑hose of tweets;  
2) **Latency** – every user should see a new tweet in <5 s.  

Treat each request as a *job* that must be processed by some worker. If we naïvely let every worker pull from the same queue, contention explodes: the queue becomes a bottleneck and workers idle while waiting for I/O.  
Instead, partition the job space into **logical groups** (shards). Each group owns a disjoint subset of keys (user IDs, tweet IDs) and a dedicated queue. Workers are bound to one or more groups; thus each worker can fetch locally cached data, avoid cross‑node communication, and process jobs in parallel without lock contention.

Mathematically this is the classic *load‑balancing* problem on a graph: we minimize maximum load while respecting locality constraints. By assigning a hash of the key to a group, we achieve uniform distribution (law of large numbers). The groups act as **consistency shards** that preserve causal order within a user’s timeline—ensuring tweets arrive in the correct sequence without global coordination.

A non‑obvious insight: *groups are not just for scaling; they encode a causality graph*. Because each group owns all events for its keys, workers can merge streams locally and guarantee eventual consistency. This eliminates expensive distributed locking and allows Twitter to deliver tweets under 5 s even when the fire‑hose bursts beyond normal rates.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
