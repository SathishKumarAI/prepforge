---
qid: vq_9f5b8ff555__faang__local
question: With which function of a summary item in the COMPUTE AT option required
  ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 468
total_tokens: 706
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:25:30-05:00'
sources: []
---

**Clarify**  
You’re asking which *aggregate function* is used when you want a **summary item** in a `COMPUTE AT` clause (e.g., a SQL‐style `GROUP BY … COMPUTE AT`). The key point: the summary item must be an aggregate over the grouped rows.

**Approach**  
1. Identify the grouping columns (`GROUP BY`).  
2. For each column you want summarized, choose an aggregate that matches the desired metric (SUM for totals, AVG for averages, COUNT for counts, MIN/MAX for extremes).  
3. Write the `COMPUTE AT` clause using those functions.

**Depth**  
- **SUM(col)** – adds all values of `col`.  
- **AVG(col)** – computes mean; uses SUM/COUNT internally.  
- **COUNT(*) / COUNT(col)** – counts rows or non‑NULL entries.  
- **MIN/MAX(col)** – finds extreme values.  
- In SQL you can also use **FIRST_VALUE**, **LAST_VALUE** for windowed aggregates if the engine supports it.

Complexity: each aggregate runs in *O(n)* over its group; overall query is *O(n log n)* due to grouping unless indexed.  

**Edge Cases**  
- NULL handling: `SUM` ignores NULLs, `COUNT(col)` does too.  
- Division by zero in `AVG`.  
- Large groups may require materialized views or indexing.

**Optimize & Communicate**  
Explain that using the most selective index on the grouping columns reduces sort cost. If you need only a few aggregates, avoid computing unnecessary ones to save CPU and I/O. Summarize: “Use SUM/AVG/COUNT/MIN/MAX depending on what summary you need; they’re built‑in, linear time, and handle NULLs predictably.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
