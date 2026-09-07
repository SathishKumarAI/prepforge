---
qid: ing_a9342bec50__aws__local
question: 'Explain: 7.2 Availability — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 447
total_tokens: 685
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:49:14-05:00'
sources: []
---

**Situation & Task (S)**  
I was asked to design a highly‑available Instagram‑style photo feed service for 200 M active users with < 50 ms latency on average. The key challenge: serve millions of concurrent uploads and reads while keeping data consistent across regions.

**Approach (A)**  
1. **Data Layer** – Use Amazon DynamoDB Global Tables (multi‑region, active‑active) for user posts; enable *point‑in‑time recovery* to meet 7.2 Availability SLA.  
2. **Write Path** – API Gateway → Lambda (idempotent write), then put item in DynamoDB and publish a message to Amazon SNS topic that triggers another Lambda to push the post into an SQS queue for downstream processing.  
3. **Read Path** – Users request feed via API Gateway → Lambda reads from DynamoDB Streams, aggregates recent posts, caches result in Amazon ElastiCache (Redis) with TTL = 60 s. If cache miss, query DynamoDB directly.  
4. **Background Jobs** – Use AWS Batch on Fargate to generate thumbnails; results stored in S3 with versioning and automatic lifecycle transitions to Glacier for cost control.  

**Results (R)**  
- End‑to‑end latency dropped from 120 ms to 35 ms (average).  
- System sustained 1,000 writes/sec per region without degradation; read throughput > 50k RPS with < 2 % cache miss rate.  
- 99.9999 % uptime over a year of production use, meeting the 7.2 Availability requirement.

**Reflection (T)**  
I learned that *dive deep* into DynamoDB’s consistency options saved us from costly redesigns after an early outage. The bar‑raiser will note my ownership in choosing global tables, the quantified impact on latency and uptime, and my iterative learning from a real failure scenario.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
