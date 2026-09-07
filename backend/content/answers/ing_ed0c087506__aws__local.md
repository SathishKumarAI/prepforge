---
qid: ing_ed0c087506__aws__local
question: 'Explain: Search Service — Design Spotify | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 520
total_tokens: 755
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:14:24-05:00'
sources: []
---

**Scenario – Building a “Spotify‑style” search service**

> **Leadership Principles:** *Customer Obsession* & *Ownership*

### Situation
A music streaming startup needed to replace its ad‑hoc ElasticSearch cluster that lagged behind in latency (200 ms) and failed during peak traffic (10k QPS). The goal: sub‑100 ms response, 99.999% availability, and cost < $1 M/yr.

### Task
Own the end‑to‑end design: ingest pipeline, query layer, caching, monitoring, and rollback strategy.

### Action
| Component | Design & AWS Services | Rationale |
|-----------|-----------------------|-----------|
| **Ingestion** | Kinesis Data Streams → Lambda → DynamoDB (partitioned by artist) | Near‑real‑time updates; auto‑scales with traffic. |
| **Search Index** | OpenSearch Service (dedicated cluster, 3 AZs, reserved instances) + index sharding on `artist_id` | Handles full‑text & vector similarity (Spotify’s ANN). |
| **Query Layer** | API Gateway → Lambda@Edge + CloudFront caching (TTL 30 s) | Low‑latency global edge access. |
| **Cache** | ElastiCache Redis, read replicas per AZ | Reduce OpenSearch hits by 70% for popular queries. |
| **Observability** | CloudWatch metrics, X-Ray traces, SQS alerts | Real‑time health checks; auto‑rollback on SLA breach. |

### Result
- Latency dropped from 200 ms to **65 ms (average)** during a 3× traffic spike.  
- Availability reached **99.999%** over six months, beating the 99.9% target by 0.099%.  
- Operational cost reduced from $2.1 M/yr to **$0.95 M/yr** (≈ 55% savings).  

### Reflection
I *dove deep* into query patterns, discovered that 80% of traffic used fuzzy artist matching; this insight guided the ANN index choice. The biggest failure was an under‑provisioned OpenSearch node during a flash sale—fixed by implementing autoscaling policies and revising our SLAs. This experience reinforced my ownership mindset: continuously iterate on metrics, learn from incidents, and deliver measurable business value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
