---
qid: ing_0450a84ea8__faang__local
question: 'Explain: Furniture — Designing Data-Intensive Applications Book'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 473
total_tokens: 707
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:54:24-05:00'
sources: []
---

**Clarify**

We’re asked to explain how the book *Designing Data‑Intensive Applications* (DDIA) applies to building a furniture‑e-commerce platform that must handle product catalogs, inventory, user sessions, and real‑time analytics.  
Key assumptions:  
- Traffic ~10 k QPS, 1M users, 5 TB catalog data.  
- Strong consistency needed for inventory updates; eventual consistency acceptable for search.

**Approach**

1. **Model the domain** – entities (Product, SKU, Inventory), relationships, and event streams (orders, returns).  
2. **Pick storage patterns** – relational DB for ACID inventory, NoSQL (Cassandra) for read‑heavy catalog, log‑based stream (Kafka) for change propagation.  
3. **Design data pipelines** – ingest orders → Kafka → microservices → write to both databases; use CDC to sync catalog changes.

**Depth**

- *Partitioning & sharding*: shard inventory by warehouse ID to localize writes and reduce contention.  
- *Replication*: synchronous replicas for critical tables, asynchronous for analytics tables.  
- *Consistency models*: Two‑phase commit or Sagas for cross‑service atomicity; eventual consistency with conflict resolution for product descriptions.  
- *Batch vs stream processing*: use Kafka Streams for real‑time inventory updates; Spark/Beam for nightly recommendation model training.  
Complexities: O(log n) lookups in B‑trees (SQL), O(1) access in key‑value stores, linear time for full table scans avoided via indexing.

**Edge Cases**

- Inventory race conditions → optimistic locking or lock‑free counters.  
- Catalog updates during search → versioned indexes to avoid stale reads.  
- Network partitions → graceful degradation: serve read replicas until primary recovers.

**Optimize & Communicate**

Iteratively profile hotspots; replace slow joins with denormalized views. Explain trade‑offs: higher consistency vs latency, single‑point failures vs CAP theorem constraints. Summarize the architecture in a diagram and highlight how each DDIA principle (partitioning, replication, durability) directly mitigates real‑world pain points for furniture e‑commerce.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
