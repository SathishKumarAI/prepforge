---
qid: ing_7fc603149c__faang__local
question: 'Explain: Expression Indexes — Indexing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 444
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:42:23-05:00'
sources: []
---

**Clarify**  
We’re asked how *expression indexes* (also called functional or computed indexes) work in a database and why they’re useful for ML workloads that query derived columns (e.g., `log(score)` or `to_tsvector(text_col)`). I’ll assume the DB supports them (PostgreSQL, MySQL 8+, Oracle, etc.) and that we want to speed up scans on those expressions.

**Approach**  
1. Define an index‑by‑expression: a B‑Tree/GIN/etc. whose leaf keys are the values of the expression applied to each row.  
2. When inserting/updating, the engine evaluates the expression and stores the result in the index.  
3. Queries that use the same expression can hit the index directly instead of scanning rows.

**Depth**  
- **Creation syntax** (PostgreSQL): `CREATE INDEX idx ON tbl ((log(score)));`  
- The index is *materialized*—the engine pre‑computes and stores the value, so reads are O(log n).  
- For GIN indexes on text search vectors: `CREATE INDEX idx ON docs USING gin(to_tsvector('english', content));`.  
- Updates trigger re‑evaluation of the expression; heavy write traffic can be a trade‑off.  
- Storage overhead equals the size of the expression result plus pointers.

**Edge Cases**  
- Non‑deterministic functions (e.g., `random()`) can’t be indexed.  
- If the underlying column changes frequently, index maintenance cost may outweigh benefits.  
- Expression involving multiple columns requires a composite index; order matters for query planner.

**Optimize & Communicate**  
To decide on an expression index:  
1. Profile queries—identify expensive predicates on derived values.  
2. Estimate write amplification vs read benefit.  
3. Test with realistic data volumes and update rates.  
Explain that this technique turns a runtime computation into a static lookup, dramatically reducing CPU and I/O for ML‑style analytic queries while keeping the schema clean.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
