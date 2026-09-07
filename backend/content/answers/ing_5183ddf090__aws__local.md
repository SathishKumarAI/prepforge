---
qid: ing_5183ddf090__aws__local
question: 'Explain: Redis TimeSeries — Redistimeseries'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 471
total_tokens: 701
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:29:26-05:00'
sources: []
---

**Situation & Task**  
At my last role I led the migration of our IoT telemetry pipeline from a legacy MySQL stack to an in‑house Redis cluster to meet sub‑second ingest latency for 1 M+ daily device events. The goal was to keep cost below $5k/month while delivering real‑time analytics.

**Action – Design & Implementation**  
I chose **RedisTimeSeries**, a module that stores sorted key/value pairs with optional aggregation and downsampling.  
* **Data model** – each device gets a series key; we use the `INCRBYFLOAT` command for instantaneous counters and `TS.ADD` for raw metrics.  
* **Aggregation** – enabled `AGGREGATION` (avg, min, max) at 1‑minute windows to keep cardinality low.  
* **Retention policy** – set a 30‑day TTL; older points are compacted automatically.  
* **Scaling** – sharded across 4 Redis nodes with Sentinel for HA; read replicas handle dashboard queries.  
* **Cost & Availability** – running on EC2 t3.large in us‑east‑1a (reserved) gives ~99.9% uptime and $3k/month, a 40% savings over the old setup.

I wrapped the cluster behind an AWS **Elastic Load Balancer** and exposed a lightweight **API Gateway + Lambda** layer for client ingestion, ensuring serverless scalability and zero operational overhead.

**Result**  
Ingest latency dropped from 250 ms to <20 ms (10×). Monthly cost fell by 40%. The dashboard now displays real‑time metrics with 99.9% availability, directly improving our customer support response time by 30%.

**Reflection**  
I owned the end‑to‑end migration, dug deep into Redis internals to tune compression, and iterated quickly—demonstrating *Ownership*, *Dive Deep*, and *Bias for Action*. The experience taught me that a well‑engineered time‑series store can replace heavyweight databases while delivering measurable business value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
