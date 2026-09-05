---
qid: ing_c3308b32a2__star__local
question: 'Explain: High Throughput — System Design Cheat Sheet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 349
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:00:06-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup we had an overnight fraud‑detection pipeline that ingested ~4 million transaction events per hour. The existing batch job ran on Spark and finished just in time for the next day, but our SLA was 15 minutes to surface high‑risk alerts.  

**Task** – Redesign the ingestion‑to‑prediction flow so that we could process each event within 30 ms, keep latency under 5 seconds end‑to‑end, and still support model updates without downtime.  

**Action** – I architected a micro‑service stack using Kafka for streaming, Flink for low‑latency stateful processing, and a GPU‑enabled inference service behind Envoy. To hit throughput, I sharded the Kafka topic by merchant ID, tuned Flink parallelism to 64 slots, and cached feature vectors in Redis with LRU eviction. For model rollouts I implemented an A/B‑routing scheme that sent 5 % of traffic to a new model while keeping the old one live; metrics were collected via Prometheus and visualized in Grafana.  

**Result** – The pipeline now ingests 8 million events per hour with <30 ms per‑event latency, reducing alert turnaround from 15 minutes to 3 seconds. We saw a 35 % drop in false positives after deploying the new model, and I learned that coupling stream processing with containerized inference + real‑time metrics is key for ML at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
