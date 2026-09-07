---
qid: ing_93fd5b7947__aws__local
question: 'Explain: these many bytes which means this is — Expert gets Interviewed!
  @gkcs does IRCTC System Design!! It\u2019s a hard question \ud83e\udd2f\ud83e\udd2f'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 270
output_tokens: 418
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:00:37-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led the end‑to‑end redesign of a train‑booking recommendation engine that served 5 M daily users. The legacy batch model was 12 h slow and generated 30% inaccurate suggestions, hurting conversion by ~4%.  

**Action (Technical)**  
I architected a **real‑time inference pipeline** on AWS:  
- *Data ingestion*: Kinesis Data Streams → Lambda → DynamoDB for feature store.  
- *Model training*: SageMaker Pipelines with AutoML, using 1 TB of historical booking logs; model drift checks run nightly.  
- *Inference*: SageMaker Endpoint (multi‑model) behind an Application Load Balancer with a 99.95% SLA, auto‑scaling from 2 to 30 instances.  
- *Monitoring*: CloudWatch + SageMaker Model Monitor for accuracy ≥ 92%, latency ≤ 200 ms.  

**Result**  
Within three months we saw:  
- **Conversion ↑ 5.8%** (≈ 145 k extra bookings/month).  
- **Model accuracy 92% → 97%**, reducing churn by 1.2%.  
- **Cost ↓ 35%** by leveraging spot instances and right‑sizing endpoints.  

**Reflection**  
I took *ownership* of every layer, performed deep dives into feature importance (SHAP) to surface hidden biases, and iterated quickly—deploying blue/green releases in two days. The bar‑raiser looked for measurable impact, scalability trade‑offs, and learning from a failed batch approach that caused data staleness.  

**Leadership Principles** – *Customer Obsession*, *Ownership*, *Dive Deep*, *Bias for Action*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
