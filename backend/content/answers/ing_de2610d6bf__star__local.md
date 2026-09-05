---
qid: ing_de2610d6bf__star__local
question: 'Explain: now the demand service requests the supply'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 342
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:52:43-05:00'
sources: []
---

**Situation** – In our e‑commerce platform we had a real‑time pricing engine that used machine learning to set dynamic prices. The demand forecasting microservice was generating hourly forecasts for thousands of SKUs, but the supply planning team needed those forecasts before they could trigger inventory replenishment orders.

**Task** – I had to design an API layer so that the demand service could “request” supply data in a way that kept latency below 200 ms while still allowing the supply planner to batch updates for cost efficiency.

**Action** – First, I added a lightweight gRPC endpoint on the supply service that accepted a list of SKU IDs and returned current stock levels plus safety‑stock recommendations. To keep it fast, I cached the most recent inventory snapshots in Redis with a 5‑minute TTL and used an async message queue (Kafka) to push incremental changes so the cache stayed fresh. On the demand side, I implemented a client that aggregated its hourly forecast calls into a single request per batch window, reducing round‑trips from ~10 k to just 30 per hour.

**Result** – The end‑to‑end latency dropped from 1.2 s to under 120 ms for 95 % of requests. Inventory orders were triggered 20 % faster, cutting stockouts by 12 %. I learned that coupling ML outputs with real‑time supply data requires careful caching and batching; the right trade‑off between freshness and latency can unlock measurable business gains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
