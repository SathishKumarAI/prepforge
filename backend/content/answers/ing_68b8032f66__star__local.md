---
qid: ing_68b8032f66__star__local
question: 'Explain: Anti-Patterns to Avoid'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 311
total_tokens: 543
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:56:48-05:00'
sources: []
---

**Situation** – In my last role I led a machine‑learning sprint to predict churn for a telecom client. The data lake was full of noisy logs, and the product team wanted a quick prototype within two weeks.

**Task** – Deliver an end‑to‑end pipeline that scores each user in real time while keeping latency under 50 ms and avoiding common AI pitfalls such as data leakage, over‑fitting, and model drift.

**Action** – I first audited the feature set to spot leakage: timestamp features from future interactions were inadvertently included. I replaced them with rolling aggregates calculated only up to the prediction point. Next, I built a modular pipeline in PySpark where each transformation was versioned; this prevented accidental re‑use of stale data. For model selection, I used cross‑validation on stratified folds and added an early‑stopping rule to guard against over‑fitting. Finally, I set up a lightweight monitoring dashboard that flags when the churn distribution shifts beyond 5 % from baseline.

**Result** – The final model achieved 0.82 AUC with sub‑50 ms inference, reducing projected churn by 12% in the pilot region—$3M annual savings. I learned that rigorously checking for leakage and automating data versioning are non‑negotiable anti‑patterns to avoid in AI projects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
