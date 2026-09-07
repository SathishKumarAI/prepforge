---
qid: ing_9c100b934b__faang__local
question: 'Explain: MongoDB sharded database architecture — MongoDB Sharding | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 482
total_tokens: 721
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:46:44-05:00'
sources: []
---

**Clarify**  
You’re asking how a sharded MongoDB cluster distributes data and handles queries. I’ll assume we need an overview of the main components (config servers, shards, mongos), their responsibilities, and how routing works.

**Approach**  
1. List the three core entities.  
2. Explain key concepts: shard key, chunking, balancer.  
3. Show query flow from client → mongos → shard(s).  
4. Touch on fail‑over & consistency guarantees.

**Depth**  
- **Config servers** store cluster metadata (chunk ranges, shard locations) in a replicated set; they’re read‑only for clients but critical for routing.  
- **Shards** are independent replica sets; each holds a subset of data defined by the shard key’s hashed or ranged values.  
- **mongos** is a query router: it reads config metadata to map a document’s `_id`/shardKey to the correct shard(s), then forwards the operation.  
  - For single‑document ops, mongos contacts one shard.  
  - For range queries, it may forward to multiple shards (parallel).  
- **Chunking**: data is split into ~64 MB chunks; when a chunk grows beyond a threshold, it splits and may migrate via the **balancer** process to even out load across shards.  
- **Consistency**: reads can be `local`, `majority`, or `linearizable` depending on read concern; writes go through mongos and are routed to the appropriate shard’s primary.

**Edge Cases**  
- Improper shard key choice → hotspot, uneven chunks.  
- Config server failure cuts routing (needs majority).  
- Balancer stalls if network latency spikes.

**Optimize & Communicate**  
Explain trade‑offs: more shards = better parallelism but higher coordination overhead; a well‑chosen hashed shard key gives uniform distribution; monitor chunk counts and balancer logs to preempt hotspots. Conclude with best practices: choose a monotonic, high‑cardinality key, keep config servers in separate AZs, enable automatic balancing, and use `shardCollection` only once the data volume justifies sharding.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
