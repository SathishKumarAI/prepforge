---
qid: ing_6d22912687__star__local
question: What is a partition key? — Choosing the Right DynamoDB Partition Key | AWS
  Database Blog
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 291
total_tokens: 535
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:05:31-05:00'
sources: []
---

**Situation:** At my previous company we built a real‑time analytics pipeline for a mobile game. The events table in DynamoDB had over 10 M writes per day, and our query patterns were heavily skewed toward user ID lookups and time‑range scans.

**Task:** I needed to choose a partition key that would keep the table horizontally scalable, avoid hot partitions, and still support fast queries for both individual users and global aggregates.

**Action:** I evaluated candidate keys: userID, eventType, date. After profiling traffic, I found that most writes were clustered around a few “daily” shards when using date alone. To balance load, I combined the date with a hash of the user ID—`partitionKey = hash(userId) + "#" + yyyyMMdd`. This spread writes across 256 buckets per day while still allowing efficient `GetItem` by exact key and `Query` on a user’s events for a specific day using a secondary index.

**Result:** The new key reduced write latency from ~120 ms to ~45 ms, eliminated the hot‑partition bottleneck, and maintained >99.9% read success rate. I learned that a well‑chosen partition key can turn an unscalable table into a high‑throughput, low‑latency service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
