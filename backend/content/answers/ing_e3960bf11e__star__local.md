---
qid: ing_e3960bf11e__star__local
question: 'Explain: Tradeoff Discussion (5 minutes) — System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 342
total_tokens: 581
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:03:45-05:00'
sources: []
---

**Situation** – In my last role I was tasked with launching a real‑time fraud detection service for a payments company that had to process ~500k transactions per day. The existing batch model achieved 97 % precision but lagged by an hour, so we needed near‑instant decisions.

**Task** – Design a streaming ML pipeline that balances latency, accuracy and cost: predictions within 200 ms, at least 95 % recall, while keeping inference costs under $0.01 per transaction.

**Action** – I chose a two‑stage architecture: (1) a lightweight logistic regression model deployed on an edge GPU cluster for the first pass; (2) suspicious cases were forwarded to a more complex gradient‑boosted tree running in a Kubernetes autoscaler that could spin up additional pods during peak hours. We used Apache Kafka for ingestion, Spark Structured Streaming for feature enrichment, and ONNX runtime for inference. I performed cost‑benefit experiments: reducing the GPU batch size improved latency by 30 % with only 0.5 % drop in recall; we also implemented an adaptive sampling scheme that reduced tree calls by 40 % during low‑volume periods.

**Result** – The system met the 200 ms SLA, achieved 96 % recall, and cut inference cost from $0.025 to $0.008 per transaction, saving ~$12k/month. I learned that careful model partitioning and dynamic scaling can reconcile seemingly conflicting constraints in a production ML pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
