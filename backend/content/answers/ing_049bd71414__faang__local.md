---
qid: ing_049bd71414__faang__local
question: 'Explain: Sharding Key — A Crash Course on Database Sharding'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 485
total_tokens: 721
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:55:14-05:00'
sources: []
---

**Clarify**  
We’re asked to explain *sharding keys*—the column(s) that determine how a table is split across multiple database shards. I’d confirm: do we focus on relational or NoSQL? Are we discussing horizontal sharding only? For this answer I’ll assume a typical horizontally‑partitioned SQL system.

**Approach**  
1. Define sharding and its purpose.  
2. Explain what a sharding key is and why it matters.  
3. Walk through choosing a good key (distribution, cardinality, query patterns).  
4. Touch on implementation details (range vs hash sharding) and pitfalls.

**Depth**  

- **Sharding**: horizontally partitioning rows so each shard stores a subset of data, improving scalability and latency.  
- **Sharding Key**: the column(s) whose values are used to decide which shard a row belongs to. It must be *stable*, *high‑cardinality*, and *query‑friendly*.  
- **Choice Criteria**  
  - *Uniform distribution*: avoid hot shards (e.g., use user_id instead of region).  
  - *Low volatility*: keys that rarely change prevent costly re‑sharding.  
  - *Query locality*: queries often filter on the key, so keeping those rows together reduces cross‑shard joins.  
- **Algorithms**  
  - *Hash sharding*: `hash(key) % N` gives even spread but makes range queries expensive.  
  - *Range sharding*: split by value ranges (e.g., order_id blocks), good for sequential scans, but can cause uneven load if data skews.  

**Edge Cases**  
- Skewed keys → hotspot shards; mitigate with composite or secondary keys.  
- Key changes → need migration logic.  
- Multi‑tenant systems: tenant ID as key to isolate tenants.  

**Optimize & Communicate**  
Start by illustrating a simple hash example, then contrast with range sharding on an order table. Emphasize trade‑offs (write throughput vs query patterns). End with a quick checklist for selecting a sharding key and a note that monitoring shard health is critical—FAANG teams build dashboards to detect imbalance early.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
