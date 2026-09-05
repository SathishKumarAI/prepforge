---
qid: ing_604c611c64__star__local
question: 'Explain: Antipatterns for partition keys — Choosing the Right DynamoDB
  Partition Key | AWS Database Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 353
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:40:50-05:00'
sources: []
---

**Situation:** In a recent e‑commerce project, our team migrated the user activity log from a relational DB to DynamoDB to support real‑time analytics. The original design used `user_id` as the partition key, expecting even distribution.

**Task:** I was tasked with re‑engineering the schema so that read/write throughput stayed within provisioned limits and latency dropped below 5 ms under peak load (≈20k R/W per second).

**Action:** First, I ran a distribution audit with `dynamodb-describe-table` and found hot partitions: the most active users were writing millions of events in a single day. To avoid this antipattern, I introduced a composite key: `<user_id>#<hour>` as the partition key and kept `event_timestamp` as the sort key. This added 1‑byte hash prefix (`h`) that spread writes across 24 partitions per user. I also implemented a secondary GSI on `product_category` for ad‑hoc queries, using a sparse index to keep cardinality low. Finally, I updated the ingestion pipeline to batch write with `BatchWriteItem`, ensuring we hit the 16 MB limit and reduced request overhead.

**Result:** The throughput spread evenly across partitions; provisioned capacity utilization dropped from 95% to 60%. Latency improved to an average of 3.2 ms, and our SLA for real‑time dashboards was met consistently. I learned that choosing a composite key with a time‑based shard mitigates hot‑partition antipatterns while keeping the design simple enough for developers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
