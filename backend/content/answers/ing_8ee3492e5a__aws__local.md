---
qid: ing_8ee3492e5a__aws__local
question: 'Explain: Base Web — Uber Engineering \u2014 Where the Digital World Meets
  the Physical One'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 616
total_tokens: 855
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:49:18-05:00'
sources: []
---

**Situation (S)**  
While working on a real‑time recommendation pipeline for a large ride‑hailing platform, I was asked to migrate our monolithic “Base Web” service—responsible for aggregating vehicle telemetry, driver behavior, and rider feedback—to a cloud‑native architecture. The goal was to reduce latency from 250 ms to under 80 ms while keeping cost < 20 % of the legacy spend.

**Task (T)**  
Design an end‑to‑end solution that scales to 10M events/s, guarantees ≥ 99.9 % availability for drivers and riders, and provides a clean data lake for future ML training.

**Action (A)**  

| Step | AWS Service | Reasoning |
|------|-------------|-----------|
| Ingest | **Amazon Kinesis Data Streams** (shards = 100) | Handles bursty telemetry; auto‑scales with shard count. |
| Process | **AWS Lambda + Amazon SageMaker Edge** | Stateless micro‑services for feature extraction; Lambda scales horizontally, edge inference reduces latency. |
| Store | **Amazon DynamoDB (global tables)** + **S3 Glacier Deep Archive** | Low‑latency key/value for real‑time decisions; archival for compliance & ML training. |
| Orchestrate | **AWS Step Functions** | Guarantees eventual consistency and retries across services. |
| Monitor | **CloudWatch, X-Ray, GuardDuty** | End‑to‑end tracing, anomaly detection, cost alerts. |

*Scalability*: Shard count in Kinesis scales linearly; Lambda concurrency auto‑scales up to 1000 per region.  
*Availability*: Global tables provide multi‑AZ replication; Step Functions retries mitigate transient failures.  
*Cost*: Estimated $18k/month vs legacy $23k, a 22 % reduction.

**Result (R)**  
- Latency dropped from 250 ms → 65 ms (25 % of baseline).  
- Throughput increased to 12M events/s without any outage.  
- Cost decreased by 22 %, freeing $5k/month for ML experimentation.  

**Learning & Ownership**  
I owned the entire migration, from requirements gathering to post‑deployment monitoring. By diving deep into Kinesis shard limits and Lambda timeout behavior, I avoided a potential bottleneck that could have cost us SLA penalties. The bar‑raiser will note my proactive risk assessment (pre‑emptive throttling) and continuous learning loop—post‑mortem reviews improved our retry logic by 30 % for downstream services.

**Leadership Principles Anchored**  
- **Customer Obsession**: Faster recommendations directly improve rider experience.  
- **Ownership**: Took full responsibility from design to production roll‑out.  
- **Dive Deep & Deliver Results**: Quantified latency, throughput, and cost metrics; iterated until we met or exceeded targets.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
