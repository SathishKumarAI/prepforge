---
qid: ing_bb38cb6029__star__local
question: 'Explain: Stream Processing — Batch vs Stream Processing - What''s the Difference?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 330
total_tokens: 570
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:45:26-05:00'
sources: []
---

**Situation**  
At my previous role, we were deploying a fraud‑detection model for an online marketplace that processed millions of transactions per day. The existing pipeline was built on Spark batch jobs running every hour, so new suspicious patterns took up to an hour to surface.

**Task**  
I needed to redesign the ingestion and inference workflow so alerts could be generated in near real time while still maintaining model accuracy and scalability.

**Action**  
First I mapped out the data flow: raw transaction logs → Kafka topics → Flink streaming jobs. For each record, the job performed feature extraction (e.g., user recency, device fingerprint) using stateful operators that kept per‑user aggregates in RocksDB. The trained XGBoost model was serialized and served via a REST endpoint; I wrapped it in a lightweight Java wrapper so the stream could call predict() for every event without batch overhead. To keep latency low, I used Kafka’s exactly‑once semantics and Flink’s checkpointing to recover from failures. I also implemented backpressure handling by tuning parallelism based on CPU usage.

**Result**  
The new stream pipeline cut detection latency from 60 minutes to under 2 seconds per transaction, increasing our fraud recovery rate by 35% within the first month. I learned that batch processing excels at large‑scale offline analytics, whereas stream processing is essential when every millisecond matters for real‑time decisioning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
