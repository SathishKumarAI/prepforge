---
qid: ing_cc4242d1df__star__local
question: 'Explain: Wish lists revisited — Use vertical partitioning to scale data
  efficiently in Amazon DynamoDB | AWS Database Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 346
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:17:24-05:00'
sources: []
---

**Situation**  
When I joined a fintech startup, our real‑time loan‑appraisal service was hitting read bottlenecks on DynamoDB. The “wish list” table stored every customer’s saved products, but the item size kept growing: profile info, credit history, and wish‑list items all lived in one partition key (userID). Reads for just the wish list were starving due to the hot partitions.

**Task**  
I needed to redesign the schema so that read traffic for wish lists was isolated from heavy write traffic on user profiles, without breaking our existing API or compromising eventual consistency.

**Action**  
I applied vertical partitioning: I split the original table into two. The first table kept all profile data (userID + demographics), while the second stored only the wish‑list items with a composite key of `userID#timestamp`. I used DynamoDB’s Global Secondary Index on `itemCategory` to enable quick category filtering, and enabled point‑in‑time recovery for the profile table. I updated the Lambda functions to perform two separate queries and merge results in memory, adding caching via ElastiCache for hot categories.

**Result**  
Read latency for wish lists dropped from 350 ms to under 80 ms, while write throughput increased by 40% due to reduced contention. The change also cut our provisioned‑capacity cost by ~25%. I learned that thoughtful schema sharding in DynamoDB can turn a monolithic table into a high‑performance micro‑service with minimal code changes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
