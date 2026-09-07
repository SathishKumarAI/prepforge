---
qid: ing_ee59c4100c__faang__local
question: 'Explain: Data storage — System Design Interview Cheat Sheet - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 505
total_tokens: 741
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:54:22-05:00'
sources: []
---

## Clarify  
You’re asking for a concise cheat‑sheet on **data‑storage decisions in system‑design interviews**—the trade‑offs between relational, NoSQL, object stores, and caching layers. I’ll assume we need to support high read/write throughput, horizontal scalability, and eventual consistency, typical of a web‑scale product.

## Approach  
1. **Define requirements** (ACID vs. CAP, latency targets, data model).  
2. **Map use‑cases to storage types**: transactional → RDBMS; large blobs → object store; flexible schema → document/column stores.  
3. **Layer the stack**: persistent DB + cache + CDN + backup.

## Depth  
| Layer | Typical Choice | Strengths | Trade‑offs |
|-------|----------------|-----------|------------|
| **Primary persistence** | PostgreSQL / MySQL (ACID) | Strong consistency, joins | Limited horizontal scaling |
| | Cassandra / DynamoDB (AP) | Wide‑column, linear scale | Eventual consistency, weaker transactions |
| | MongoDB / Couchbase (document) | Schema‑flexible, rich query | Less mature transaction support |
| **Object storage** | S3/MinIO | Unlimited size, durability | No structured queries |
| **Cache** | Redis / Memcached | Sub‑ms reads, pub/sub | In‑memory cost, cache‑miss penalty |
| **CDN** | CloudFront / Akamai | Edge latency for static assets | Cache invalidation complexity |

Key patterns: *Read‑through caching*, *write‑through to DB + async batch writes*, *event sourcing* for audit logs.

## Edge Cases  
- **Hotspot partitions** in NoSQL → consistent hashing & rebalancing.  
- **Cache stampedes** → lock‑out or double‑checked locking.  
- **Schema evolution** in relational DBs → migration pipelines with zero‑downtime swaps.

## Optimize & Communicate  
Explain that the “cheat sheet” is a decision matrix: start with requirements, pick the primary store, then layer caches and object storage to meet latency SLAs. Emphasize trade‑offs (CAP vs ACID), cost per read/write, and operational complexity. This structured narrative demonstrates both breadth and depth—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
