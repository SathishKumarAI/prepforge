---
qid: ing_697652151c__star__local
question: Ready to build? — Uber Engineering \u2014 Where the Digital World Meets
  the Physical One
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 304
total_tokens: 549
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:58:01-05:00'
sources: []
---

**Situation** – At my previous gig I was tasked with launching a real‑time demand prediction model for a city’s bike‑share fleet. The existing static forecast was lagging by 18% during peak hours, causing over‑stocking in some zones and shortages in others.

**Task** – I needed to design an end‑to‑end pipeline that ingested live weather, traffic, and historical usage data, trained a gradient‑boosted model, and served predictions with <200 ms latency so the dispatch system could reallocate bikes on the fly.

**Action** – I chose Apache Kafka for streaming ingestion, Spark Structured Streaming for feature aggregation, and XGBoost for training. To keep latency low, I serialized the model with ONNX and deployed it in a Docker container behind an NGINX reverse proxy. I also built a monitoring dashboard in Grafana that tracked MAE and served‑latency; alerts were wired to PagerDuty so we could auto‑rollback if performance dipped.

**Result** – Within two weeks of deployment, forecast accuracy improved from 82% to 94%, reducing unmet demand by 35% and cutting overtime dispatch costs by $12K/month. I learned that building “ready to run” ML means treating data pipelines, model serving, and observability as a single product, not separate experiments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
