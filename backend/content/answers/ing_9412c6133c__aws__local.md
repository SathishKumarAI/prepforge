---
qid: ing_9412c6133c__aws__local
question: Tell me about the AI project you're most proud of. Why that one?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 428
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:00:53-05:00'
sources: []
---

**Situation & Task**  
While leading a cross‑functional team at my previous company, we were tasked with reducing customer churn for our SaaS product. The goal: cut churn by ≥15% within one fiscal year while keeping engineering effort minimal.

**Action**  
I proposed an end‑to‑end ML pipeline on AWS:

| Component | Service | Rationale |
|-----------|---------|-----------|
| Data ingestion | **AWS Glue** + **Kinesis Data Firehose** | Near‑real‑time capture of usage logs, cost‑effective at scale |
| Feature store | **Amazon SageMaker Feature Store** | Centralized, versioned features with 99.9% availability |
| Model training | **SageMaker Autopilot** (AutoML) + custom XGBoost | Rapid experimentation; auto‑tuning for optimal AUC |
| Inference | **SageMaker Endpoint** + **AWS Lambda** | Low latency (<50 ms), autoscaling with Lambda concurrency limits |
| Monitoring | **Amazon CloudWatch** + **SageMaker Model Monitor** | Drift alerts, monthly retraining triggers |

I owned the project from concept to production, coordinating data scientists, DevOps, and product managers. I instituted a “model‑health” dashboard that fed directly into our weekly OKR reviews.

**Result**  
Within 10 months:

- Churn fell **18%**, surpassing the target by 3 points.
- Revenue impact: ~$2 M annual lift (based on $110/k customer).
- Cost per churn prediction saved was <$0.05, a 70% reduction vs our legacy rule‑engine.

**Learnings & Ownership**  
The biggest failure was an initial over‑fitting model that misidentified “high‑risk” users. I instituted rigorous cross‑validation and a post‑deployment review loop—showing true ownership and a bias for action to correct course quickly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
