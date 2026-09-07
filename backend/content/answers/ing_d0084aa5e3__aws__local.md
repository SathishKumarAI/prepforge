---
qid: ing_d0084aa5e3__aws__local
question: 'Explain: Input data drift — What is concept drift in ML, and how to detect
  and address it'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 438
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:11:15-05:00'
sources: []
---

**Situation / Task**  
At my last role I led a fraud‑prediction model that served 200 k daily transactions. Two months after launch we noticed the precision drop from **92% to 78%**, hurting revenue by ~$1.2M/month. The root cause was *concept drift*—the statistical properties of transaction features changed as merchants updated their pricing strategies.

**Action**  
I implemented a *drift‑monitoring pipeline*:

| Component | AWS Service | Why |
|-----------|-------------|-----|
| Feature extraction & labeling | **SageMaker Ground Truth + Glue** | Automates data prep |
| Drift detection | **CloudWatch Metrics + Lambda** | Real‑time alerts on Kolmogorov–Smirnov (KS) distance > 0.1 per feature |
| Model retraining trigger | **Step Functions** orchestrating SageMaker training jobs | Ensures atomic rollback if new model underperforms |
| Deployment & A/B testing | **SageMaker Endpoint + AppConfig** | Can roll back in <5 min |

The KS test flagged 3 high‑impact features (merchant fee, transaction amount). We retrained on the last 30 days of data, reduced error to 94% within 24 h, and increased monthly revenue by **$1.8M**.

**Result**  
- Achieved **95% uptime** for the fraud service with *zero customer impact* during updates.  
- Cut retraining cost by 40% through automated data pipelines.  

**Reflection**  
Ownership: I drove end‑to‑end monitoring, not just alerting. Dive Deep: KS statistics revealed subtle shifts that logs missed. Learned to balance bias for action (quick rollback) with caution (A/B validation). This approach now serves as the company’s standard drift‑management template.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
