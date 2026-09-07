---
qid: ing_ac6ab001bb__faang__local
question: 'Explain: Routing algorithm — Vertical vs Horizontal Partitioning'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 398
total_tokens: 631
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:24:58-05:00'
sources: []
---

**Clarify**  
The interviewer asks how routing algorithms differ when data is split *vertically* (by columns/features) versus *horizontally* (by rows/examples). I’d confirm whether they refer to distributed ML training, inference serving, or data‑sharding in a model‑serving system.

**Approach**  
1. Define vertical vs horizontal partitioning.  
2. Explain the routing strategy for each: which node receives a request and why.  
3. Highlight trade‑offs (latency, load balance, consistency).  
4. Touch on hybrid patterns if time permits.

**Depth**  
- *Vertical Partitioning*: Features are split across nodes; a routing layer must route a prediction request to all feature nodes, aggregate partial predictions, then combine results. Useful when features have high dimensionality or require specialized preprocessing (e.g., image vs text). Latency grows with number of partitions; consistency is easy because each node owns disjoint columns.  
- *Horizontal Partitioning*: Rows/examples are sharded by key (user ID, timestamp). Routing uses a hash or range lookup to a single shard that holds all features for the requested example. Ideal for large‑scale recommendation systems where each user’s data fits in one shard; reduces cross‑node traffic but can lead to hotspot shards if access patterns skewed.  

**Edge Cases**  
- Skewed feature usage → vertical nodes become bottlenecks.  
- Hotspot keys → horizontal shards overload.  
- Schema evolution → vertical splits require coordinated migrations across all nodes.

**Optimize & Communicate**  
I’d suggest a hybrid approach: keep frequently co‑used features together horizontally, and rarely used or heavy‑compute features in separate vertical nodes. Use consistent hashing with virtual nodes to smooth load. Finally, I’d recap the key points and invite questions about specific use cases.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
