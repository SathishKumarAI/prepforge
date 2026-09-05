---
qid: ing_9278872073__star__local
question: 'Q: How do you detect quality degradation in production?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 304
total_tokens: 540
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:25:52-05:00'
sources: []
---

**Situation:** In my last role as a ML Ops engineer at FinTechCo, we deployed an NLP fraud detection model that ran live on customer transactions. A week after launch, our internal monitoring dashboard showed a sudden drop in the F1‑score from 0.92 to 0.78 during peak hours.

**Task:** I had to identify the root cause of the quality degradation, restore performance, and set up safeguards so future drifts would be caught early.

**Action:** First, I enabled per‑batch metrics on both raw feature distributions and model outputs using Prometheus and Grafana dashboards. By comparing incoming transaction features against the training distribution with a Kolmogorov–Smirnov test, I discovered that a new payment gateway had introduced a bias in merchant categories. Next, I re‑trained the pipeline locally with synthetic samples for the underrepresented category, validated it on a holdout set, and performed A/B testing on a 5% traffic slice. Once performance stabilized (F1 back to 0.91), I automated the drift check as part of the CI/CD pipeline using Evidently AI.

**Result:** The model’s precision recovered within 48 hours, reducing false positives by 35%. I also cut incident response time from days to hours and learned that continuous feature‑drift monitoring is as critical as accuracy metrics in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
