---
qid: ing_19ef497319__star__local
question: 'Explain: Advanced Questions - May 2026 — Question Bank'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 345
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:21:17-05:00'
sources: []
---

**Situation** – In Q2 2026 I led the upgrade of our fraud‑detection platform at a fintech startup that had been flagging only 68 % of suspicious transactions, costing us roughly $1.4 M in losses per quarter. The data lake was growing to 3 TB daily and our existing rule engine couldn’t scale.

**Task** – Build an end‑to‑end AI pipeline that could ingest real‑time streams, train a model on the latest transaction patterns, and deploy predictions with < 2 s latency, while reducing false positives by at least 20 %.

**Action** – I chose Apache Flink for low‑latency streaming, Spark MLlib for batch training, and TensorFlow Serving for inference. I designed a feature store in Delta Lake to keep versioned embeddings, implemented a rolling window of 30 days for concept drift detection, and used AutoML to tune an XGBoost model. The deployment was containerized with Kubernetes, autoscaling on CPU utilization. We added a feedback loop that fed manual reviews back into the training set every hour.

**Result** – Within three months the detection accuracy rose to 87 %, false positives dropped from 22 % to 15 %, and quarterly fraud losses fell by $480 K. I learned how orchestrating streaming, batch, and inference layers can deliver tangible business value while keeping the system maintainable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
