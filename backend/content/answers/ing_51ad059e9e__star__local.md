---
qid: ing_51ad059e9e__star__local
question: 'Explain: Tell me about an AI project that failed. Not one with a redemption
  arc - one that got killed.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 318
total_tokens: 566
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:11:39-05:00'
sources: []
---

**Situation:**  
In 2022 I was leading a team at a fintech startup tasked with building a real‑time fraud detection model for credit card transactions. The product was supposed to replace the legacy rule‑based engine and reduce false positives by 30% while catching 95% of fraudulent activity.

**Task:**  
We needed to deliver a fully automated pipeline that could ingest ~200,000 daily transactions, score them with an XGBoost model, and feed results into the existing risk scoring system within a single week’s cycle time. The goal was to prove that AI could outperform manual rules without increasing operational cost.

**Action:**  
I chose a one‑liner feature engineering approach using transaction amount, merchant category, and time delta, hoping for speed. We trained on 3 months of labeled data and deployed the model directly into production via Docker containers orchestrated by Kubernetes. I also set up an alerting rule that blocked any transaction flagged as high risk without human review.

**Result:**  
Within two days of launch, we saw a spike in false positives—up to 60% of legitimate customers were denied service—leading to a 12% churn rate in the first week. The model’s precision dropped from the expected 90% to 45%, and the engineering team had to roll back the deployment. I learned that skipping thorough feature exploration, ignoring data drift, and deploying without a staged rollout can turn an AI project into a costly failure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
