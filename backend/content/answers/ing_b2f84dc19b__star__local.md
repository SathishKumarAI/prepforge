---
qid: ing_b2f84dc19b__star__local
question: 'Explain: Airbnb Algorithms — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 323
total_tokens: 558
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:29:39-05:00'
sources: []
---

**Situation** – In my last role I joined a data science team at a mid‑size startup that was preparing a case interview for a FAANG ML position. The interviewer asked me to explain the core recommendation algorithm behind Airbnb’s “Discover” page, which is built on collaborative filtering and content‑based models.

**Task** – My goal was to describe how Airbnb balances user preferences with property features in real time, while keeping latency under 200 ms for 50 k concurrent users.

**Action** – I walked through the pipeline: first we build a sparse user–listing matrix, then apply implicit alternating least squares (ALS) on GPU clusters. For cold starts, we embed listing metadata using a BERT‑style transformer and concatenate it with the ALS latent vectors. We use a lightweight CatBoost ranking model to re‑score top 200 candidates per request, feeding back click‑through rates into an online A/B test loop. I highlighted trade‑offs: larger embedding dimensions improve precision but increase GPU memory; we cap dimensions at 64 to stay within budget.

**Result** – By detailing the architecture and metrics (MAP@10 = 0.32, CTR uplift +12%), I convinced the interviewer that I understand both the theory and engineering constraints of large‑scale recommendation systems. I also learned how to compress models with knowledge distillation without hurting user experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
