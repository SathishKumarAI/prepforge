---
qid: ing_3fa3a68f88__star__local
question: How Grab store and process millions of orders daily?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 357
total_tokens: 592
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:35:25-05:00'
sources: []
---

**Situation** – At Grab’s core platform I was part of the team that handled the surge in ride‑and‑delivery orders during the pandemic peak: we were receiving roughly 8 million transactions per day across Southeast Asia, with a latency SLA of under 300 ms for each order.

**Task** – My goal was to design an end‑to‑end pipeline that could ingest, store and route these events reliably while keeping costs in check, all without compromising the real‑time matching engine that connects drivers to riders.

**Action** – I championed a hybrid architecture: we used Apache Kafka as a high‑throughput ingestion layer, partitioning streams by region. Orders were stored in a time‑partitioned Parquet lake on AWS S3 for long‑term analytics, while hot data lived in a distributed Redis cache for instant lookup. For processing, we deployed a fleet of stateless Spark Structured Streaming jobs that enriched orders with geospatial routing and fraud flags, then pushed results back to Kafka for the matching microservices. To keep costs down, we auto‑scaling ECS tasks on spot instances and leveraged Lambda functions for lightweight post‑processing.

**Result** – The new pipeline cut order processing latency from 450 ms to 210 ms, handled a 3× traffic spike without outages, and reduced infrastructure spend by 18% YoY. I learned that coupling event‑driven ingestion with tiered storage can deliver both speed and cost efficiency at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
