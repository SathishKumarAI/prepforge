---
qid: ing_1f69f20e26__star__local
question: 'Explain: Latency-tolerant vs. latency-sensitive services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 363
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:32:09-05:00'
sources: []
---

**Situation**  
In my last role I was building a recommendation engine for an e‑commerce platform that had two downstream services: the real‑time “next‑product” API (latency‑sensitive) and the nightly batch re‑ranking job (latency‑tolerant). The live API had to respond within 150 ms, while the batch could run overnight with a 4‑hour window.

**Task**  
I needed to design a unified ML pipeline that delivered low‑latency predictions for the live service without compromising the quality of the nightly re‑ranking model, all on the same inference infrastructure.

**Action**  
I split the models into two tiers. For latency‑sensitive service I deployed a distilled LightGBM model with a 2 ms inference time and pruned feature set to only the top 10 high‑impact features. For latency‑tolerant batch, I kept the full XGBoost ensemble (≈30 ms per row) and ran it on GPU clusters during off‑peak hours. I used MLflow for experiment tracking, and built a shared feature store in Delta Lake so both pipelines accessed the same raw data but with different materialized views to avoid contention.

**Result**  
The live API met its SLA 99.8% of the time while maintaining a recommendation precision@5 of 0.42 (up 7% from baseline). The batch job finished 90 minutes earlier than before, freeing compute for other teams. I learned that careful model distillation and feature engineering can reconcile seemingly contradictory latency requirements in a single architecture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
