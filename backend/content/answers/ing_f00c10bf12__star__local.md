---
qid: ing_f00c10bf12__star__local
question: 'Explain: Keep Receiving Fast — Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 350
total_tokens: 587
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:28:24-05:00'
sources: []
---

**Situation** – In my last role I was tasked with building a real‑time analytics dashboard for an e‑commerce partner who sent us daily order updates through their webhook API. Their traffic spiked during flash sales, reaching 10 k calls per minute, and we had to process them within 2 seconds or risk missing revenue data.

**Task** – I needed to design a system that could ingest those webhooks at peak load, de‑duplicate requests, persist the payloads reliably, and surface fresh metrics on our dashboard without exceeding our SLA.

**Action** – I chose an event‑driven architecture: incoming POSTs hit an API gateway (NGINX) that routed them to a Kafka topic. A consumer group of stateless microservices parsed each JSON, used Redis as a short‑lived cache for idempotency keys, and wrote de‑duplicated records to PostgreSQL via async batch writes. For near‑real‑time visibility I pushed aggregated metrics into an InfluxDB time‑series store and exposed them through Grafana dashboards. I also implemented back‑pressure by scaling Kafka partitions during sales and added a retry queue with exponential back‑off for transient failures.

**Result** – The system handled 12 k webhook calls per minute with <1 s latency, reduced duplicate processing by 98%, and improved our dashboard’s refresh rate from 30 seconds to under 5 seconds. I learned that coupling lightweight message queues with idempotent consumers is key for high‑throughput webhook ingestion.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
