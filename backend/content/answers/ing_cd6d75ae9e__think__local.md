---
qid: ing_cd6d75ae9e__think__local
question: 'Explain: Range-Based Sharding — Sharding | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 435
total_tokens: 626
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T14:32:27-05:00'
sources: []
---

**1. Clarify the context & assumptions**  
- Assume the reader knows basic database sharding but not specific strategies.  
- Focus on *range‑based* (also called “range partitioning”) rather than hash or directory sharding.  
- State that we’re discussing horizontal sharding of a large table across multiple nodes.

**2. Adopt a mental model**  
Think of the dataset as a sorted list of keys (e.g., user IDs).  
Each shard owns a contiguous interval `[start, end]`.  
Queries with key ranges can be routed to one or more shards based on overlap.

**3. Step‑by‑step reasoning**  
1. *Define the key* that will drive sharding (primary key, timestamp, etc.).  
2. *Determine boundary values*—either static (predefined ranges) or dynamic (auto‑scale when a shard exceeds size).  
3. *Distribute data*: insertions go to the shard whose interval contains the key.  
4. *Query routing*: a point query hits one shard; a range query may hit multiple shards, requiring aggregation.  
5. *Rebalancing*: if a shard grows too large, split its interval and migrate rows.

**4. Common traps to avoid**  
- Ignoring skew: uneven key distribution leads to hotspot shards.  
- Over‑splitting without cost analysis—more shards mean more cross‑node joins.  
- Forgetting to keep the routing table (or service) up‑to‑date during splits/merges.

**5. Sanity‑check & verbalize**  
Summarize: “Range‑based sharding partitions a table into contiguous key intervals, simplifying inserts but potentially complicating range queries and requiring careful monitoring of load skew.”  
Check that the explanation covers definition, mechanics, benefits, drawbacks, and typical maintenance steps.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
