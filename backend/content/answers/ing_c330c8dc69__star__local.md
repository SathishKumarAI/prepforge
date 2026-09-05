---
qid: ing_c330c8dc69__star__local
question: 'Explain: About the Authors — How Amazon DynamoDB adaptive capacity accommodates
  uneven data access patterns (or, why what you know about DynamoDB might be outdated)
  | AWS Database Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 261
output_tokens: 323
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:00:13-05:00'
sources: []
---

**Situation:**  
In a mobile gaming startup, we launched a new feature that let players collect daily rewards. The reward table in DynamoDB suddenly saw spikes—about 70% of requests hit a handful of “hot” keys during peak hours while the rest stayed idle.

**Task:**  
I needed to keep latency under 50 ms for all users without overspending on provisioned throughput, and also prevent throttling on those hot partitions.

**Action:**  
Instead of manually increasing read/write capacity units (RCUs/WCUs), I enabled **Adaptive Capacity** on the table. I monitored CloudWatch metrics (ConsumedReadCapacityUnits vs. ThrottledRequests) and used DynamoDB’s “Auto Scaling” policies to set a target utilization of 60 %. When traffic surged, Adaptive Capacity automatically shifted read load across adjacent partitions, while the auto‑scaler provisioned additional RCUs in real time. I also added a global secondary index for the reward timestamp so that queries could spread over more partitions.

**Result:**  
The table handled peak loads with <40 ms latency for 95 % of requests and eliminated throttling entirely. We reduced costs by ~30 % compared to a manually over‑provisioned setup, and learned that relying on manual capacity tuning in DynamoDB can quickly become outdated as workloads evolve.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
