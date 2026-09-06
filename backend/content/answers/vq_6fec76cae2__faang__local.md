---
qid: vq_6fec76cae2__faang__local
question: What is a sub-query?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 469
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:16:01-05:00'
sources: []
---

**Clarify**  
A sub‑query is an SQL statement nested inside another query (SELECT/INSERT/UPDATE/DELETE). It returns a result set that the outer query consumes—either as a row value, a list of values, or a derived table. I’ll assume we’re talking about relational databases and standard ANSI‑SQL.

**Approach**  
1. Define the role of a sub‑query in the context of the main query.  
2. Explain the three common placements: scalar, IN/ANY, EXISTS.  
3. Illustrate with simple examples.  
4. Mention performance considerations (correlated vs non‑correlated).

**Depth**  
- **Scalar sub‑query** returns one value; used in SELECT or WHERE clauses.  
  ```sql
  SELECT name, (SELECT MAX(salary) FROM employees e2 WHERE e2.dept = e1.dept)
  FROM employees e1;
  ```
- **IN / ANY sub‑query** supplies a list of values:  
  ```sql
  SELECT * FROM orders o WHERE o.customer_id IN (SELECT id FROM customers WHERE country='US');
  ```
- **EXISTS / NOT EXISTS** checks for existence without returning data:  
  ```sql
  SELECT name FROM departments d WHERE EXISTS (SELECT 1 FROM employees e WHERE e.dept = d.id);
  ```
Correlated sub‑queries reference outer rows, causing execution per row and potential performance hits. Modern engines can often rewrite them into JOINs or use materialized views.

**Edge Cases**  
- Empty result sets → scalar returns NULL; IN/ANY yields no matches; EXISTS is false.  
- Sub‑query returning multiple columns in a context expecting one column raises an error.  
- Correlated sub‑queries on large tables can lead to cartesian explosion.

**Optimize & Communicate**  
Rewrite correlated sub‑queries as JOINs or use window functions when possible. Index the join keys and filter predicates inside the sub‑query. Explain that while sub‑queries improve readability, they may degrade performance; always benchmark with EXPLAIN plans and iterate on indexes or query rewrites.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
