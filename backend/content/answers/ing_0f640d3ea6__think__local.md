---
qid: ing_0f640d3ea6__think__local
question: 'Explain: Query Optimization — A Cheatsheet on Database Performance'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 466
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T03:44:02-05:00'
sources: []
---

**1. Clarify the scope & assumptions**  
   - Identify what “query optimization” means in your context (SQL vs NoSQL, OLTP vs OLAP).  
   - Assume you’re dealing with a relational DB that supports an optimizer, statistics, and indexes.  

**2. Adopt a mental model: the query‑execution pipeline**  
   1. **Parsing & semantic checking** → build a logical plan.  
   2. **Logical optimization** → rewrite operators (join order, predicates).  
   3. **Physical planning** → choose access methods (sequential scan, index seek) and join algorithms.  
   4. **Cost estimation & plan selection** → pick the lowest‑cost plan.

**3. Step‑by‑step reasoning**  
   - Start by examining the query text: look for predicates, joins, aggregates.  
   - Identify candidate indexes (single or composite).  
   - Check statistics freshness; update if stale.  
   - Use EXPLAIN/ANALYZE to see the optimizer’s chosen plan and cost breakdown.  
   - If the plan is suboptimal, consider: adding/removing indexes, rewriting predicates, hinting join order, partitioning tables.

**4. Common traps to avoid**  
   - Relying on “index everything” – can hurt writes and increase I/O.  
   - Ignoring data distribution; a high‑selectivity index may still scan many rows.  
   - Assuming the optimizer is perfect—always validate with real execution stats.  
   - Forgetting that statistics must be updated after major data changes.

**5. Sanity‑check & communicate**  
   - Verify that the chosen plan actually reduces cost metrics (CPU, I/O).  
   - Compare before/after query times and resource usage.  
   - Explain to stakeholders: “We added a composite index on `(customer_id, order_date)` which reduced the join scan from 500 k rows to 5 k, cutting runtime by ~80 %.”  

This structured approach lets you dissect any performance issue methodically and communicate solutions clearly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
