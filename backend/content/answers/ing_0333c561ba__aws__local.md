---
qid: ing_0333c561ba__aws__local
question: 'Explain: Example application — Pattern: API Gateway / Backends for Frontends'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 506
total_tokens: 741
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:31:27-05:00'
sources: []
---

**Situation / Task**  
I led the rollout of a real‑time fraud‑detection ML service for a payment gateway that processed ~200 k transactions per second. The goal was to expose the model through an API while keeping latency <10 ms and cost under $0.02/req.

**Action**  
*Architecture:*  
- **API Gateway (REST + WebSocket)** → throttles & authenticates, then forwards to **AWS Lambda@Edge** for edge‑caching.  
- Lambda invokes a **SageMaker Runtime endpoint** that hosts the XGBoost model; results are cached in **ElastiCache Redis** for 5 s.  
- For heavy traffic bursts we spin up an **EC2 Auto Scaling group** running a lightweight inference container (TensorRT) behind a **NLB**.  
- All requests and predictions are logged to **Kinesis Data Streams** → **Glue ETL** → **Redshift** for audit and retraining.

*Scalability & Availability:* I used Lambda concurrency limits, DynamoDB global tables for metadata, and cross‑region replication of the SageMaker endpoint (Multi‑Region). Cost was optimized by using Spot Instances for retraining jobs and reserved capacity for inference.  

*Bias for Action & Ownership:* I ran a 48 h A/B test with 10 % traffic to the new stack, reducing fraud loss from $12M/yr to $7.8M/yr—**a 35 % improvement**—while keeping latency stable.

**Result**  
- Latency <8 ms for 99.9 % of requests.  
- Cost per inference dropped 40 %.  
- Model accuracy improved by 2.3 % after continuous retraining from production data.  

I documented lessons: early cache warm‑ups prevent cold starts, and monitoring the SageMaker endpoint’s CPU/Memory is critical for SLA compliance.

**Leadership Principles Reflected**  
*Customer Obsession* – delivering a low‑latency fraud check that protects merchants.  
*Ownership* – full responsibility from design to post‑deployment ops and continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
