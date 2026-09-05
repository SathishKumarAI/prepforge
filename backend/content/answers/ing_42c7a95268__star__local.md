---
qid: ing_42c7a95268__star__local
question: 'Explain: Read Replicas for Retrieval — Production Rag At Scale'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 372
total_tokens: 609
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:42:12-05:00'
sources: []
---

**Situation** – In my last role, our generative‑AI platform served 4 M daily users and the “retrieval” stage was choking the pipeline; latency spiked to 650 ms during peak hours, pushing SLA violations above 5 %. The backend relied on a single PostgreSQL cluster that handled both writes (index updates) and reads (document vector lookups).

**Task** – I had to cut read latency by at least 50 % without sacrificing data freshness or breaking the existing search API.

**Action** – I introduced a set of logical read replicas using PostgreSQL’s streaming replication. Each replica ran an optimized “read‑only” configuration: `max_connections` reduced, `shared_buffers` tuned for RAM, and `wal_receiver_timeout` shortened to keep sync tight. I wrapped the retrieval service in a round‑robin load balancer that also performed health checks against each replica. To preserve consistency for time‑sensitive queries, I implemented a “read‑through” cache with Redis; if a document was not found within 2 ms, it fell back to the nearest replica. Finally, I added automated failover scripts so replicas could be promoted in case of primary failure.

**Result** – Read latency dropped from 650 ms to 280 ms (a 57 % improvement), and the SLA violation rate fell below 0.2 %. The architecture also scaled linearly: adding a fifth replica reduced peak latency to 210 ms. I learned that careful replication tuning, combined with lightweight caching, can deliver sub‑300 ms retrievals even under massive load.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
