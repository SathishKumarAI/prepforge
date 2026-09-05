---
qid: ing_43a836a2e8__star__local
question: 'Explain: Slower Database Queries — 8 Common System Design Problems and
  Solutions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 382
total_tokens: 623
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:44:18-05:00'
sources: []
---

**Situation:**  
At my last role I was leading the migration of our legacy e‑commerce platform to a microservices architecture. The product catalog service started hitting a 2 s average latency on read requests after we added new recommendation tags, and the order processing pipeline began timing out under peak traffic.

**Task:**  
I needed to identify the root causes of the slowness, reduce query times below 500 ms, and ensure the system could scale to 10k concurrent users without impacting the user experience.

**Action:**  
1. Added **explain plans** in Postgres to spot missing indexes on `catalog_tags(tag_id)` and created a composite index `(product_id, tag_id)`.  
2. Refactored slow joins by materializing a denormalized view of popular tags per product and scheduled nightly refreshes with `REFRESH MATERIALIZED VIEW CONCURRENTLY`.  
3. Implemented **read replicas** for read‑heavy queries and introduced **query caching** via Redis for the most frequent tag lookups, using an LRU eviction policy.  
4. Deployed a **connection pooler (PgBouncer)** to reduce connection overhead, and tuned `max_connections` and `statement_timeout`.  
5. Added instrumentation with Prometheus + Grafana to monitor query latency in real time.

**Result:**  
Average read latency dropped from 2 s to 250 ms, while the order pipeline’s timeout rate fell from 7% to <0.1%. The system now comfortably handled 15k concurrent users during flash sales. I learned that a systematic approach—profiling, indexing, denormalization, caching, and proper connection management—is essential for scalable database performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
