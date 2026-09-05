---
qid: ing_7aad9d63a0__star__local
question: 'Explain: Post-processing: — Batch vs Stream Processing - What''s the Difference?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 311
total_tokens: 552
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:39:25-05:00'
sources: []
---

**Situation:** In my last role at a fintech startup, we had a real‑time fraud detection model that produced predictions for every transaction as it hit our payment gateway. The engineering team was debating whether to process these predictions in batches or stream them downstream.

**Task:** My job was to design the post‑processing layer that would take raw model outputs and convert them into actionable alerts, while keeping latency under 200 ms and ensuring we could still perform nightly audits of all transactions.

**Action:** I set up a Kafka topic for streaming predictions, using ksqlDB to enrich each record with account metadata in real time. For batch processing, I scheduled Spark jobs that ran every hour to aggregate predictions into daily risk scores and update our compliance database. I compared the two pipelines: the stream path gave instant alerts (latency < 150 ms) but required more memory and complex scaling; the batch path was simpler, allowed efficient use of disk, and produced exact aggregates for regulatory reporting.

**Result:** We deployed both paths—streaming for live fraud blocking and batching for nightly audits. Real‑time alert latency dropped from 1.2 s to 0.12 s, increasing blocked fraudulent transactions by 35%. The batch pipeline cut storage costs by 20% while meeting compliance deadlines. I learned that the key difference lies in latency vs throughput trade‑offs and that a hybrid approach often yields the best balance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
