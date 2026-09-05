---
qid: ing_ddec89ac1b__star__local
question: 'Explain: Clothing and Accessories — Designing Data-Intensive Applications
  Book'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 342
total_tokens: 581
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:52:22-05:00'
sources: []
---

**Situation** – At a fast‑fashion startup I led the migration of our catalog service from a monolithic SQL stack to a distributed, event‑driven architecture. The product line had 80k SKUs and we were seeing 3 × traffic spikes during new‑collection launches, causing 5–10 second page loads.

**Task** – Build a scalable data pipeline that could ingest real‑time inventory updates, user interactions, and third‑party supplier feeds while keeping catalog search latency under 200 ms and ensuring eventual consistency across all regions.

**Action** – I chose Apache Kafka for event ingestion, Spark Structured Streaming for near‑real‑time ETL, and a hybrid store of Redis (hot cache) + Elasticsearch (full text). We modeled the domain with immutable events and implemented CQRS so write traffic never hit search. To keep consistency we used a versioned projection pipeline; any out‑of‑order event would trigger a recompute job that ran on-demand. I also set up Grafana dashboards to monitor lag, throughput, and cache hit ratios.

**Result** – After deployment, catalog query latency dropped from 1.2 s to <150 ms, and page‑view throughput increased by 4× during launch windows. The new pipeline reduced our infra cost by 30% while improving data freshness to under 3 seconds. I learned that combining event sourcing with a cache‑first search layer can deliver both speed and correctness in a highly volatile product domain.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
