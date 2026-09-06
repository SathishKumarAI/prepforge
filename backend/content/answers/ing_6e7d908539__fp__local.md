---
qid: ing_6e7d908539__fp__local
question: 'Explain: Indexing New Content — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 398
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:59:38-05:00'
sources: []
---

### Why “index” matters  
When a user uploads a photo, the system must **make it discoverable** instantly—both in that user’s feed and for anyone who follows them. The core problem is *low‑latency retrieval of a massive, continuously growing dataset* while respecting relevance (time, popularity, relationships).  

### From first principles  
1. **Data partitioning by key** – each post gets a unique ID; we shard the write store on that ID to spread load.  
2. **Secondary indexes for queries** – feeds are “latest‑by‑user” or “top‑by‑tag”. We build inverted lists (post IDs → user IDs / tags) as append‑only streams, guaranteeing O(1) append and cheap compaction.  
3. **Materialized feed trees** – instead of recomputing a user’s feed on read, we pre‑push posts into *fan‑out queues* for each follower. This trades write cost (O(#followers)) against read speed (constant).  

### Underlying principle  
The design is an application of **online incremental computation**: keep the state updated as new data arrives, so queries become simple lookups. It also leverages *distributed hash tables* for partitioning and *log‑structured merge trees* for write‑amplification control.

### Non‑obvious insight  
Most architectures ignore that *write amplification* is not only a storage issue—it directly inflates read latency via stale indexes. By making the append streams **immutable** (append‑only logs) and letting compaction run asynchronously, we decouple write bursts from read consistency. Thus, Instagram can handle millions of uploads per second while still delivering sub‑second feed responses.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
