---
qid: ing_97b616952c__star__local
question: 'Explain: Data replication explained: Types, examples & use cases'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 312
total_tokens: 549
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:36:01-05:00'
sources: []
---

**Situation** – At my previous firm we launched a global recommendation engine that served millions of users daily. Our analytics team noticed a growing latency gap between the EU and US regions; read‑latency was up to 350 ms in London, while New York stayed under 80 ms.  

**Task** – I had to design a data‑replication strategy that kept our user profile store fresh (<5 s) while reducing cross‑continent latency for reads.

**Action** – I evaluated synchronous vs asynchronous replication. We chose a *multi‑master asynchronous* model using Kafka Connect and Debezium for CDC, replicating the PostgreSQL primary to regional replicas in London, Paris, and NYC. To guarantee eventual consistency we implemented conflict resolution with vector clocks and a read‑through cache (Redis) that served stale‑acceptable data until replication caught up. We also introduced *geo‑sharding* of writes based on user locale to keep write loads localized.

**Result** – Read latency dropped from 350 ms to 70 ms in London, while write throughput increased by 40 %. The system maintained <2 s lag for data consistency across regions and reduced our infrastructure cost by 18 % by eliminating costly cross‑zone traffic. I learned that choosing the right replication type hinges on the read/write patterns and tolerance for eventual consistency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
