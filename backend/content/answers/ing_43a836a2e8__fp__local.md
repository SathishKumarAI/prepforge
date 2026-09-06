---
qid: ing_43a836a2e8__fp__local
question: 'Explain: Slower Database Queries — 8 Common System Design Problems and
  Solutions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 540
total_tokens: 715
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:29:42-05:00'
sources: []
---

**Why do queries stall?**  
In an ML pipeline the database is a *rate‑limiting factor* because every training or inference step depends on data that arrives through SQL or NoSQL calls. The fundamental problem is that the **information flow** between the model and its data source is bottlenecked by suboptimal design choices that inflate latency or reduce throughput.

| # | Problem | Why it hurts | Solution |
|---|---------|--------------|----------|
| 1 | **Unindexed columns** | Each scan costs *O(n)*; models waste GPU cycles waiting. | Add B‑tree or hash indexes on predicates used in joins, filters, and group‑by clauses. |
| 2 | **Cartesian joins** | Exponential row explosion before ML sees data. | Rewrite with explicit foreign‑key constraints; use `JOIN … ON` instead of implicit cross products. |
| 3 | **Large result sets** | Network I/O dominates CPU. | Paginate or stream results; fetch only the columns needed for feature extraction. |
| 4 | **Hot tables** | Lock contention stalls concurrent training jobs. | Partition hot tables (sharding) and use row‑level locking or MVCC to reduce conflicts. |
| 5 | **Denormalized schemas** | Redundant data forces repeated lookups. | Normalize critical dimensions; cache derived aggregates in a separate analytics store. |
| 6 | **Inefficient subqueries** | Repeated scans for each outer row. | Materialize subquery results as temporary tables or indexed views before joining. |
| 7 | **Poor connection pooling** | Frequent hand‑shake overhead per request. | Configure a robust pool (e.g., HikariCP) with enough idle connections to cover peak ML jobs. |
| 8 | **Inadequate indexing on analytics engines** | OLAP queries become serial and slow. | Deploy columnar storage or use distributed query engines (Presto, Spark SQL). |

> **Hidden insight:** The *shape* of the data (wide vs. tall) matters more than raw size; wide tables inflate CPU cache misses, while tall tables increase I/O latency. Tailoring the schema to the access pattern—often a tall‑and‑thin format for feature vectors—can halve query time without any new hardware.

By systematically addressing these eight design culprits, you transform database latency from an opaque bottleneck into a predictable, optimizable component of your ML workflow.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
