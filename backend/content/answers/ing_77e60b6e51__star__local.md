---
qid: ing_77e60b6e51__star__local
question: 'Explain: The two phases of inference — Inference And Production'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 358
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:33:50-05:00'
sources: []
---

**Situation:**  
When I joined a fintech startup last year, we were building an AI‑driven credit risk model that needed to run on our nightly batch jobs as well as serve real‑time decisions during customer calls. The production environment had strict latency and reliability requirements.

**Task:**  
I had to design the inference pipeline so that it could efficiently switch between a *batch inference* phase for nightly score updates and an *online production inference* phase for instant risk scoring, all while keeping model drift under control.

**Action:**  
First, I set up a two‑stage workflow in Airflow: the **Inference Phase** extracted raw transaction data from our warehouse, preprocessed it with Spark, and ran the PyTorch model to generate batch scores. These scores were stored in a PostgreSQL table indexed by customer ID. Second, for the **Production Phase**, I wrapped the same model in a FastAPI service deployed on Kubernetes, exposing an HTTP endpoint that pulled the latest scores from Redis (a cache layer) and performed a lightweight post‑processing step to combine them with real‑time feature flags. I also implemented continuous monitoring with Prometheus to flag when batch updates lagged behind live traffic.

**Result:**  
The dual‑phase system reduced latency for real‑time decisions to under 50 ms while ensuring nightly batch accuracy improved by 12% over the legacy rule‑based engine. The setup also cut infrastructure costs by 18% by reusing the same model artifacts across both phases, and I learned how critical it is to separate inference concerns from production deployment to meet diverse business constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
