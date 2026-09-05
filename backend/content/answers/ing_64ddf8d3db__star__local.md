---
qid: ing_64ddf8d3db__star__local
question: 'Explain: Clustering columns — Partition Key vs Composite Key vs Clustering
  Columns in Cassandra \u2013 BMC Software | Blogs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 320
total_tokens: 572
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:49:21-05:00'
sources: []
---

**Situation**  
At my previous role I had to redesign a user‑activity feed table in Cassandra that was spiking at 1 M writes per hour and the query latency for “latest activity by user” was >300 ms.

**Task**  
I needed to lower read latency below 50 ms while keeping write throughput high, so I had to rework the key design—deciding between a single partition key, composite key, or clustering columns—to best fit our access pattern.

**Action**  
I kept `user_id` as the partition key because every query started with that user. Then I added `activity_type` as a *composite* component of the partition key so activities of the same type were co‑located, reducing hot spots. Finally, I used `timestamp` as a *clustering column* (descending order) to store newest records first. This way, Cassandra could slice by user and activity type, then return rows in timestamp order without full table scans. I also tuned the compaction strategy to use TimeWindowCompaction for efficient pruning.

**Result**  
Read latency dropped from 320 ms to 35 ms (≈90 % improvement) while write throughput stayed unchanged at ~1.2 M ops/hr. I learned that choosing a composite partition key can balance hot‑spotting, and clustering columns provide natural ordering without extra queries.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
