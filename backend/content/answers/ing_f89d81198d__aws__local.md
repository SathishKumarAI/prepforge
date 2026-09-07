---
qid: ing_f89d81198d__aws__local
question: 'Explain: Glean Documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 225
output_tokens: 662
total_tokens: 887
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:40:40-05:00'
sources: []
---

**Glean Documentation – Building a Self‑Service ML Model Registry**

**Situation & Task**  
At my previous company, we had 12 data science teams deploying models to production via CI/CD pipelines. Each team used its own naming conventions and stored artifacts in S3 buckets with no central catalog. When new hires joined, they spent days hunting for model metadata, leading to a **30 % slowdown** on onboarding and frequent “model drift” incidents because deployments were not traceable.

**Action**  
I owned the initiative to build *Glean*, an internal ML documentation service that auto‑captures model artifacts, hyperparameters, evaluation metrics, and lineage. The stack was:

| Requirement | AWS Service | Rationale |
|-------------|------------|-----------|
| Metadata ingestion | **AWS Glue ETL + Lambda** | Serverless, scales with incoming S3 events |
| Storage & search | **Amazon DynamoDB + OpenSearch** | Low‑latency queries, full‑text search on metrics |
| Visualization | **Amazon QuickSight** | Zero‑code dashboards for stakeholders |
| Access control | **IAM + Cognito** | Fine‑grained permissions per team |

I designed a schema that normalized model versions into a single table and implemented an event‑driven pipeline. The system processed 1,200 model uploads monthly with < 2 s latency to query.  

**Result**  
* Glean reduced onboarding time by **45 %** (from 5 days to 2.75 days).  
* Model drift incidents dropped from 8/month to 2/month—an **80 % reduction** in production failures.  
* Data scientists spent 30 % less time searching for artifacts, freeing up capacity for experimentation.

---

### Leadership Principles Reflected

| Principle | How I Demonstrated It |
|-----------|-----------------------|
| **Ownership** | Took full responsibility from requirements to production rollout and ongoing monitoring. |
| **Dive Deep** | Analyzed logs, performance metrics, and user feedback to iterate on the schema until latency met SLA. |
| **Customer Obsession** | Built dashboards that let business users instantly see model accuracy trends, improving trust in ML outputs. |
| **Bias for Action** | Deployed a minimal viable product within 6 weeks instead of waiting for a perfect design. |

---

### What a Bar‑Raiser Listens For

1. **Quantified Impact** – I tied the solution to clear business metrics (onboarding time, incident reduction).  
2. **Depth & Trade‑offs** – I explained why DynamoDB + OpenSearch were chosen over relational DBs and how we balanced cost ($0.05 / GB/month) with performance.  
3. **Learning from Failure** – Initial prototype had stale metadata due to delayed Lambda triggers; after adding a CloudWatch event bridge, we achieved real‑time consistency—showing iterative learning.  

This project exemplifies Amazon’s emphasis on building customer‑centric systems that scale efficiently while owning the end‑to‑end lifecycle.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
