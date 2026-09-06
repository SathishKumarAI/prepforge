---
qid: vq_2de2c6d35f__faang__local
question: HOW DO YOU PERFORM A PIVOT IN SQL?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 475
total_tokens: 710
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:04:20-05:00'
sources: []
---

**Clarify**  
The interview asks how to “pivot” a table—turn row‑level values into columns (e.g., sales per month). Confirm: *Are we using ANSI‑SQL or a specific RDBMS?* *Do we need a static set of pivot keys, or dynamic?* *What about NULL handling and aggregation?*

**Approach**  
1. Identify the dimension to become columns (`pivot_col`).  
2. Choose an aggregate (SUM, COUNT, MAX).  
3. Use `CASE` expressions inside the aggregate for each desired column.  
4. Optionally, wrap in a CTE or derived table for readability.

**Depth**  
```sql
-- Example: sales per month for each product
SELECT
    product_id,
    SUM(CASE WHEN month = 1 THEN amount ELSE 0 END) AS Jan,
    SUM(CASE WHEN month = 2 THEN amount ELSE 0 END) AS Feb,
    /* … */
    SUM(CASE WHEN month = 12 THEN amount ELSE 0 END) AS Dec
FROM sales
GROUP BY product_id;
```
*Complexity*: O(n) scan, one pass.  
*Trade‑offs*: Hard‑coding columns limits flexibility; dynamic pivot requires `PIVOT` (SQL Server), `crosstab` (PostgreSQL), or client‑side generation.

**Edge Cases**  
- Missing months → zeros vs NULLs.  
- Duplicate keys → aggregation correctness.  
- Large cardinality of pivot values → table blowup, performance hit.

**Optimize & Communicate**  
If the set of pivot values is dynamic, build a query string with `STRING_AGG` (PostgreSQL) or use `PIVOT`/`UNPIVOT`. Cache the result if it’s read‑heavy. Explain that this method keeps the query deterministic, easy to test, and leverages the database engine’s optimizer.  

This structured answer demonstrates clear problem framing, a practical solution, awareness of edge conditions, and an eye toward scalability—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
