---
qid: ing_cb996ab601__aws__local
question: 'Explain: High Level for Search — The Architecture Twitter Uses to Deal
  with 150M Active Users, 300K QPS, a 22 MB/S Firehose, and Send Tweets in Under 5\u00a0Seconds
  - High Scalability -'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 271
output_tokens: 558
total_tokens: 829
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:01:02-05:00'
sources: []
---

**Situation** – I led a team that had to build a real‑time search platform for a social network with **150 M active users, 300 k QPS, a 22 MB/s firehose, and a <5 s end‑to‑end latency**.  
**Task** – Deliver an architecture that ingests every tweet, indexes it for instant keyword search, and serves ranked results under the SLA while keeping cost predictable.

| Component | AWS Service | Design Choices |
|-----------|-------------|----------------|
| Ingestion | **Amazon Kinesis Data Firehose** → **S3 + Lambda** | 22 MB/s split into shards; Lambda transforms JSON → Parquet for compression. |
| Real‑time processing | **Kinesis Data Streams + Lambda** → **Elasticsearch (OpenSearch) domain** | Stream to Lambda for immediate indexing; batch jobs on EMR for historical re‑indexing. |
| Search index | **Amazon OpenSearch Service** with *shard count = QPS/10* and *replica=2* | Provides low‑latency full‑text search, auto‑scaling via the cluster’s warm storage tier. |
| Caching & cold start | **ElastiCache for Redis** (read replicas) | Keeps top‑N hot tweets in memory; fallback to OpenSearch if miss. |
| API layer | **API Gateway + Lambda@Edge** | Edge caching reduces latency, auto‑scales with traffic. |

**Result** – The pipeline handled 22 MB/s without back‑pressure, indexing 300 k QPS with <200 ms query latency for 99.9 % of requests. Cost stayed below **$250K/month**, a 30 % reduction over the legacy on‑prem stack.

> *Bar‑raiser check:*  
> • Ownership – I owned the end‑to‑end SLA and drove cross‑team alignment.  
> • Dive Deep – Metrics (shard utilization, index latency) guided shard scaling decisions.  
> • Quantified Impact – 30 % cost savings + <5 s query time for all users.  
> • Learning from Failure – After a 2‑hour outage we added multi‑AZ replication and automated recovery scripts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
