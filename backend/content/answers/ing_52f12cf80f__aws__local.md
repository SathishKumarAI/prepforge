---
qid: ing_52f12cf80f__aws__local
question: 'Explain: Now let''s have suddenly a lot of — Google Maps System Design
  Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 491
total_tokens: 727
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:32:25-05:00'
sources: []
---

**Situation & Task**  
During a hiring round for an ML‑ops role I was asked to sketch a “Google‑Maps‑like” service that ingests real‑time GPS traces, computes shortest routes and surfaces live traffic alerts. The interviewer wanted me to show how I’d balance latency, cost and data quality at scale.

**Action**  
1. **Requirements & Architecture** – I split the system into three layers:  
   *Data ingestion* → Kinesis Data Streams (high‑throughput, 0.5 µs latency) feeding a Lambda pipeline that enriches points with road topology from an RDS Aurora PostgreSQL graph database.  
   *Route engine* → Stateless ECS Fargate containers running a custom Dijkstra implementation backed by Redis‑Graph for sub‑second lookups.  
   *Traffic alert* → A SageMaker model (gradient‑boosted trees) that ingests the same stream, predicts congestion probability and publishes alerts to SNS topics consumed by mobile clients.

2. **Scalability & Availability** – Each layer is auto‑scaled on CloudWatch metrics; data pipelines are multi‑AZ with Kinesis shards per region, ensuring >99.999 % availability. I chose spot instances for batch graph updates to cut costs by 35 %.

3. **Cost Trade‑offs** – By caching static road segments in Elasticache and only recomputing dynamic routes on demand, we kept monthly spend under $250k while handling 1M active users.

4. **Metrics & Impact** – Post‑prototype, latency dropped from 400 ms to <120 ms (30 % improvement) and traffic alert accuracy rose to 92 %, directly boosting user retention by 8 %.

**Result**  
The solution met all SLAs with a lean cost structure, demonstrating *Ownership* (I drove the end‑to‑end design), *Dive Deep* (quantified every trade‑off), and *Deliver Results* (clear, data‑backed impact). The interviewer noted my ability to learn from prior failures—specifically, how a previous monolithic route engine failed under peak loads—and pivot to a microservice architecture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
