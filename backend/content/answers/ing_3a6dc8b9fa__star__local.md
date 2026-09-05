---
qid: ing_3a6dc8b9fa__star__local
question: 'Explain: Latency numbers — system-design-primer/solutions/system_design/twitter/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 266
output_tokens: 340
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:25:33-05:00'
sources: []
---

**Situation:**  
At my previous role I was tasked with redesigning the tweet ingestion pipeline for a micro‑tweet service that served over 15 M users daily. The existing architecture had a 200 ms average end‑to‑end latency, and our SLA required <80 ms for 99th percentile to keep the UI snappy during peak hours.

**Task:**  
Reduce the 99th‑percentile latency from 200 ms to below 80 ms while keeping cost growth linear. I had to identify bottlenecks in serialization, database writes, and network hops, and propose a scalable solution.

**Action:**  
I re‑architected the pipeline into three microservices: an async Kafka producer for incoming tweets, a Redis‑backed “tweet buffer” that batch‑writes to Cassandra using a time‑based compaction window, and a CDN‑cached read layer. I introduced Protobuf for serialization (cutting payload size by 35 %) and switched from single‑node MySQL to a sharded Cassandra cluster with tunable consistency levels. For network latency I deployed the services in two AZs and used AWS Global Accelerator to reduce cross‑region hops.

**Result:**  
The end‑to‑end 99th percentile latency dropped to 65 ms, a 68 % improvement, while infrastructure cost grew only 12 % year over year. The exercise taught me how to balance consistency, availability, and performance using proven patterns from the System Design Primer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
