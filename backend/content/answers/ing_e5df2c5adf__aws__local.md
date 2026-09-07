---
qid: ing_e5df2c5adf__aws__local
question: 'Explain: multiple times even with the same application'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 402
total_tokens: 631
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:57:42-05:00'
sources: []
---

**Situation (S)** – I was leading a data‑science team that had built a fraud‑detection model for a payment gateway. Every time we deployed the same model to production, it ran **several times per day** even though no new code or data was pushed.

**Task (T)** – My goal was to identify why the pipeline was re‑executing and reduce unnecessary compute costs while maintaining real‑time detection accuracy.

**Action (A)**  
1. **Dive Deep** into the CI/CD workflow: discovered that a scheduled AWS Step Functions state machine triggered nightly, but an S3 event‑based Lambda still fired on every object upload—even when the payload was identical.  
2. Added a *hash checksum* to each input file and stored it in DynamoDB. The Lambda now checks if the hash exists before re‑running the SageMaker training job.  
3. Replaced the legacy batch job with **Amazon SageMaker Processing** jobs that run only on “changed” data, using **SageMaker Pipelines** for governance.  
4. Implemented CloudWatch metrics to alert on unexpected retraining frequency.

**Result (R)** –  
- Reduced redundant training runs by **92 %**, cutting compute spend from $1,200/month to $120/month.  
- Latency of fraud scoring stayed under 150 ms, and false‑positive rate dropped from 4.3 % to 2.8 %.  

**Learnings** – Ownership means continuously questioning the pipeline; “why is this happening?” leads to cost savings and better product quality. The bar‑raiser looks for data‑driven impact, depth of root‑cause analysis, and a culture of learning from failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
