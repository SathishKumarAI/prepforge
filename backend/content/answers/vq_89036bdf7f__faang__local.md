---
qid: vq_89036bdf7f__faang__local
question: What is the difference between Regular Subquery and Correlated Subquery?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 412
total_tokens: 649
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:20:53-05:00'
sources: []
---

**Clarify**  
The interviewer wants the distinction between a *regular* (non‑correlated) subquery and a *correlated* subquery in SQL. Assume both are used within a `SELECT`, `WHERE`, or `HAVING` clause, and that we’re comparing performance implications.

**Approach**  
1. Define each term.  
2. Explain execution flow differences.  
3. Highlight when each is appropriate and the cost impact.

**Depth**  
- **Regular (non‑correlated) subquery**: Evaluated once per outer query; its result set is materialized before the outer statement processes rows. Example: `SELECT * FROM orders WHERE customer_id IN (SELECT id FROM customers);`.  
- **Correlated subquery**: Re‑evaluated for every row of the outer query because it references columns from that row. Example: `SELECT * FROM orders o WHERE EXISTS (SELECT 1 FROM shipments s WHERE s.order_id = o.id AND s.status='delivered');`.  
Execution: a regular subquery can be optimized with indexes or precomputed tables; a correlated one forces repeated scans or lookups, often leading to nested loops and higher I/O.

**Edge cases**  
- If the inner query is cheap (e.g., `SELECT 1`), correlation may not hurt.  
- Correlated subqueries that return scalar values can sometimes be rewritten as joins for better performance.  
- Large result sets in regular subqueries may benefit from temporary tables or materialized views.

**Optimize & Communicate**  
Explain that to improve a correlated subquery, you could transform it into an `INNER JOIN` or use window functions if the logic permits. Highlight trade‑offs: readability vs. speed. Conclude by stressing that understanding these differences is crucial for writing efficient ETL pipelines and ensuring scalable data processing at FAANG scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
