---
qid: ing_46e97334e3__star__local
question: 'Explain: Tablets (new and certified refurbished) — Designing Data-Intensive
  Applications Book'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 350
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:50:38-05:00'
sources: []
---

**Situation:**  
At my previous company we launched a dual‑stream marketplace: one for brand‑new tablets and another for certified refurbished units. Sales dashboards were lagging—inventory updates took hours, and our recommendation engine was feeding stale data, causing customers to see out‑of‑stock items as available.

**Task:**  
I had to rebuild the data pipeline so that real‑time inventory, pricing, and customer interaction metrics could be ingested, processed, and served within seconds for both product lines, while keeping the ML model fresh enough to improve upsell rates.

**Action:**  
I chose a Kafka‑based stream ingestion layer with Avro schemas for consistency. For each tablet type I built separate Flink jobs that performed windowed joins between order streams, return logs, and supplier feeds. The enriched data fed into an Apache Spark Structured Streaming job that updated our feature store in Delta Lake. On the ML side, we switched to a LightGBM model retrained every 6 hours using the latest features; the inference served via TensorFlow Serving behind a gRPC endpoint with low‑latency caching (Redis). I also added Prometheus alerts for data lag and built Grafana dashboards to monitor freshness per SKU.

**Result:**  
Latency dropped from 45 minutes to under 5 seconds, inventory accuracy improved by 98%, and the upsell conversion rate rose 12% in three months. I learned that a modular streaming architecture lets you scale each product line independently while keeping ML models tightly coupled to real‑time data quality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
