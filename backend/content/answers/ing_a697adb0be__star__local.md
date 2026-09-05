---
qid: ing_a697adb0be__star__local
question: 'Explain: How adaptive capacity works — How Amazon DynamoDB adaptive capacity
  accommodates uneven data access patterns (or, why what you know about DynamoDB might
  be outdated) | AWS Database Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 262
output_tokens: 350
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:06:22-05:00'
sources: []
---

**Situation**  
In a recent e‑commerce launch I was tasked with scaling the order history table in DynamoDB that suddenly saw a spike from 10 k read/write requests per second to over 200 k during flash sales. The access pattern was highly skewed—hundreds of items were hot, while most remained cold.

**Task**  
I had to keep latency under 5 ms for the hot keys without overspending on provisioned throughput or falling into throttling traps, all while maintaining a predictable cost baseline.

**Action**  
I enabled Adaptive Capacity on the table and configured auto‑scaling with a target utilization of 70 %. I also added a secondary index for user‑by‑date queries. By monitoring CloudWatch metrics I observed how DynamoDB shifted capacity from underutilized partitions to the hot ones in real time, using the “Adaptive” algorithm that internally redistributes write capacity units across partitions without manual intervention. I tuned the scaling policies—setting lower and upper thresholds—to avoid oscillation during brief traffic bursts.

**Result**  
Latency stayed below 4 ms for 99.9 % of requests, while cost increased by only ~12 % compared to a flat provisioned model that would have required provisioning 250 k WCU upfront. The experience taught me that DynamoDB’s adaptive capacity is a powerful tool when data access patterns are unpredictable—letting the service handle uneven loads automatically and freeing engineers to focus on application logic rather than manual partition tuning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
