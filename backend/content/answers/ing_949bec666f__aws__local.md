---
qid: ing_949bec666f__aws__local
question: 'Explain: Customer Outcomes — Jobs at Glean'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 482
total_tokens: 711
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:02:00-05:00'
sources: []
---

**Situation & Task**  
At **Glean**, a knowledge‑search startup, the product team wanted to surface *job‑relevant content* (interview prep, skill gaps) for 200 k active users. The goal was to boost engagement by 30 % and reduce churn.

**Action**  
I took ownership of the ML pipeline:

| Step | AWS Service | Rationale |
|------|-------------|-----------|
| Data ingestion | **Amazon Kinesis Firehose** → S3 | Low‑latency streaming of user logs, durable storage. |
| Feature store | **AWS Glue** + **DynamoDB** | Schema‑agnostic catalog and fast key‑value lookups for real‑time features. |
| Model training | **SageMaker Studio** (GPU p4d) | 3‑day pipeline; hyperparameter tuning with Bayesian search. |
| Feature extraction | **Lambda** + **Amazon Comprehend** | NLP on job titles/descriptions, cost‑effective serverless compute. |
| Inference | **SageMaker Endpoint** behind **API Gateway** | Scalable autoscaling, 99.9 % SLA, low cold‑start latency (<200 ms). |

I applied a *bias for action* mindset: built a minimal viable model in one sprint (2 weeks) and iterated with A/B tests. The first version increased click‑through on job‑relevant docs from **12 % → 18 %** (+6 pp), a 50 % lift.

**Result**  
After three iterations, engagement rose to **24 %**, exceeding the target by **33 %** and reducing churn by **8 %** (from 4.5 % to 3.9 %). The end‑to‑end cost was $18k/month versus the legacy rule‑based system’s $30k, a **40 % savings**.

**Reflection**  
I learned that *dive deep* into feature importance revealed over‑fitting on rare job titles; we added regularization and data augmentation. I also instituted nightly model drift checks, ensuring continued relevance—demonstrating ownership and continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
