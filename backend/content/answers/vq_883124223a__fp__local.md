---
qid: vq_883124223a__fp__local
question: What is a derived table?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 395
total_tokens: 561
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:44:33-05:00'
sources: []
---

**Derived tables are the engine‑room of SQL query optimisation.**

At their core they solve a *de‑duplication and pre‑aggregation* problem:  
when a query repeatedly scans the same sub‑expression (e.g., `SELECT id, COUNT(*) FROM orders GROUP BY id`), each outer reference forces the database to recompute that aggregation or join. A derived table materialises that result once—either temporarily in memory or on disk—and lets the outer query treat it as a simple base relation.

Why must this work this way?  
1. **Avoid redundant work** – computing an expensive sub‑query multiple times is linear in the number of outer references; materialising it turns this into constant‑time lookup.  
2. **Enable cost‑based optimisation** – the optimiser can estimate cardinality and join order using statistics on the derived table, just as if it were a real table.  
3. **Preserve declarative semantics** – the sub‑query remains logically isolated; its results are recomputed only when underlying data changes.

Derived tables connect to deeper principles:  
- *Information theory*: they compress repeated information into a single representation, reducing entropy for the engine.  
- *Geometry of query plans*: materialised results act as new vertices, altering the plan graph and enabling more efficient join trees.  

**Non‑obvious insight:** A derived table is not just a shortcut; it can *force* the optimiser to choose a different execution strategy (e.g., hash vs. nested loop) because the planner now sees explicit cardinality and can apply cost models that would otherwise be blind to intermediate results. This subtle shift often yields orders‑of‑magnitude performance gains in complex analytical workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
