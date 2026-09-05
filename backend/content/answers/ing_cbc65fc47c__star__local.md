---
qid: ing_cbc65fc47c__star__local
question: 'Explain: System Design Interview - Distributed Cache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 353
total_tokens: 587
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:16:24-05:00'
sources: []
---

**Situation:** In my last role at a fintech startup, our fraud‑detection microservice was hitting the database for every transaction, causing a 35 % latency spike during peak hours. The team needed a fast, consistent data store that could handle millions of reads per second.

**Task:** I had to design and implement a distributed cache layer that would reduce database load by 80 %, keep data fresh within 2 seconds, and support automatic failover without compromising consistency for critical fraud rules.

**Action:** I chose Redis Cluster because of its in‑memory speed and native sharding. I configured it with a 3‑node master–replica setup, using read replicas to offload traffic and an LRU eviction policy tuned to our 512 GB RAM pool. For cache invalidation, I implemented publish/subscribe hooks that pushed updates from the database layer whenever rule changes occurred. To ensure eventual consistency, I added a lightweight timestamp check in the service layer: if the cached entry was older than 2 s, it fell back to the DB and refreshed the cache. I also set up Prometheus alerts for hit ratios and latency thresholds.

**Result:** After deployment, cache hit ratio jumped from 12 % to 92 %, cutting database queries by 78 % and reducing average transaction latency from 280 ms to 45 ms during peak load. The system now scales horizontally; adding a new node simply updates the cluster config. I learned that careful eviction policy tuning and real‑time invalidation are key to maintaining consistency in distributed caches, especially for latency‑critical services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
