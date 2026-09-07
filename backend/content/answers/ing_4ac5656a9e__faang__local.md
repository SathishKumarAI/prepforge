---
qid: ing_4ac5656a9e__faang__local
question: 'Explain: Step 3 - Optimizer — SQL Statement Execution in Database'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 483
total_tokens: 720
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:38:26-05:00'
sources: []
---

**Clarify**  
You’re asking how a database optimizer decides on an execution plan for a given SQL statement (Step 3). I’ll assume: *single‑node relational DB*, *standard ANSI‑SQL*, and that the optimizer has access to catalog statistics.

**Approach**  
1. Parse → syntax tree.  
2. Generate logical operators (joins, scans, filters).  
3. Enumerate physical plans using cost‑based rules.  
4. Pick lowest‑cost plan; materialize/explain.  

**Depth**  
- **Cost model**: CPU + I/O + memory. For each operator we estimate rows via histograms and selectivity of predicates.  
- **Plan enumeration**: dynamic programming (DP) for joins (e.g., Selinger’s algorithm). DP stores best cost per subset of tables, building up to full join order.  
- **Heuristics**: index usage, hash‑join vs nested‑loop, parallelism thresholds.  
- **Statistics**: cardinality, null fraction, correlation. Missing stats → default heuristics (e.g., 10% selectivity).  
- Complexity: DP is O(2ⁿ n²) for *n* tables; practical systems use pruning and rule‑based shortcuts.

**Edge Cases**  
- Correlated subqueries or lateral joins break simple DP.  
- Skewed data → misestimated costs, leading to poor plans.  
- Outdated statistics cause suboptimal decisions.  
- Extremely large join graphs require approximate algorithms (e.g., greedy join ordering).

**Optimize & Communicate**  
- **Stat refresh**: incremental updates; use histogram sampling.  
- **Cost model tuning**: calibrate CPU/I/O weights from real workloads.  
- **Parallelism knobs**: expose thresholds to avoid thrashing.  
I’d narrate my reasoning by walking through a sample query, showing how the optimizer picks an index scan over a full table scan because the estimated row count after filtering is low, and how a hash join wins over nested loops when both tables are large but small enough for memory. This demonstrates clear problem‑solving, depth of knowledge, and practical awareness—key to a FAANG interview score.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
