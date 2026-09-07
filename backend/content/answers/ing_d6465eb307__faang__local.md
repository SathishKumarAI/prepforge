---
qid: ing_d6465eb307__faang__local
question: 'Explain: Bonsai Blog | Fully Managed Elasticsearch & OpenSearch • Why Elasticsearch
  should not be your Primary Data Store'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 630
total_tokens: 874
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:57:31-05:00'
sources: []
---

**Clarify**  
You’re asking why a production system should *avoid* using Elasticsearch/OpenSearch as the sole, primary data store for all data (e.g., relational or transactional workloads). Key assumptions:  
- The workload includes both analytical/search queries and OLTP‑style updates/consistency needs.  
- You need strong ACID guarantees, durable writes, and complex joins.

**Approach**  
1. Identify the core strengths of Elasticsearch/OpenSearch.  
2. Map those to typical use cases (search, log aggregation).  
3. Contrast with requirements of a primary data store (ACID, schema evolution, relational integrity).  
4. Highlight operational pitfalls if it’s used as “everything”.

**Depth**  

| Feature | OpenSearch/Elasticsearch | Primary DB (e.g., Postgres, MySQL) |
|---------|--------------------------|------------------------------------|
| **Data Model** | Document‑based, denormalized; no foreign keys or joins. | Relational tables, ACID transactions. |
| **Consistency** | Eventual consistency for writes; optimistic concurrency control. | Strong consistency, multi‑row transactions. |
| **Durability** | Uses append‑only logs and snapshots; crash recovery is slower than WAL‑based DBs. | Write‑ahead log (WAL) guarantees instant durability. |
| **Schema Evolution** | Requires reindexing or dynamic mapping changes; costly at scale. | ALTER TABLE, migrations are lightweight. |
| **Index Size & Memory** | Entire index must be in memory for fast search → high RAM cost. | Storage‑centric; can use disk and cache efficiently. |
| **Operational Complexity** | Requires shard management, rebalancing, and careful tuning of JVM GC. | Mature tooling, easier scaling with read replicas or sharding. |

If you store *all* data in OpenSearch:  
- You lose transactional guarantees → race conditions on concurrent updates.  
- Schema changes become expensive rollouts.  
- Large tables force huge RAM budgets; query latency grows.  
- Analytics that need joins or aggregations across unrelated entities break down.

**Edge Cases**  
- **High write throughput with strict ordering**: OpenSearch’s eventual consistency can cause duplicate or out‑of‑order records.  
- **Complex reporting**: Without join support, denormalization leads to data duplication and stale reads.  
- **Audit trails**: Need immutable logs; OpenSearch snapshots are not tamper‑proof.

**Optimize & Communicate**  

*Improvement*: Use OpenSearch as a **secondary index**—write the canonical state into a relational DB (or a KV store), then push relevant fields to OpenSearch for fast search.  
*Communication*: Explain that this architecture gives you ACID guarantees where needed, while leveraging OpenSearch’s full‑text and analytics strengths without compromising data integrity or operational cost.

In short, treat Elasticsearch/OpenSearch as an *indexing engine*, not the primary persistence layer; this balances performance with reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
