---
qid: vq_3c58aa5c5b__faang__local
question: What is bucketing ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 435
total_tokens: 663
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:06:32-05:00'
sources: []
---

**Clarify**  
Bucketing is a data‑partitioning technique used in distributed storage (e.g., Hive, Spark) to group rows into “buckets” based on the hash of one or more columns. It’s distinct from sharding/partitioning because all buckets are stored together and each bucket contains roughly equal row counts.

**Approach**  
1. **Choose key(s)**: pick a column (or composite) that will determine bucket assignment.  
2. **Hash & mod**: compute hash(key) % N → bucket number (N = desired number of buckets).  
3. **Store**: each bucket becomes a separate file or directory; the metadata records bucket boundaries.

**Depth**  
- *Benefits*:  
  - **Efficient joins** – when two tables are bucketed on the same key with identical N, Spark/Hive can perform map‑side joins without shuffle.  
  - **Skew reduction** – uniform hash distribution balances load across executors.  
  - **Data locality** – queries filtering on bucket columns hit fewer files.  

- *Trade‑offs*:  
  - Requires upfront planning; changing bucket count needs a full rewrite.  
  - Not as fine‑grained as partitioning for range predicates (e.g., dates).  

**Edge Cases**  
- Highly skewed keys → uneven bucket sizes; may need custom hash or salting.  
- Adding new columns to the key invalidates existing buckets.  
- If N is not a power of two, some executors may be idle.

**Optimize & Communicate**  
Explain that bucketing shines when you have heavy join workloads on a stable key and you can afford an initial rewrite cost. For ad‑hoc analytics or range queries, prefer partitioning. Highlight the impact on shuffle reduction (O(1) vs O(N)) and how it translates to lower I/O and faster query times. This narrative demonstrates structured thinking, depth, and clear communication—key signals for FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
