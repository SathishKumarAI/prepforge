---
qid: ing_864d386790__star__local
question: 'Explain: Freshworks — Valkey'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 377
total_tokens: 610
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:01:32-05:00'
sources: []
---

**Situation:** At Freshworks, we were launching a new customer‑success analytics feature that used an on‑premise recommendation engine. Our model served predictions in real time to the CRM dashboard, but the latency kept climbing as user traffic grew—average response time hit 350 ms during peak hours, which broke our SLA.

**Task:** I had to reduce inference latency below 150 ms while keeping cost and operational complexity low. The goal was to cache model outputs for frequently requested customer segments without compromising freshness of data.

**Action:** I evaluated several in‑memory stores and chose Valkey because of its Lua scripting support and native persistence. First, I benchmarked Valkey vs Redis on our workload; Valkey delivered 30 % lower serialization overhead. Then I designed a cache layer that keyed predictions by customer ID and model version, using a time‑to‑live of 5 minutes to balance staleness. I leveraged Valkey’s async pipeline API in Go, batching cache lookups with the inference calls so we only hit the model when needed. Finally, I set up Prometheus metrics to monitor cache hit rates and added an alert if hits fell below 80 %.

**Result:** Cache hit rate rose to 92 %, cutting average latency from 350 ms to 110 ms during peak load—well under our SLA—and we saved roughly $1.5k/month in compute costs by reducing inference calls. I learned that choosing the right key‑value store and scripting features can dramatically improve ML serving performance without adding infrastructure overhead.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
