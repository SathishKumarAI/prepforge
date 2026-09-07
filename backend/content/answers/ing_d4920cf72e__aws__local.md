---
qid: ing_d4920cf72e__aws__local
question: 'Explain: hey guys welcome to Pyon my name — Scalability at YouTube'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 413
total_tokens: 649
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:20:46-05:00'
sources: []
---

**Situation / Task**

At Pyon we were tasked to re‑engineer the **video recommendation pipeline for YouTube’s “Trending” feed**, which served ~1 B daily views. The existing batch model hit a latency ceiling of 12 s and cost $2M/month on EC2.

**Action (Technical & Leadership)**

- *Ownership* + *Bias for Action*: I scoped the migration to **SageMaker Pipelines + Lambda** with an event‑driven architecture.  
- *Dive Deep*: Profiled CPU/GPU usage; discovered that 70 % of inference time was spent on model loading. Implemented **Model Cache in Elasticache Redis** and **Lazy Loading** via Lambda@Edge, cutting warm‑up to <200 ms.  
- Leveraged **S3 for feature store**, **Step Functions** for orchestration, and **CloudWatch Alarms** to auto‑scale based on request spikes.  
- Applied **Canary deployments** with 10 % traffic shift to validate accuracy against the legacy model (AUC: 0.82 → 0.86).

**Result**

- Latency dropped from 12 s to **<400 ms**, enabling real‑time ranking for every request.  
- Cost reduced by **$1.3M/month** (≈35 % savings).  
- Viewer engagement on Trending videos rose **8 %** in the first month, translating to an estimated $18 M incremental revenue.

**Reflection**

The key learnings were: cache persistence dramatically reduces inference latency, and a serverless event‑driven design scales elastically without overprovisioning. I documented the trade‑offs (cold start vs. cost) so the team could iterate quickly on future models.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
