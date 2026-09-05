---
qid: ing_cdb4b1e48f__star__local
question: 'Explain: Redis — What is Distributed Caching? - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 333
total_tokens: 576
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:20:31-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup, our fraud‑detection microservice had to process ~10 k requests per second, each needing real‑time access to user transaction history cached in memory. The single‑node Redis instance was maxing out on 12 GB RAM and latency spiked during traffic surges.

**Task** – I needed to scale the cache horizontally while keeping read latency under 2 ms, ensuring no data loss for active sessions, and maintaining cost efficiency.

**Action** – I designed a sharded Redis cluster with sentinel failover. Using hash tags on keys (e.g., `{userId}:txnHistory`) we guaranteed that all records for a user resided on the same shard, simplifying cache invalidation. I leveraged Lua scripts to perform atomic increments of daily transaction counts and to evict stale entries via LFU policies tuned per shard. To monitor health, I set up Prometheus exporters and Grafana dashboards; alerts were configured for memory usage >80 % or replication lag >1 s. For cost control, I spun down idle shards during off‑peak hours using Kubernetes operators.

**Result** – The cluster handled 25 k TPS with <1.8 ms average latency and dropped cache miss rate from 18 % to 4 %. We saved ~30 % on infrastructure spend by auto‑scaling. I learned that careful key design, proactive monitoring, and automated scaling are the pillars of resilient distributed caching.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
