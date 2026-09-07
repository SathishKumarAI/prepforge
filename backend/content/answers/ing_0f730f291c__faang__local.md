---
qid: ing_0f730f291c__faang__local
question: 'Explain: Relational DB — Types of Databases'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 522
total_tokens: 755
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:19:25-05:00'
sources: []
---

**Clarify**  
We’re asked to explain how relational databases differ by type—essentially the major “flavors” (OLTP, OLAP, hybrid) and what each is optimized for. I’ll assume the interviewee wants a concise overview with examples (MySQL, PostgreSQL, Snowflake, Redshift).

---

**Approach**  
1. Define the core relational model.  
2. Categorize by workload: Transaction‑oriented vs. Analytical.  
3. Highlight key architectural differences (storage engine, indexing, concurrency).  
4. Give a quick example of when to pick each.

---

**Depth**

| Type | Focus | Typical Use | Key Features |
|------|-------|-------------|--------------|
| **OLTP (Online Transaction Processing)** | Fast inserts/updates, low latency | E‑commerce order processing | Row‑oriented storage, ACID guarantees, B‑tree indexes, MVCC. Example: PostgreSQL, MySQL InnoDB. |
| **OLAP (Online Analytical Processing)** | Complex aggregations, high read throughput | BI dashboards, data warehousing | Columnar storage, vectorized execution, massive parallelism. Examples: Snowflake, Amazon Redshift, Google BigQuery. |
| **Hybrid/HTAP** | Combines both workloads | Real‑time analytics on live data | In‑memory caching, hybrid column/row stores, support for ACID + high throughput. Example: SAP HANA, VoltDB. |

*Complexity:*  
- OLTP queries are *O(log n)* with B‑tree lookups; write contention is mitigated by MVCC.  
- OLAP systems achieve sub‑second scans on terabytes via vectorized columnar reads.

---

**Edge Cases**

- **Heavy write bursts**: OLAP may suffer; use a separate ingestion pipeline.  
- **Real‑time reporting on transactional data**: OLTP alone is slow—requires materialized views or HTAP.  
- **Schema evolution**: Columnar stores can struggle with frequent schema changes.

---

**Optimize & Communicate**

If asked to pick, I’d recommend starting with an OLTP system for core business logic and a separate columnar warehouse (or hybrid) for analytics. Explain trade‑offs: consistency vs. speed, storage cost vs. query latency. Conclude by noting that modern cloud platforms often abstract these choices, letting you deploy “data lakehouse” architectures when needed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
