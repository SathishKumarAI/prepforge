---
qid: ing_277b1c615b__aws__local
question: 'How Is It Used? — Event-Driven Architecture (EDA): A Complete Introduction'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 466
total_tokens: 702
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:55:11-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation:* In my last role I led a migration of our legacy batch‑processing pipeline to an event‑driven architecture (EDA) on AWS. The goal was to reduce data latency from 4 h to <30 s so the marketing team could personalize offers in real time.

*Task:* Design an ML‑enabled EDA that ingests clickstream events, scores them with a model, and triggers personalized actions—all while keeping costs under $5k/month.

*Action:*  
1. **Event ingestion** – Kinesis Data Streams for low‑latency event capture (99.9 % availability).  
2. **Processing & ML inference** – AWS Lambda (with provisioned concurrency) streams records to SageMaker Batch Transform for quick, stateless scoring. We containerized the model in ECR and used Lambda layers to keep deployment lightweight.  
3. **Orchestration** – Step Functions coordinate Lambda → SageMaker → SNS topics.  
4. **Observability** – CloudWatch Metrics + X-Ray trace every path; alarms trigger auto‑scaling of Lambda concurrency.  

*Result:* Latency dropped from 4 h to 28 s, real‑time CTR increased by 18 %, and monthly spend fell 32 % compared with the old batch system. The model’s AUC improved from 0.73 to 0.82 after iterative retraining.

**Dive Deep & Deliver Results**

I continuously profiled Lambda payload sizes (≤128 KB) and tuned SageMaker instance types (ml.m5.large → ml.m5.xlarge), balancing cost ($1.20/hr vs $4.80/hr) against throughput. I documented a “failure‑mode” playbook that reduced recovery time from 15 min to <3 min after a sudden Kinesis shard loss.  

*Lesson:* Small, observable changes in event routing and model packaging can yield outsized business impact—proof that ownership + data‑driven decisions drive true customer value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
