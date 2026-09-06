---
qid: ing_8596e7c2dd__fp__local
question: 'Explain: Relational databases tend to have vertical scaling'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 349
total_tokens: 519
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:48:55-05:00'
sources: []
---

**Why relational databases usually need *vertical* scaling**

The core problem a relational database solves is *deterministic query evaluation over a fixed schema*.  
When a query arrives, the engine must:

1. **Locate the relevant rows** – this is done by hash or B‑tree indexes that are themselves stored in memory.
2. **Apply predicates and joins** – each join requires random access to tuples; the cost grows linearly with the number of rows *and* the amount of data moved through the CPU cache hierarchy.

Because the algorithmic complexity of these operations is **O(n)** (or worse for nested loops), adding more machines does not reduce the per‑row cost unless the data are partitioned in a way that preserves join locality. Most workloads, however, have *high cardinality* tables whose schemas and constraints (foreign keys, unique indexes) force joins across large sets of rows. Partitioning such tables breaks referential integrity or forces expensive cross‑node communication.

Hence the optimal strategy is to give the single node **more CPU, memory, and SSD throughput**—vertical scaling—so that all indexes fit in RAM and the engine can keep data in the fast cache levels, keeping latency low.

**Non‑obvious insight:**  
The *cost* of a join depends more on how many random accesses it triggers than on raw I/O. Vertical scaling improves CPU cache hit rates far better than adding nodes, which only helps when you can perfectly partition joins—an unlikely assumption for typical OLTP workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
