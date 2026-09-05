---
qid: ing_236fb51cd2__star__local
question: 'Explain: Batch Execution: — Batch vs Stream Processing - What''s the Difference?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 343
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:39:52-05:00'
sources: []
---

**Situation** – In my last role as a data engineer at a fintech startup, we were launching a real‑time fraud detection system for credit card transactions. Our existing analytics pipeline was built on batch processing with Apache Spark, running nightly jobs that processed the previous day’s data. The business needed to flag suspicious activities within seconds of a transaction.

**Task** – I had to design a new ingestion and scoring workflow that could deliver predictions in near real‑time while still maintaining the accuracy guarantees we had from our batch models.

**Action** – First, I mapped out the key differences: batch processes are offline, large volume, high latency but can use heavy computation; stream processing is continuous, low latency, limited by memory and CPU. Using Apache Kafka for ingestion and Spark Structured Streaming as the engine, I re‑implemented the feature extraction step to run on a micro‑batch of 1 second windows. I also leveraged Delta Lake to keep a single source of truth that both batch nightly jobs and the streaming job could read from, ensuring consistency. To handle stateful fraud rules, I used Spark’s mapGroupsWithState.

**Result** – The new pipeline reduced detection latency from 24 hours to under 2 seconds for 95% of transactions, cutting false positives by 18%. I learned that choosing the right paradigm depends on data velocity and business tolerance for latency versus computational depth.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
