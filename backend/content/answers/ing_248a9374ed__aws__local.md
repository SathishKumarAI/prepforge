---
qid: ing_248a9374ed__aws__local
question: 'Explain: Now this becomes very tricky for Google — Google Maps System Design
  Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 674
total_tokens: 910
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:49:30-05:00'
sources: []
---

**Situation (S)**  
I was asked during an AWS hiring interview to design a real‑time traffic prediction system for a large mapping service—essentially the “Google Maps” problem but on AWS. The goal was to forecast congestion 15 minutes ahead with >95 % accuracy while handling millions of location updates per second.

**Task (T)**  
Build an end‑to‑end pipeline that ingests raw vehicle telemetry, trains a scalable ML model, and serves low‑latency predictions for mobile clients, all within a single AWS account.

**Action (A)**  

1. **Data ingestion & storage** –  
   *Use Amazon Kinesis Data Streams* to buffer GPS packets at ~2 Mpps.  
   *Persist raw streams in Amazon S3* (partitioned by day) and also stream into an *Amazon DynamoDB Global Table* for near‑real‑time lookup of historical traffic patterns.

2. **Feature engineering & training** –  
   *AWS Glue* crawls the S3 lake, creates a feature table in **Amazon Athena**.  
   *Train models on Amazon SageMaker* (using GPU instances) nightly; we employ an XGBoost pipeline that outputs a 15‑min congestion score per road segment.  
   The model achieves **92 % precision/recall** on held‑out data.

3. **Model serving & inference** –  
   Deploy the trained model as a *SageMaker Endpoint* behind an *Application Load Balancer*.  
   For ultra‑low latency, cache predictions in **Amazon ElastiCache for Redis** (TTL = 30 s) and expose them via a REST API on *AWS Lambda* (API Gateway).  

4. **Observability & scaling** –  
   Use **CloudWatch** for metrics (request latency, error rates) and **X-Ray** for tracing. Auto‑scale Lambda by concurrency and SageMaker endpoint by traffic.

5. **Cost & availability** –  
   Spot instances for nightly training reduce compute cost by 35 %. Multi‑AZ deployments and DynamoDB read replicas guarantee <0.1 % downtime.

**Result (R)**  
After launch, the system handled 4 Mpps of telemetry with <20 ms average latency per prediction, reduced traffic‑related customer complaints by **28 %**, and cut operational costs by **22 %** compared to a monolithic on‑prem solution.  

---

### Leadership Principles Highlighted
- **Ownership** – I led the end‑to‑end design, from data ingestion to cost optimization.  
- **Dive Deep** – Chose specific AWS services (Kinesis, Glue, SageMaker) based on throughput and latency metrics; iterated on model choice after profiling inference times.

### What a Bar‑raiser Looks For
- Quantified impact (latency, accuracy, cost savings).  
- Demonstrated trade‑offs: spot vs. On‑Demand for training, caching vs. direct inference.  
- Learning from failure: initial design used RDS causing 200 ms spikes; switched to DynamoDB after profiling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
