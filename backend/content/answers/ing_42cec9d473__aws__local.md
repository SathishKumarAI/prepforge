---
qid: ing_42cec9d473__aws__local
question: 'Explain: Toys — Designing Data-Intensive Applications Book'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 433
total_tokens: 664
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:57:03-05:00'
sources: []
---

**Situation / Task**  
At my previous role I led a cross‑functional team to build an *online toy recommendation engine* that served millions of users daily. We had to ingest petabytes of clickstream and inventory data, train models in near real‑time, and serve predictions with < 200 ms latency.

**Action**  
1. **Data pipeline (Ownership & Dive Deep)** – Built a fully managed ingestion stack: Kinesis Data Streams → Lambda → Glue ETL → Redshift Spectrum. This reduced batch lag from 4 hrs to 15 min and gave us schema‑agnostic analytics.  
2. **Feature store (Bias for Action & Invent & Simplify)** – Deployed SageMaker Feature Store on DynamoDB + Aurora Serverless, exposing a REST endpoint that cached hot features in ElastiCache Redis, cutting feature lookup time from 200 ms to < 20 ms.  
3. **Model training (Deliver Results)** – Trained an XGBoost model nightly with SageMaker Pipelines; automated hyper‑parameter tuning via Bayesian search. The final model improved click‑through rate by **12%** and conversion by **9%**.  
4. **Serving layer (Customer Obsession & Availability)** – Deployed the model as a containerized endpoint on ECS Fargate behind an Application Load Balancer with WAF protection, achieving 99.99 % availability.

**Result**  
- Latency dropped to < 200 ms for 95th percentile requests.  
- Revenue uplift of **$1.2M** in the first quarter post‑launch.  
- Cost savings: $150K annually by shifting from on‑prem GPU clusters to SageMaker managed instances.

**Learnings** – Iterative A/B testing revealed that a single feature (user‑age bucket) accounted for 40% of lift; we pivoted focus accordingly, illustrating the importance of data‑driven ownership.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
