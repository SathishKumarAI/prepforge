---
qid: ing_8d602a0e2c__star__local
question: 'Explain: So that might impact a lot of — Google Maps System Design Interview
  Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 312
total_tokens: 554
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:15:28-05:00'
sources: []
---

**Situation** – While preparing for my senior data‑science role, I was asked to design a real‑time traffic prediction module for a mapping service similar to Google Maps. The challenge was that our live data stream (vehicle GPS, road sensors, weather feeds) exceeded 10 k events per second, and the latency budget was under 200 ms.

**Task** – Build a scalable architecture that ingests high‑velocity streams, trains an evolving model in near real‑time, and serves predictions with sub‑200 ms latency to millions of concurrent users.

**Action** – I chose Apache Kafka for ingestion, Spark Structured Streaming for feature aggregation, and a rolling‑window XGBoost model retrained every 5 minutes on GPU nodes. For serving, I deployed the model behind a low‑latency TorchServe cluster, fronted by an edge CDN to cache predictions per region. To keep drift in check, I added an online learning loop that fed mispredicted samples back into the training pipeline. Metrics were monitored via Prometheus and Grafana dashboards.

**Result** – The system handled 12 k events/s with 95th‑percentile latency of 180 ms, reducing average travel time estimates by 7 % compared to baseline. I learned that marrying streaming ETL with incremental ML can keep predictions fresh while meeting strict real‑time constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
