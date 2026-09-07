---
qid: ing_fb5e874064__faang__local
question: 'Explain: When to shard a collection across multiple shards'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 439
total_tokens: 672
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:24:45-05:00'
sources: []
---

**Clarify**  
We’re asked when a MongoDB (or similar sharded) collection should be split into several shards. I’ll assume: *high write/read volume*, *large dataset that won’t fit in one node’s RAM*, and *need for horizontal scalability*.  

**Approach**  
1. Measure the size of the data set and its growth rate.  
2. Benchmark read/write patterns (hot vs cold, range vs point queries).  
3. Identify a sharding key that evenly distributes documents across nodes while keeping related data together.  
4. Decide on the number of shards based on storage capacity, expected throughput, and fault‑tolerance needs.  

**Depth**  
- **Data size**: If the collection exceeds 10–20 % of the total RAM or disk per node, sharding is warranted to avoid swapping.  
- **Throughput**: A single shard can handle ~10k ops/sec; beyond that you’ll hit CPU/network bottlenecks.  
- **Query locality**: Range queries on a sharded key keep data co‑located, reducing cross‑node traffic.  
- **Write amplification**: With many concurrent writes, distributing them reduces lock contention and improves latency.  

**Edge Cases**  
- *Skewed keys*: If the chosen key clusters most docs in one shard, you’ll get hotspots; test with synthetic loads.  
- *Low cardinality* keys (e.g., a boolean) lead to uneven distribution—avoid or add a hash prefix.  
- *Read‑heavy vs write‑heavy*: For read‑only large tables, consider replication instead of sharding.  

**Optimize & Communicate**  
Explain that sharding is an architectural decision: it trades simplicity for scalability and fault isolation. I’d iterate on the key choice, monitor metrics (latency, network IO), and adjust shard count or add balancer policies accordingly. This shows structured thinking, clear assumptions, and a plan to validate before production rollout.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
