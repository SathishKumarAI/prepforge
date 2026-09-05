---
qid: ing_083acc91ba__star__local
question: 'Explain: Now you''ll not just calculate with respect'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 347
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:45:22-05:00'
sources: []
---

**Situation** – In early 2023 I was leading a fraud‑detection project for a regional bank. The model had an AUC of .92 on the training set but the live scorecard kept dropping below .75, causing false alarms that annoyed merchants and lost revenue.

**Task** – My job was to identify why the performance collapsed in production and rebuild the pipeline so we could reliably calculate risk scores at scale without over‑fitting or stale features.

**Action** – I first introduced a proper train/validation/test split using time‑based sharding, then added feature drift monitoring with a sliding window of 30 days. For calculation, I moved from raw SQL aggregation to an optimized Spark UDF that computed the weighted risk score in one pass, reducing latency from 4 s per transaction to 200 ms. I also implemented incremental learning: every night the model retrained on the last month’s data and updated the feature store via Delta Lake, ensuring the algorithm always saw fresh patterns.

**Result** – After deployment, the live AUC rose to .87, false positives dropped by 38%, and transaction throughput increased from 1 k/s to 8 k/s. I learned that in ML you must treat calculation as a continuous, monitored process—just like any production system—and not just a one‑off statistic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
