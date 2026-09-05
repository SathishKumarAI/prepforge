---
qid: ing_48c8d44164__star__local
question: 'Explain: Summary — Indexing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 340
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:53:58-05:00'
sources: []
---

**Situation** – While leading the launch of a real‑time recommendation engine for an e‑commerce platform, we discovered that our feature retrieval latency was averaging 350 ms, far above the 100 ms SLA required for a smooth user experience.

**Task** – I had to redesign the data layer so that embeddings and metadata could be fetched in under 50 ms while still supporting millions of users and continuous model updates.

**Action** – First, I profiled queries with APM tools (Datadog) and identified that our monolithic PostgreSQL table was causing heavy index scans. I introduced a hybrid indexing strategy:  
1. Built a column‑store materialized view in ClickHouse for the high‑cardinality embedding vectors, using vector‑based IVF indexes for nearest‑neighbor lookups.  
2. Implemented a secondary Bloom filter cache in Redis to quickly reject non‑candidate keys before hitting ClickHouse.  
3. Deployed incremental refresh jobs with Kafka streams so new model outputs were ingested within seconds. I also added automated health checks and auto‑scaling policies for the ClickHouse cluster.

**Result** – Latency dropped from 350 ms to 35 ms, meeting our SLA by a wide margin. Traffic during peak hours increased by 28% without additional hardware costs. The exercise taught me that combining approximate nearest‑neighbor indexing with probabilistic filters can dramatically reduce query time in ML‑driven systems while keeping infrastructure lean.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
