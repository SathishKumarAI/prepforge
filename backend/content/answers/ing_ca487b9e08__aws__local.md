---
qid: ing_ca487b9e08__aws__local
question: Ik ben momenteel al klant bij MyShop, wat nu?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 442
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:58:42-05:00'
sources: []
---

**Customer Obsession & Ownership**

> *Situation*: I was a new customer of MyShop, noticing that the product recommendation engine had low click‑through rates (CTR ≈ 0.8 %) and high bounce times on the “Recommended for You” page.

> *Task*: Own the end‑to‑end improvement: collect data, design an ML pipeline, deploy it at scale, and measure impact on revenue and user satisfaction.

> *Action*:
> 1. **Dive Deep** – Extracted click logs from Amazon S3 (≈ 5 TB), cleaned them in Glue, and built a feature store in DynamoDB for real‑time personalization.
> 2. **Invent & Simplify** – Trained a LightGBM model on SageMaker, using incremental training with a 1‑hour retrain cycle. Deployed via SageMaker Hosting Services (multi‑model endpoint) behind an Application Load Balancer to ensure low latency (< 200 ms).
> 3. **Bias for Action** – A/B tested the new model against the legacy rule‑based engine; after two weeks, CTR rose from 0.8 % to 2.4 % (+200 %) and average order value increased by 12 %.
> 4. **Deliver Results & Ownership** – Monitored costs: SageMaker training cost $3k/month vs. previous $5k; inference cost reduced by 30 %. Reported weekly dashboards in QuickSight to stakeholders.

> *Result*: Delivered a scalable, low‑cost ML service that increased revenue by $1.2 M/year and improved customer satisfaction scores (CSAT +0.4). Learned that early data validation prevents costly retraining cycles—now I add a “validation gate” before every deployment.

**Bar‑raiser notes**: Demonstrated ownership of the full stack, deep technical dive, quantified impact, and continuous learning from initial model failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
