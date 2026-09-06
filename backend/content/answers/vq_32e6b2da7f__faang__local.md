---
qid: vq_32e6b2da7f__faang__local
question: WHAT IS A QUERY EXECUTION PLAN, AND HOW DO YOU ANALYZE IT?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 468
total_tokens: 708
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:05:12-05:00'
sources: []
---

**Query Execution Plan (QEP)**  
A QEP is the roadmap a database engine follows to execute a SQL statement: it shows which indexes are used, how tables are joined, the order of operations, and the estimated costs for each step.

---

### 1️⃣ Clarify  
*What do we mean by “analyze”?*  
- Determine if the plan matches expectations (e.g., uses intended index).  
- Identify bottlenecks that inflate cost or I/O.  
Assumptions: RDBMS is a typical relational engine (PostgreSQL/MySQL/Oracle); user has `EXPLAIN` access.

### 2️⃣ Approach  
1. Run `EXPLAIN [ANALYZE] <query>`.  
2. Read the tree: nodes, join types, index scans vs sequential scans.  
3. Compare *estimated* cost vs *actual* runtime (if ANALYZE).  
4. Highlight high‑cost nodes and verify statistics.

### 3️⃣ Depth  
- **Cost model**: CPU + I/O units; lower cost ≈ faster plan.  
- **Join strategy**: nested loop, hash join, merge join—each has trade‑offs on data size.  
- **Index usage**: `Index Scan` vs `Bitmap Index Scan`.  
- **Parallelism**: check for parallel workers.  
Complexity: O(number of rows) for scans; hash joins can be O(n+m).  

### 4️⃣ Edge Cases  
- Outdated statistics → misleading costs.  
- Missing indexes → forced sequential scans.  
- Correlated subqueries causing repeated work.  
Test by altering stats, adding/removing indexes, and re‑running.

### 5️⃣ Optimize & Communicate  
1. Update statistics (`ANALYZE`).  
2. Add/adjust indexes (covering or composite).  
3. Rewrite query: push predicates, avoid SELECT *.  
4. Explain results to stakeholders using visual diagrams and cost numbers.  

**Bottom line:** A QEP is a diagnostic tool; careful reading of its nodes, costs, and actual timings guides targeted performance tuning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
