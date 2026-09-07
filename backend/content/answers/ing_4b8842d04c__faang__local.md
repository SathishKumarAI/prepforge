---
qid: ing_4b8842d04c__faang__local
question: 'Explain: The DynamoDB approach to scaling — How Amazon DynamoDB adaptive
  capacity accommodates uneven data access patterns (or, why what you know about DynamoDB
  might be outdated) | AWS Database Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 261
output_tokens: 447
total_tokens: 708
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:40:07-05:00'
sources: []
---

**Clarify**  
The interview asks how **DynamoDB’s Adaptive Capacity** handles *uneven* read/write traffic across items (hot partitions). I’ll assume we’re dealing with a single‑table design, default partition key hashing, and that the question targets capacity provisioning vs. on‑demand behavior.

**Approach**  
1. Review how DynamoDB splits data into 10 GB partitions.  
2. Explain the “adaptive” algorithm: it monitors per‑partition request rates, reallocates throughput within a table, and can spill over to new partitions if hot spots grow.  
3. Contrast with legacy “provisioned capacity” and “on‑demand” models.

**Depth**  
- *Provisioned*: you set read/write units; DynamoDB throttles when a partition exceeds its share.  
- *Adaptive Capacity* (since 2020) automatically redistributes the provisioned quota across partitions based on observed hotness, using a 5‑minute moving window of request counts.  
- It can shift up to 100 % of the table’s capacity from cold to hot partitions without manual intervention.  
- When hot spots exceed what adaptive can absorb, DynamoDB creates new partitions (auto‑sharding) until the hot data is spread out.  
- On‑demand mode bypasses this altogether by allocating on‑the‑fly units per request.

**Edge Cases**  
- Sudden traffic spikes that surpass the table’s total capacity still trigger throttling.  
- Extremely large items (>400 KB) consume multiple read/write units, potentially masking hotness at the partition level.  
- Tables with many small keys may never hit adaptive thresholds.

**Optimize & Communicate**  
I’d note that Adaptive Capacity reduces operational overhead and cost versus manual repartitioning, but it’s not a silver bullet—monitoring CloudWatch metrics remains essential. I would finish by summarizing: *Adaptive Capacity lets DynamoDB “learn” where the traffic is, reallocate throughput internally, and auto‑shard when needed, thereby gracefully handling uneven access patterns without manual tuning.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
