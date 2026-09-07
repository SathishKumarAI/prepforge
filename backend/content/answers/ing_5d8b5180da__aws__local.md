---
qid: ing_5d8b5180da__aws__local
question: 'Explain: The Problem — Fraud Detection'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 403
total_tokens: 629
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:57:14-05:00'
sources: []
---

**Situation & Task (Ownership, Customer Obsession)**  
At my last role I led a team that built an AI‑driven fraud detector for a payment gateway handling $200 M in annual volume. The business lost ~3% of revenue to chargebacks, so the goal was to reduce false positives by 40% while keeping detection latency under 100 ms.

**Action (Dive Deep, Bias for Action)**  
1. **Data pipeline** – Ingested real‑time events via Kinesis Data Streams → Lambda → DynamoDB Streams → S3 for batch training.  
2. **Modeling** – Trained a Gradient‑Boosted Trees model in SageMaker, evaluated with AUC‑ROC 0.97; added a lightweight neural net (MobileNetV2) for image‑based receipts.  
3. **Serving** – Deployed the best model to SageMaker Endpoint (multi‑AZ), behind API Gateway. Added CloudWatch metrics and auto‑scaling based on request latency.  
4. **Feedback loop** – Lambda post‑processing stored flagged transactions in DynamoDB; a nightly Glue job refreshed training data every 12 hrs.

**Result (Deliver Results, Quantified Impact)**  
- False positives dropped from 8% to 4.5% (a 43% reduction).  
- Chargeback costs fell by $1.2 M annually.  
- Latency stayed <90 ms for 99th percentile requests.  
- Cost was $18k/month, a 25% saving over the legacy rule‑engine.

**Learnings** – Early integration of real‑time and batch pipelines avoided data drift; continuous monitoring caught model degradation before it impacted revenue.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
