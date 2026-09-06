---
qid: vq_bf08ffcc60__faang__local
question: WHAT IS A COVERING INDEX?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 425
total_tokens: 655
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:31:02-05:00'
sources: []
---

**Clarify**  
A *covering index* (also called a covering table or covering index) is an index that contains all the columns required to satisfy a query, so the database can answer the query without touching the base table.  
Assumptions: we’re talking about relational engines that support composite indexes and “index‑only scans” (e.g., MySQL InnoDB, PostgreSQL).

**Approach**  
1. Explain the purpose: reduce I/O by avoiding lookups in the heap.  
2. Describe how it is built: include all columns needed for SELECT, WHERE, JOIN, ORDER BY.  
3. Mention that it works only if the index covers *all* referenced columns.

**Depth**  
- In a covering index, each leaf node stores the key values plus any non‑key attributes that are part of the `INCLUDE` list (PostgreSQL) or part of the composite key (MySQL).  
- The engine performs an *index‑only scan*: it reads the index pages and returns rows directly.  
- Performance gains: fewer page fetches, less CPU for tuple decoding, lower cache pressure.  
- Trade‑off: larger indexes, more write overhead (updates must touch both table and index), potential bloat.

**Edge Cases**  
- Queries that reference columns not in the index → fall back to heap access.  
- Wide or frequently updated tables may negate benefits due to maintenance cost.  
- Nullable columns or large BLOBs can inflate index size, hurting cache locality.

**Optimize & Communicate**  
Explain when to use: read‑heavy OLTP workloads with predictable query patterns. Suggest testing by running `EXPLAIN` plans before/after adding the covering index. Emphasize monitoring I/O and CPU metrics to confirm gains. Conclude that a well‑designed covering index can turn an index scan into an index‑only scan, dramatically improving query latency at the cost of additional storage and write overhead.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
