---
qid: ing_c6c42ddc9a__star__local
question: 'Explain: Pre-processing: — Batch vs Stream Processing - What''s the Difference?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 347
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:07:23-05:00'
sources: []
---

**Situation** – While leading a fraud‑detection project for a fintech client, we were asked to shift from our nightly model training pipeline (batch) to real‑time alerts. The data volume was 5 M transactions per day, and the SLA demanded sub‑second predictions.

**Task** – I had to redesign the preprocessing layer so that incoming events could be cleaned, enriched, and fed into the model without waiting for a batch job, all while keeping accuracy within ±1% of the legacy system.

**Action** – First, I profiled the existing Spark batch jobs: they performed heavy feature engineering (rolling averages, cross‑feature joins) in 45 min. To convert this to stream, I rewrote the logic using Kafka Streams and Flink, maintaining stateful windows for the rolling metrics. I introduced a lightweight schema registry to enforce consistency and used Debezium to capture CDC from our transactional database, ensuring no data loss. For latency, I replaced full joins with approximate Bloom‑filter lookups and capped window size to 10 s, which kept memory usage down. I also set up Prometheus alerts for backpressure.

**Result** – The new stream pipeline processed 80% more transactions per second with an end‑to‑end latency of 150 ms. Model accuracy stayed at 92%, matching the batch baseline. I learned that careful state management and trade‑offs between window size and feature fidelity are key when moving from batch to streaming ML preprocessing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
