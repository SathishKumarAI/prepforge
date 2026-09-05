---
qid: ing_a17a9ffaec__star__local
question: 'Explain: You want to build it to address — Building Software Systems At
  Google and Lessons Learned'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 328
total_tokens: 572
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:55:42-05:00'
sources: []
---

**Situation:** While working on the Search Ranking team, we noticed that our click‑through prediction model lagged behind competitors by ~4% in precision, hurting revenue projections during peak traffic periods.

**Task:** I was tasked with redesigning the feature pipeline and retraining strategy so the model could handle 5 M daily queries with <50 ms latency while boosting accuracy to within 1% of our target.

**Action:** First, I migrated our feature store from a custom SQL solution to BigQuery ML + Vertex AI Feature Store, enabling real‑time feature updates and reducing extraction time by 70%. Next, I introduced a multi‑task learning architecture using XGBoost with a shared representation layer, which allowed us to jointly optimize for click probability and dwell time. To keep inference fast, I distilled the boosted tree ensemble into a shallow neural net and deployed it on Cloud Run with autoscaling, guaranteeing sub‑50 ms latency under peak load. Finally, I set up an A/B test framework in BigQuery that measured lift across user segments.

**Result:** The new pipeline cut feature extraction time from 12 s to 3 s per batch, the model’s precision improved by 2.8% (now within 0.5% of our target), and latency stayed under 45 ms even during traffic spikes. I learned that investing in a unified feature store and leveraging multi‑task learning can dramatically improve both accuracy and scalability without overhauling the entire system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
