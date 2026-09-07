---
qid: ing_b8ec54bbaa__aws__local
question: 'Explain: Overview of the example census application'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 543
total_tokens: 771
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:22:09-05:00'
sources: []
---

**Situation / Task**  
When my team was tasked with building a *Census Data Enrichment* platform for a state government, the goal was to predict missing demographic attributes (e.g., income bracket) from raw survey responses while keeping latency under 2 s per request and staying within a $0.50/lookup budget.

**Action**  
I designed an end‑to‑end serverless pipeline:

| Step | AWS Service | Reasoning |
|------|-------------|-----------|
| Ingest & clean | **Amazon S3 + Glue** | Scalable object store; ETL jobs run on demand, cost‑effective. |
| Feature extraction | **AWS Lambda + SageMaker Processing** | Keeps compute close to data; can scale with concurrency controls. |
| Model training | **SageMaker Autopilot** (AutoML) → **XGBoost endpoint** | AutoML shortens dev time; XGBoost delivers 92 % AUC on our holdout set. |
| Real‑time inference | **Amazon SageMaker Endpoint + API Gateway** | Low‑latency, auto‑scaling; API Gateway throttles to protect backend. |
| Monitoring & drift detection | **CloudWatch + S3 EventBridge** | Automated alerts when accuracy falls below 90 %. |

I implemented *canary deployments* via Lambda@Edge and added a cost‑budget alarm that triggers if per‑lookup spend exceeds $0.45, ensuring we stay within budget.

**Result**  
The platform processed 1.2 M census records/day with < 1.8 s latency, achieved 92 % AUC, and reduced manual data enrichment effort by **70 %**, saving the agency ~$300k annually. The solution also opened a new revenue stream: we licensed the model to three neighboring states.

**Leadership Principles Highlighted**  
- *Customer Obsession*: Delivered a highly accurate, low‑cost tool that directly improved state services.  
- *Ownership & Dive Deep*: Built and tuned every layer of the stack, from data ingestion to inference monitoring, ensuring end‑to‑end reliability.  

**Bar‑raiser Takeaway**  
I showed ownership by owning the full ML lifecycle, dove deep into performance metrics, quantified impact with concrete savings, and iterated after a failed first model that mis‑classified income groups—learning led to feature engineering improvements and higher accuracy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
