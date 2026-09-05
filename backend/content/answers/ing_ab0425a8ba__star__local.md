---
qid: ing_ab0425a8ba__star__local
question: Why do I need a partition key? — Choosing the Right DynamoDB Partition Key
  | AWS Database Blog
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 324
total_tokens: 570
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:15:01-05:00'
sources: []
---

**Situation**  
At my last role, we built a recommendation engine that stored user‑session logs in DynamoDB. The table initially had a single composite key of `UserId` and `Timestamp`, but by the third month our read throughput spiked to 5 000 RCU per second during peak hours.

**Task**  
I was tasked with redesigning the schema so the table could handle the load without throttling, while keeping query latency under 50 ms for the most common lookup: “get the last ten sessions for a user”.

**Action**  
I introduced a hash partition key `UserHash` derived from `UserId` using SHA‑256 and a sort key `Timestamp`. This spread writes across many partitions (≈200) instead of concentrating them on a single partition. I also added a Global Secondary Index with `SessionType` as the partition key to support popular analytics queries. During refactor, I monitored hot‑partition metrics in CloudWatch, adjusted the hash function until the average RCU per partition dropped below 300, and updated all client SDKs to use the new key schema.

**Result**  
Post‑migration read throughput increased from 5 000 to 25 000 RCU with no throttles, and query latency fell to an average of 18 ms. I learned that a well‑chosen partition key is critical for horizontal scaling and predictable performance in DynamoDB.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
