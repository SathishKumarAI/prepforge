---
qid: ing_b7597ba6fa__star__local
question: 'Explain: I''ll tweak that I''ll copy it to — The Many Meanings of Event-Driven
  Architecture \u2022 Martin Fowler \u2022 GOTO 2017'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 260
output_tokens: 356
total_tokens: 616
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:37:46-05:00'
sources: []
---

**Situation** – At my last company we were rolling out a recommendation engine for our e‑commerce platform. The user‑activity data stream was growing to over 5 M events per day, and the batch‑processing pipeline was lagging behind real‑time demands.

**Task** – I needed to redesign the ingestion layer so that model inference could run on fresh events within seconds, while still keeping the downstream analytics pipeline stable for nightly reporting.

**Action** – I introduced an event‑driven architecture using Kafka as a durable broker and Kinesis Data Streams for low‑latency push. Each user interaction was wrapped in a JSON event with a unique correlation ID and sent to a “prediction” topic. A lightweight Python microservice subscribed to that topic, pulled the latest model from S3 via boto3, performed inference with TensorFlow Serving, and pushed the recommendation back into a “recommendation” stream. For batch analytics I added a separate consumer that aggregated events into Parquet files on EMR, preserving the original timestamps for later compliance audits. We used Docker containers orchestrated by ECS to scale consumers based on Kafka lag metrics.

**Result** – The end‑to‑end latency dropped from 15 minutes to under 3 seconds per event, boosting click‑through rates by 12% in A/B tests. Batch reports still arrived on schedule with no data loss, and the system could elastically handle a 4× spike during holiday sales without manual intervention. I learned that decoupling real‑time inference from batch analytics via a robust event bus not only solves latency but also creates a reusable pipeline for future ML workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
