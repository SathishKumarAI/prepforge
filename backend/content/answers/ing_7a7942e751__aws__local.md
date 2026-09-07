---
qid: ing_7a7942e751__aws__local
question: 'Explain: Ad Prediction System — Grokking The Machine Learning Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 445
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:02:17-05:00'
sources: []
---

**Situation & Task**  
At my previous company we built an ad‑prediction engine that needed to deliver real‑time click‑through predictions for 200 M users while keeping latency < 50 ms and cost <$0.02 per request. The goal was to improve revenue by 12% YoY.

**Action – Design & Implementation**  
1. **Feature Pipeline** – Used Amazon Kinesis Data Streams to ingest user events (clicks, views) and AWS Glue for nightly batch enrichment from DynamoDB.  
2. **Model Training** – Trained a LightGBM model on SageMaker, leveraging Spot instances to cut compute cost 4×. We used feature importance to drop 30 features, simplifying the model without hurting AUC (from 0.82 → 0.81).  
3. **Inference Service** – Deployed the model as an Amazon SageMaker Endpoint with multi‑model hosting. For real‑time predictions we wrapped it in a Lambda layer that fetched user context from DynamoDB and returned a probability score within 35 ms.  
4. **Scalability & Availability** – Enabled Auto Scaling on the endpoint (min 2, max 20 containers) and used Route 53 latency routing to nearest region. Cost was $1.5M/yr vs projected $3.8M without optimization.

**Result**  
- Click‑through rate increased by **14%**, driving an additional $4.2 M in ad revenue per quarter.  
- Latency stayed < 50 ms 99.7% of the time, meeting SLAs.  
- Reduced inference cost by **38%** through model pruning and spot usage.

**Reflection & Learning**  
I took full ownership: from data ingestion to production monitoring (CloudWatch + X-Ray). A key failure was an early over‑fitting run that caused a 20 ms spike; we resolved it by adding early stopping and cross‑validation, illustrating *Dive Deep* and *Bias for Action*. This experience reinforced the principle of delivering measurable results while balancing cost and reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
