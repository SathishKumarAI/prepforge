---
qid: ing_a5922b6ba2__aws__local
question: 'Explain: Capacity Estimation and Constraints — Mapserviceyelpgooglemap'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 399
total_tokens: 633
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:41:22-05:00'
sources: []
---

**Situation & Task**  
I was asked to design a real‑time capacity estimator for a map‑service that powers Yelp and Google‑style location queries. The goal: guarantee 99.9 % latency SLA while keeping cost < $200k/month.

**Action (Design)**  
* **Data pipeline** – ingest clickstream via Kinesis Data Streams → Lambda → DynamoDB “QueryMetrics” table.  
* **Predictive model** – a time‑series ARIMA + feature‑engineered queue length predictor, packaged in SageMaker Endpoint (scalable with auto‑scale).  
* **Capacity planner** – a microservice on ECS Fargate that queries the endpoint, aggregates predictions per region, and feeds an Auto Scaling policy to an Application Load Balancer for our map tiles.  
* **Constraints** – set hard CPU/memory caps in task definition; use Spot Instances + Savings Plans to cap spend.

**Result**  
Within 3 months we reduced average latency from 250 ms to 140 ms (44 % improvement) and achieved 99.92 % SLA compliance while cutting infrastructure cost by 18 %. The estimator’s error margin stayed below ±5 %, verified against real‑world traffic spikes.

**Learning & Ownership**  
I owned the end‑to‑end flow, iterated on model features after a week‑long spike that revealed cold‑start issues. By diving deep into CloudWatch logs we identified a 0.3 % misconfiguration in DynamoDB read capacity; fixing it saved $12k/month.

> **Leadership Principles:** *Customer Obsession* (fast, reliable maps), *Ownership* (full ownership of pipeline), *Dive Deep* (root‑cause analysis), *Bias for Action* (quick model iteration).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
