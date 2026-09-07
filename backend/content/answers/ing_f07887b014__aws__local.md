---
qid: ing_f07887b014__aws__local
question: 'Explain: ByteDance / TikTok — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 472
total_tokens: 704
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:20:40-05:00'
sources: []
---

**Situation & Task (Customer Obsession + Ownership)**  
During my last hiring cycle I was asked to solve a “Faang‑style” problem: *Design an ML pipeline that recommends short‑form videos on TikTok with 99 % uptime and < 5 ms latency for 1 B daily active users.*  

**Action (Dive Deep + Bias for Action)**  
I scoped the requirements, then sketched a two‑tier system:

| Layer | AWS Service | Rationale |
|-------|-------------|-----------|
| Ingest | **Amazon Kinesis Data Streams** | Real‑time event capture from mobile clients. |
| Feature store | **AWS Glue + Amazon SageMaker Feature Store** | Centralized, versioned features (user embeddings, video metadata). |
| Model training | **SageMaker Ground Truth + SageMaker Pipelines** | End‑to‑end CI/CD; auto‑scaling for 24/7 retraining every 4 h. |
| Inference | **Amazon SageMaker Endpoint + Lambda@Edge** | Low‑latency, multi‑region deployment; can scale to >10k RPS with spot instances. |
| Monitoring | **CloudWatch + SageMaker Model Monitor** | Drift detection, A/B testing on 5% traffic, rollback if precision drops < 2%. |

I performed a cost/availability trade‑off: using Spot for training cut GPU hours by 40 %, saving ~$30K/month while maintaining SLA.

**Result (Deliver Results)**  
The prototype achieved 99.8 % uptime and 3.7 ms average latency, improving user engagement by **12 %** in a pilot of 500k users.  

**Learning & Bar‑raiser cues**  
I documented assumptions, ran failure‑mode tests, and iterated on feature importance. The bar‑raiser focused on my ownership of end‑to‑end flow, depth of AWS service knowledge, quantitative impact, and clear lessons from the pilot’s A/B failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
