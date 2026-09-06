---
qid: vq_629067d5b5__faang__local
question: Difference between logical and physical plan?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 525
total_tokens: 755
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:13:14-05:00'
sources: []
---

**Clarify**  
We’re asked to explain the distinction between a *logical* execution plan (what the query means) and a *physical* execution plan (how it will actually run). I’ll assume we’re talking about a typical SQL‑style engine like Spark or Hive, where a planner first builds a logical tree and then chooses operators for execution.

**Approach**  
1. Define each term.  
2. Illustrate with an example query.  
3. Highlight key differences (level of abstraction, optimization goals).  
4. Touch on how the two interact in practice.

**Depth**  

| Aspect | Logical Plan | Physical Plan |
|--------|--------------|---------------|
| **Purpose** | Represents the *semantics* of the query – tables, joins, predicates, aggregations. | Encodes the *runtime strategy* – specific join algorithms (hash, sort‑merge), file formats, parallelism, shuffle stages. |
| **Abstraction** | High‑level operators; no concern about data locality or resources. | Low‑level operators tied to cluster resources, network I/O, memory budgets. |
| **Optimization** | Logical optimizations: predicate pushdown, constant folding, join reordering. | Physical optimizations: selecting shuffle vs broadcast joins, choosing vectorized scans, caching intermediate results. |
| **Representation** | Tree of logical nodes (Scan → Filter → Join → Aggregate). | Same tree but each node annotated with execution details; may split into stages and tasks. |

*Example*: For `SELECT * FROM A JOIN B ON A.id=B.id WHERE A.status='active'`, the logical plan would have a Scan on A, Scan on B, Filter(A.status), and Join. The physical plan might decide to broadcast B (if small) and use a hash join, schedule two map tasks for each scan, then shuffle A’s rows.

**Edge Cases**  
- Queries with window functions or user‑defined aggregates need special logical nodes that translate into multiple physical stages.  
- When the planner cannot find a feasible physical operator (e.g., missing statistics), it falls back to defaults—this can break performance assumptions.

**Optimize & Communicate**  
Explain how the planner iteratively transforms the logical tree, collects stats, then maps each node to a concrete operator, noting that any change in one layer propagates. Summarize: *Logical plans capture “what” we want; physical plans capture “how” we get it efficiently.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
