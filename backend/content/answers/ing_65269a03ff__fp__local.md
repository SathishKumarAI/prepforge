---
qid: ing_65269a03ff__fp__local
question: 'Explain: Moving collections — MongoDB Sharding | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 413
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:39:57-05:00'
sources: []
---

**Why sharding is necessary**

A single MongoDB instance can only hold as much data and serve as many queries as its memory, CPU, and network allow. As a collection grows beyond the “single‑box” capacity, operations slow or fail entirely. The fundamental problem is *scalability*—you need to keep the same latency while serving more documents.

**The first‑principles solution**

1. **Partition the key space** – pick a *shard key* (e.g., `user_id`).  
2. **Distribute ranges** – split the key range into chunks and assign each chunk to a physical node (a shard).  
3. **Route transparently** – a mongos query router maps every read/write to the correct shard based on the key.

This is essentially *consistent hashing* with range‑based splits, ensuring that each document lives in exactly one place while any query can be answered by at most two shards (for range queries) or one (point lookups).

**Deep principle: locality + load balance**

The algorithm balances *data locality* (keeping related documents together) against *workload distribution*. By splitting ranges, you preserve the order of keys (important for range scans), and by re‑balancing chunks when a shard becomes hot, you maintain even load.

**Non‑obvious insight**

Most people think sharding is just “put data on many machines.” The subtlety lies in *when* to split. MongoDB uses a *dynamic chunk size* (default 64 MB) that grows with the collection’s growth rate. This amortizes the cost of splits and avoids fragmentation, ensuring that a cluster can scale horizontally without manual intervention.

In short, sharding solves the scalability problem by turning a single‑box limitation into an elastic, key‑range‑aware distributed system rooted in consistent hashing and dynamic load balancing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
