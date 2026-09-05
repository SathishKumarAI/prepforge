---
qid: ing_f449701445__star__local
question: 'Explain: Storage (5 Years) — Design URL Shortener | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 424
total_tokens: 670
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:36:37-05:00'
sources: []
---

**Situation**  
I was hired by a startup to build a global URL‑shortening service that needed to keep every shortened link alive for at least five years while serving millions of requests per second.

**Task**  
Design an architecture that guarantees 99.999% availability, scales horizontally, and satisfies the long‑term storage requirement without blowing up costs or degrading read latency.

**Action**  
I split the system into three layers: a write API, a cache layer, and a durable store. New URLs hit a stateless Flask API behind NGINX; the API first checks a 10 ms Redis cache for an existing key. If miss, it generates a 6‑character base‑62 ID, writes the mapping to a sharded PostgreSQL cluster (partitioned by hash of ID), and streams the same record to Kafka. A consumer writes each event into HDFS + Parquet files for long‑term archival; every 24 h an ETL job compresses older partitions into Amazon S3 Glacier, still queryable via Athena. Reads first hit Redis, then fall back to PostgreSQL if needed. I added TTL on Redis keys (90 days) and a background job that promotes hot URLs back to cache. For failover, each component runs in an Auto Scaling group across two AZs; we use Route53 health checks for the API.

**Result**  
The service handled 12 M RPS with <15 ms average read latency and 99.999% uptime during a year‑long load test. Cost per stored URL dropped to $0.00003 after migration to Glacier, meeting the five‑year retention budget. I learned how to combine in‑memory caching, relational durability, and cold storage to satisfy strict SLAs while keeping spend low.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
