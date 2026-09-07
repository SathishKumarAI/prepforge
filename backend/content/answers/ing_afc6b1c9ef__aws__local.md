---
qid: ing_afc6b1c9ef__aws__local
question: 'Explain: :star: Driver Match algo — Driverallocationubergojek'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 460
total_tokens: 694
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:02:58-05:00'
sources: []
---

**Situation & Task**  
At Uber I led the “Driver Match” team that matched riders to nearby drivers in real time. The system had to process ~200 k ride requests per second during peak hours while keeping wait times under 30 s for 95 % of users.

**Action – Technical Design**  
I designed a stateless micro‑service in **Python/Node.js** behind an **ALB** that ingested events from **Kafka**. For each request we queried a **DynamoDB Global Table** (lat/lon + driver status) and ran a **scoring function** on **AWS Lambda** to rank drivers by distance, ETA, and driver rating. The top 10 candidates were sent to a **SQS FIFO** queue for final assignment.  
To scale, we used **Amazon Kinesis Data Streams** to shard requests (4 shards → 50k rps) and auto‑scaled Lambdas via **Provisioned Concurrency**. We maintained high availability with multi‑AZ deployments and leveraged **AWS Fargate** for the matching container when request bursts exceeded Lambda limits.

**Result**  
Within three months we reduced average rider wait time from 45 s to **27 s** (−40 %) and increased match success rate from 88 % to **95 %**, directly boosting trip volume by 12 M rides/year. Cost was trimmed by 18 % through efficient Lambda usage and spot‑instance auto‑scaling.

**Reflection & Bar‑raiser Lens**  
I owned the end‑to‑end pipeline, diving deep into latency bottlenecks via CloudWatch traces and A/B testing different scoring heuristics. The failure point in our first prototype was a single‑point DynamoDB read; learning from that, I introduced caching with **ElastiCache Redis** to decouple reads. This showcases ownership, data‑driven impact, and the ability to iterate quickly—core Amazon Leadership Principles: *Customer Obsession*, *Ownership*, and *Bias for Action*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
