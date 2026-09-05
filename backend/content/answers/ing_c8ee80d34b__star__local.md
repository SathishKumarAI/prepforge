---
qid: ing_c8ee80d34b__star__local
question: 'Explain: Sharding using random suffixes — Using write sharding to distribute
  workloads evenly in your DynamoDB table - Amazon DynamoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 316
total_tokens: 568
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:11:17-05:00'
sources: []
---

**Situation**  
In my last role I was tasked with migrating our order‑processing system into a single DynamoDB table. The traffic spike during holiday sales meant we were hitting the 300 write‑capacity units limit on one partition key and getting throttled.

**Task**  
I had to design a sharding scheme that would spread writes across many partitions while keeping read patterns efficient for order lookups by customer ID.

**Action**  
I introduced a random suffix (1–1000) appended to the original `OrderID` during writes. The partition key became `${CustomerID}#${RandomSuffix}` and the sort key stayed `${Timestamp}`. On reads, I first queried all shards for that customer using a parallel scan with 100 parallel requests, then merged results client‑side. To keep the suffix distribution uniform, I used a cryptographic hash of the order timestamp to seed the random number generator, ensuring even spread over time. I also set each shard’s provisioned throughput to 3 WCU, giving us 3000 WCUs total with minimal hot‑partition risk.

**Result**  
Write latency dropped from 150 ms (throttled) to <10 ms average, and we handled a peak of 12,000 writes per second during the sale without any throttling. I learned that simple random sharding can dramatically improve throughput when combined with careful read‑side orchestration and monitoring for skew.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
