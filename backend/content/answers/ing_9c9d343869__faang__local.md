---
qid: ing_9c9d343869__faang__local
question: 'Explain: Multiple Tables and Window Logic: All Three Correct, One Much
  Slower'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 531
total_tokens: 769
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:48:03-05:00'
sources: []
---

**Clarify**  
The interviewer asks why three SQL solutions that all return the same result can differ dramatically in speed when they involve *window functions* on multiple tables. I’ll assume the data set is large, the tables are joined, and each query uses a windowed aggregation (e.g., `SUM() OVER (…)`).

**Approach**  
1. Identify how each query partitions/joins the data.  
2. Examine whether the window frame is computed once or repeatedly for every row.  
3. Look at the execution plan: scans, sorts, and materializations.

**Depth**  
- **Query A (fast)** – Uses a single table scan, builds an index on the partition key, then applies `SUM() OVER(PARTITION BY … ORDER BY …)` once; the engine can cache the running total.  
- **Query B (moderate)** – Joins two tables first, producing a large intermediate result. The window function is applied to this expanded set, forcing a sort on all rows before aggregation.  
- **Query C (slow)** – Performs a *cross‑join* or *nested loop join* that repeats the window calculation for every row of the outer table because the frame isn’t materialized. This leads to O(n²) work and many disk seeks.

The bottleneck is often the lack of a covering index on the partition/ordering columns, causing repeated sorting and re‑calculation of window frames.

**Edge Cases**  
- If the window frame uses `ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW`, the engine must scan the whole partition for each row.  
- Correlated subqueries inside a window can trigger per‑row execution.  
- Very wide tables may spill to disk if the sort buffer is insufficient.

**Optimize & Communicate**  
1. Add composite indexes on `(partition_key, order_by)` to allow the engine to stream the rows.  
2. Rewrite Query C to materialize the join result into a temporary table and then apply the window once.  
3. Use `PARTITION BY` only when necessary; otherwise consider pre‑aggregating with a regular `GROUP BY`.  

Explain that the key insight is *when* the window function runs: if it’s executed after every row of an expanded join, the cost explodes. By structuring joins first, materializing intermediates, and indexing partition columns, we keep the window logic linear in the number of rows.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
