---
qid: ing_c65438bdcf__star__local
question: 'Explain: Are Right, A Lot — Leadership Principles'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 311
total_tokens: 547
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:06:31-05:00'
sources: []
---

**Situation** – At a fintech startup I was leading the fraud‑detection model that processed ~2 M transactions per day. The previous model’s false‑positive rate had risen to 12%, hurting user experience and inflating operational costs.

**Task** – My goal was to reduce false positives below 6% while maintaining at least 95% recall, all within a two‑week sprint so we could roll out the new system before the holiday season.

**Action** – I first audited the data pipeline: discovered that duplicate transaction records were skewing feature distributions. I rewrote the ingestion script in Spark, added a deduplication window, and switched from a single‑layer logistic regression to an XGBoost ensemble with early stopping. I also set up A/B testing in production using FeatureStore so we could roll back instantly if performance dipped. Throughout, I consulted senior data scientists and presented daily dashboards to stakeholders, ensuring transparency and rapid feedback loops.

**Result** – The new model cut false positives from 12% to 5%, increased recall from 93% to 96%, and reduced cost per detection by $0.04—saving the company roughly $250k annually. I learned that being “right a lot” means rigorously validating assumptions, iterating fast, and aligning technical choices with business impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
