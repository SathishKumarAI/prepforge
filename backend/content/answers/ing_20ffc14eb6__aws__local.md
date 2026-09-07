---
qid: ing_20ffc14eb6__aws__local
question: 'Explain: Tyres (except car tyres), Rims and Oversized Items (Automobiles)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 532
total_tokens: 771
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:41:54-05:00'
sources: []
---

**Situation & Task**  
In a global e‑commerce platform that ships automotive parts, I was asked to build an automated classification pipeline for **tyres (excluding car tyres), rims, and oversized automobile items** so the fulfillment centers could sort them without manual inspection. The goal: reduce mis‑shipments by 30 % and cut labor costs by $1.2 M annually.

**Action & Design**  
I scoped the requirements, then designed a serverless ML pipeline:

| Step | AWS Service | Reasoning |
|------|-------------|-----------|
| Data ingestion (images + specs) | **S3 + EventBridge** | Immutable storage; triggers on new uploads. |
| Feature extraction | **Amazon Rekognition** + **Comprehend** | Detects tyre shape, rim diameter, and size descriptors from images & text. |
| Model training | **SageMaker Ground Truth → SageMaker Training** | Human‑in‑the‑loop labeling, auto‑tuning for precision > 97%. |
| Inference | **SageMaker Endpoint (RealTime)** + **Lambda** | Low‑latency classification; scales with Lambda concurrency. |
| Monitoring & drift | **CloudWatch + Evidently** | A/B tests new model versions and alerts on performance decay. |

I incorporated **AWS Step Functions** to orchestrate the workflow, ensuring idempotence and retry logic for failed classifications. Cost was kept < $0.02 per inference by using a *t3.medium* instance type in SageMaker.

**Result**  
Within 6 months, classification accuracy hit **97.8 %**, reducing mis‑shipments from 12 % to 4.5 %. Labor costs dropped $1.4 M, exceeding the target. The system handled peak traffic of 50k requests per hour with 99.9 % availability.

**Reflection (Bar‑raiser)**  
I took full ownership: from data strategy to post‑deployment monitoring. I *dive deep* into error logs to discover a feature drift that could have ruined accuracy, and I *bias for action* by deploying Evidently early. The biggest learning was the value of human‑in‑the‑loop labeling in high‑stakes domains—something I’ll advocate in future ML projects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
