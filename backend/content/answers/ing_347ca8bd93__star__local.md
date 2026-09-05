---
qid: ing_347ca8bd93__star__local
question: 'Explain: Data modeling decisions — Use vertical partitioning to scale data
  efficiently in Amazon DynamoDB | AWS Database Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 318
total_tokens: 566
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:13:20-05:00'
sources: []
---

**Situation:**  
In my last role I was tasked with revamping the user profile service for a mobile game that had grown from 1 M active users to over 10 M. The existing single‑table design hit hot‑spot throttling on the “Profile” partition key and our latency target of <50 ms was slipping.

**Task:**  
I needed to redesign the data model so that read/write throughput could scale horizontally without hitting DynamoDB’s partition limits, while keeping the API surface unchanged for downstream services.

**Action:**  
I applied vertical partitioning: I split the user profile into two tables—`ProfileCore` (userID, basic stats) and `ProfileDetails` (userID, inventory, settings). Both use the same primary key but different sort keys to isolate hot attributes. I introduced a Global Secondary Index on `ProfileCore` for “lastActive” queries and used DynamoDB Streams to keep `ProfileDetails` in sync via an async Lambda. This reduced per‑partition write load by ~70 % and eliminated contention on the primary key.

**Result:**  
After deployment, read latency dropped from 120 ms to 35 ms, and we achieved a 5× increase in throughput before hitting any throttling events. I learned that thoughtful partitioning can turn a single‑table bottleneck into a scalable micro‑service pattern without major API changes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
