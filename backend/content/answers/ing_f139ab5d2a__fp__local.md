---
qid: ing_f139ab5d2a__fp__local
question: 'Explain: High-Level Architecture — How Uber Serves Over 40 Million Reads
  Per Second from Online Storage Using an Integrated Cache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 476
total_tokens: 660
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:32:13-05:00'
sources: []
---

**High‑level picture**

Uber’s traffic‑prediction service must deliver a single “score” per rider request in < 20 ms, yet the underlying data set (trip histories, vehicle telemetry, map tiles) is terabytes and growing.  
The solution: **an online store → integrated cache → read‑heavy façade**.

1. **Primary store** – A distributed key/value engine (e.g., Cassandra or a custom HBase‑style system) holds the *canonical* rows. It tolerates high write throughput, sharding by geographic region and time window, so that every update lands in exactly one node.

2. **Integrated cache layer** – Instead of a separate Redis cluster, Uber embeds an LRU/eviction policy inside each store node (the “hot‑row” buffer).  
   *Why this works*: the cache is colocated with the disk pages it warms; a read can hit either the in‑memory buffer or fall back to the SSD block without a network hop. The cost of keeping the two consistent is amortized over millions of reads.

3. **Request routing** – A lightweight HTTP/GRPC façade receives 40 M+ queries per second, shards them by hash(key) and forwards them to the responsible store node. Because every read first checks the local cache, the latency distribution collapses from a 1‑ms disk access to sub‑microsecond memory hits for ~95% of traffic.

**Deep principle**

This design is an instance of *data locality optimization*: keeping the most frequently accessed rows in fast memory reduces average retrieval time by the ratio of memory / disk latency. The integrated cache eliminates cross‑node communication, turning a distributed read problem into a local lookup problem.

**Non‑obvious insight**

The real performance gain comes from **tight coupling between storage and caching policy**, not from sheer cache size. By letting each node decide which rows to keep in memory based on recent access patterns (and evicting stale ones), Uber avoids the “cache‑miss amplification” that plagues separate layers—where a miss forces two network hops and an extra disk seek. Thus, 40 M reads/s are sustainable with modest hardware footprints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
