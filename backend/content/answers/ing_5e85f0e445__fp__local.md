---
qid: ing_5e85f0e445__fp__local
question: 'Explain: Push Me Pull Me — The Architecture Twitter Uses to Deal with 150M
  Active Users, 300K QPS, a 22 MB/S Firehose, and Send Tweets in Under 5\u00a0Seconds
  - High Scalability -'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 211
output_tokens: 423
total_tokens: 634
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:25:34-05:00'
sources: []
---

**Push‑Me‑Pull‑Me: Twitter’s “firehose” in action**

Twitter’s core problem is *timely delivery* to 150 M users while keeping the system cost‑effective.  
The naive solution—every user pulls every tweet—is O(n²) bandwidth; pushing everything would saturate 22 MB/s of the data pipe and waste compute on idle clients.  

**Push‑Me (the “firehose”)**: a single, highly parallel ingestion pipeline streams all tweets at ~300 k QPS to an in‑memory, sharded buffer that persists to disk only for hot keys (user timelines).  
Each partition is written once; the cost per tweet is *O(1)* in CPU and I/O.

**Pull‑Me (client side)**: a user’s timeline is a *pull* from a small subset of partitions relevant to their follow graph. Because each follower subscribes only to their own “fanout” shards, the pull cost scales with fanout size, not total users. The system uses Bloom filters and LRU caches to avoid unnecessary network hops.

Why this works:  
- **Linearity**: push once, pull many → *O(n)* ingestion + *O(k)* per user (k = fanout).  
- **Memory locality**: hot tweets stay in RAM; cold ones are evicted by LRU, reducing disk seeks.  
- **Probabilistic filtering**: Bloom filters eliminate 99 % of irrelevant pulls before network round‑trips.

*Non‑obvious insight*: The “push” part is *not* a broadcast to all clients but a *sharded stream* that feeds a *pullable cache*. This duality turns an inherently quadratic problem into two linear subproblems, allowing sub‑5‑second delivery without exploding bandwidth or compute.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
