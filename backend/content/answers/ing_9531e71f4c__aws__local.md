---
qid: ing_9531e71f4c__aws__local
question: 'Explain: By Constraint — Model Selection Guide'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 484
total_tokens: 711
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:03:22-05:00'
sources: []
---

**Answer (Amazon Way)**  

> **Situation:** While launching a recommendation engine for an e‑commerce platform, I had to pick the right ML model under strict latency and cost constraints.  
> **Task:** Deliver a model that achieves ≥ 95 % click‑through rate while keeping inference < 5 ms per request and staying within $0.02/inf.  
> **Action (By‑Constraint Guide):**  
> 1. **Define Constraints First:**  
>    - *Latency* → choose models that run in memory (< 8 GB).  
>    - *Cost* → limit GPU usage; favor CPU‑friendly algorithms.  
>    - *Data Size* → 10M labeled pairs, so avoid deep nets that need > 1B FLOPs.  
> 2. **Create a Decision Matrix:** Scored candidates (XGBoost, LightGBM, DistilBERT fine‑tuned) on Accuracy, Latency, Cost, and Deployment effort.  
> 3. **Prototype & Validate:** Ran micro‑benchmarks in SageMaker Neo; LightGBM achieved 94.8 % AUC with 3 ms inference at $0.018/inf.  
> 4. **Deploy on Lambda + Elastic Inference** for auto‑scaling, using S3 for model artifacts and CloudWatch for SLA monitoring.  
> 5. **Iterate:** Added a nightly feature‑importance audit; after two weeks we re‑trained with new data, bumping CTR to 97 % without breaking constraints.  

> **Result:** Reduced latency from 12 ms to < 5 ms and cost by 30 %, while improving CTR by 2.3 points (≈ 400k additional purchases per month).  
> **Learning:** Always surface the hardest constraint first; it forces you to prune options early and avoid costly redesigns later.  

**Leadership Principles Anchored:** *Customer Obsession* (better recommendations), *Ownership* (end‑to‑end pipeline), *Dive Deep* (constraint‑driven analysis).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
