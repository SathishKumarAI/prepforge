---
qid: vq_0b7c8a81f4__fp__local
question: What is Union, minus and Interact commands?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 472
total_tokens: 642
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:22:19-05:00'
sources: []
---

### Union, Minus, and Intersect – a first‑principles view

In relational algebra every table is a **set** (or multiset) of tuples.  
When we want to combine results from two queries we ask: *which tuples belong to at least one set? Which belong to both? Which belong to only the first?*  

- **UNION** implements the logical “OR”: it returns the **union** of two sets, discarding duplicates (unless `ALL` is specified).  
  Mathematically, if \(A\) and \(B\) are relations, \(\text{UNION}(A,B)=\{t|t∈A∨t∈B\}\).  
- **INTERSECT** implements “AND”: it returns only those tuples present in *both* sets: \(\text{INTERSECT}(A,B)=\{t|t∈A∧t∈B\}\).  
- **MINUS / EXCEPT** implements “only A”: the difference of two sets, \(\text{MINUS}(A,B)=\{t|t∈A∧t∉B\}\).

These operations are *idempotent* and *commutative* (for UNION and INTERSECT), reflecting fundamental properties of set algebra. They arise naturally from the optimization principle: any query that filters or merges two result sets can be expressed as a combination of these primitive set operations, enabling the optimizer to rewrite plans, push predicates, or materialize intermediate results efficiently.

**Non‑obvious insight:**  
Because SQL tables are *unordered*, UNION/INTERSECT/MINUS must ignore order. This forces the engine to **hash** or **sort** tuples internally, which is why these operations often dominate I/O and CPU costs in large pipelines. Understanding this cost model explains why analysts sometimes prefer explicit `JOIN` + `GROUP BY` over a raw UNION when dealing with massive data volumes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
