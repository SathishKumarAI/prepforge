---
qid: ing_7234c99510__star__local
question: 'Explain: The AI Engineer 75'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 371
total_tokens: 603
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:15:40-05:00'
sources: []
---

**Situation** – At a mid‑size telecom firm I was assigned to build a churn prediction model for the upcoming quarter. The analytics team had been using an ad‑hoc rule set that only flagged churn with about 60% precision, and our customer retention budget was shrinking.

**Task** – My goal was to design a machine‑learning pipeline that could reliably identify at least 75 % of high‑risk customers (precision + recall ≥ 0.75) while keeping inference latency under 200 ms for real‑time targeting.

**Action** – I started by ingesting 1.2 M customer logs into an AWS Glue ETL job, engineered time‑series features (usage dips, support tickets), and applied a LightGBM model with hyperparameter tuning via Optuna. For deployment I containerized the scorer in Docker, pushed it to ECR, and exposed it through an API Gateway Lambda for low‑latency inference.

**Result** – The final model achieved 78 % precision/recall on the holdout set and delivered a 12 % reduction in churn over three months, saving the company roughly $2.3 M annually. I learned that balancing feature richness with latency constraints is key to scalable AI deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
