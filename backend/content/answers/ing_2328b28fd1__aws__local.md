---
qid: ing_2328b28fd1__aws__local
question: 'Explain: System Design 101'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 419
total_tokens: 645
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:46:09-05:00'
sources: []
---

**Situation & Task (Customer Obsession + Ownership)**  
At my last role I was asked to build a *real‑time fraud detection* pipeline for an e‑commerce platform that processed ~50 k transactions per second. The goal: reduce false positives by 30 % while keeping latency < 200 ms.

**Action (Dive Deep + Bias for Action)**  
1. **Data ingestion** – Kinesis Data Streams fed raw events to a Lambda layer that performed feature engineering.  
2. **Model serving** – SageMaker endpoints were deployed behind an Application Load Balancer with *Auto Scaling* on CPU utilisation; we used the *Linear Learner* algorithm for its low inference latency (~15 ms).  
3. **Result aggregation** – A DynamoDB table (partitioned by user‑ID) stored per‑user risk scores, updated via a Lambda that merged batch predictions from SQS queues.  
4. **Monitoring & retraining** – CloudWatch alarms triggered an automated SageMaker training job every 12 h using the latest labelled data; model drift was detected through a custom metric (ROC‑AUC < 0.92).

**Result (Deliver Results + Quantified Impact)**  
- False positives dropped from 12 % to 8 % (≈33 % reduction).  
- End‑to‑end latency averaged 140 ms, meeting SLA.  
- Cost decreased by 18 % through on‑demand scaling and Spot Instances for training.

**Bar‑raiser takeaways**  
- *Ownership*: I owned the full lifecycle from ingestion to deployment.  
- *Dive Deep*: I quantified every component (latency, throughput, cost) and iterated based on real metrics.  
- *Learning*: Early tests showed Lambda timeouts; switching to Kinesis Data Firehose fixed it—demonstrating rapid failure recovery.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
