---
qid: ing_a4fcf5543d__star__local
question: 'Explain: Ordering — Pub/Sub | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 355
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:03:18-05:00'
sources: []
---

**Situation** – In my last role I was tasked with revamping the analytics pipeline for a fintech app that processed millions of transaction events per day. The existing Kafka‑based pub/sub system had no guaranteed ordering; downstream services were receiving out‑of‑order messages, causing incorrect fraud scores and stale user dashboards.

**Task** – My goal was to design an ordering strategy that preserved causal order for each customer while keeping throughput high and latency low enough (<200 ms) for real‑time alerts.

**Action** – I introduced a partitioning scheme keyed by `customer_id` so all events from the same customer hit the same Kafka partition. To handle out‑of‑order arrivals within a partition, I added an “ordering window” in the consumer: each message carries a monotonically increasing sequence number; the consumer buffers messages until it has received the next expected one or a timeout fires. I also leveraged Kafka’s transactional API to commit offsets atomically once a batch was processed, ensuring at‑least‑once delivery without reprocessing duplicates. Finally, I added an optional “global ordering” layer using Apache Pulsar’s key‑sharding for critical events that required strict total order across all customers.

**Result** – After deployment, end‑to‑end latency dropped to 150 ms on average, and fraud detection accuracy improved by 12% due to correctly ordered event streams. The system now handles 5× the previous load with zero ordering regressions. I learned that thoughtful partitioning combined with lightweight buffering can deliver strong ordering guarantees without sacrificing scalability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
