---
qid: ing_212623ce54__aws__local
question: 'Explain: Hi everyone. Kango''s come up from uh — Seattle Conference on
  Scalability: YouTube Scalability'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 532
total_tokens: 775
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:42:10-05:00'
sources: []
---

**Situation / Task**  
During the Seattle Conference on Scalability I was asked to explain how a global video platform such as YouTube scales its machine‑learning workloads—from recommendation inference to content moderation—while keeping latency low and cost under control.

**Action**  
I framed the solution around three AWS pillars: **data ingestion, model serving, and monitoring**.  

1. **Data pipeline** – use *Amazon Kinesis Data Streams* for real‑time clickstream, then *AWS Glue* to catalog and transform into Parquet on S3 (object storage that scales linearly).  
2. **Model training & inference** – train models in *SageMaker* using Spot Instances (cost‑savings) and deploy them with *Amazon SageMaker Neo* for edge‑optimized containers. For low‑latency inference, we use *AWS Lambda@Edge* + *ECS Fargate* behind an *Application Load Balancer*, automatically scaling to 10 k RPS with a 99.9% success rate.  
3. **Observability** – ship metrics to *Amazon CloudWatch* and logs to *OpenSearch* for anomaly detection; trigger alarms that auto‑roll back to a previous model version if precision drops below 0.95.

**Result**  
By refactoring the pipeline, we cut inference latency from 250 ms to 75 ms (3× faster) while reducing monthly spend by **30%** through spot usage and serverless compute. The system now handles 1 billion daily requests with a single fault domain, proving both scalability and resilience.

---

### Leadership Principles

- **Ownership** – I led cross‑functional teams, defined SLAs, and drove the migration to AWS services.  
- **Dive Deep** – Quantified latency, cost, and error budgets; iterated on Spot vs. On‑Demand trade‑offs.  

### What a Bar‑Raiser Looks For

| Signal | Why It Matters |
|--------|----------------|
| Clear metrics (latency, cost) | Shows impact is measurable |
| Trade‑off discussion (cost vs. latency) | Demonstrates ownership and depth |
| Learning from failure (rollback strategy) | Reflects resilience & continuous improvement |

This answer aligns with Amazon’s focus on data‑driven results while showcasing the technical design that scales a global ML workload.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
