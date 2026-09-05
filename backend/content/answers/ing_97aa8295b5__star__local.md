---
qid: ing_97aa8295b5__star__local
question: 'Explain: Scaling — SQL vs NoSQL | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 365
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:36:01-05:00'
sources: []
---

**Situation:**  
At my last startup we built a recommendation engine that served personalized content to 4 M daily active users. Our data pipeline stored user interaction logs in PostgreSQL, and the model inference layer pulled raw events on demand. By Q2 the latency hit 300 ms per request, and our cost was climbing as we sharded the database across three nodes.

**Task:**  
I had to redesign the ingestion and serving layers so that read latency dropped below 80 ms, throughput stayed above 10k requests/second, and infrastructure costs fell by at least 30 %.

**Action:**  
First, I profiled queries with pg_stat_statements and discovered that the heavy joins were due to a highly normalized schema. I migrated the event store to Apache Cassandra, modeling it as a denormalized wide‑column table keyed by user_id and timestamp. This allowed efficient point reads and time‑range scans without joins. For the ML model serving, I switched from a monolithic Flask app to a stateless FastAPI service backed by Redis cache for hot embeddings. I also introduced schema versioning in Cassandra to enable online A/B testing of feature sets without downtime.

**Result:**  
Read latency dropped to 45 ms on average, throughput increased to 15k req/s, and infrastructure spend fell from $12K/month to $7.5K/month—a 38% cost reduction. I learned that choosing the right data store hinges on access patterns: SQL shines for complex transactions, while NoSQL excels in high‑volume, read‑heavy ML workloads when schema can be denormalized.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
