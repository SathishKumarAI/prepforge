---
qid: ing_0468d518aa__faang__local
question: 'Explain: Capacity Planning — Live Comment System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 514
total_tokens: 749
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:54:42-05:00'
sources: []
---

**1️⃣ Clarify**  
We need a *live comment system* (think Reddit/YouTube) that can ingest millions of comments per day, display them in real‑time to users, and support search & moderation.  
Assumptions:  
- Comment volume ≈ 10 M/day, peak burst ≈ 1 k/s.  
- Latency requirement < 200 ms for read.  
- Comments are immutable once posted (except delete).  
- Moderation is a background job.

**2️⃣ Approach**  
1. **Ingress layer** – API gateway → load balancer → stateless comment microservice.  
2. **Persistence** – write to a partitioned log (Kafka) then into an OLTP DB (PostgreSQL) for consistency + a NoSQL store (Cassandra/ElasticSearch) for fast read & search.  
3. **Real‑time distribution** – consumers from Kafka publish to a message broker (Redis Streams or Pulsar) that pushes to WebSocket servers.  
4. **Cache layer** – Redis for hot comment threads; TTL ≈ 5 min.  
5. **Moderation pipeline** – separate microservice reads from the log, flags content, updates DB flag column.

**3️⃣ Depth**  
- *Scalability*: Partition Kafka by post‑ID to preserve order. Scale consumers horizontally.  
- *Consistency*: Use ACID writes in Postgres for comment creation; eventual consistency in NoSQL.  
- *Latency*: WebSocket push ensures < 200 ms. Cache hit rate ≈ 90 %.  
- *Complexity*: O(log N) for DB insert, O(1) cache read, O(burst) for broker.

**4️⃣ Edge Cases**  
- Burst spikes → auto‑scale Kafka brokers & consumers.  
- Comment deletion → soft delete flag + purge job.  
- Moderator false positives → rollback via event replay.  
- Network partitions – use quorum reads in Cassandra.

**5️⃣ Optimize & Communicate**  
- Introduce *pre‑fetching* of comments for popular threads to reduce load.  
- Employ CDN edge caching for static comment rendering.  
- Measure SLOs: 99th percentile latency < 200 ms, 99.9% uptime.  
Explain trade‑offs (consistency vs latency) and how monitoring will surface bottlenecks early.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
