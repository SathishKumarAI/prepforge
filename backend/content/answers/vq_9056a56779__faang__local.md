---
qid: vq_9056a56779__faang__local
question: WHAT IS A SUBQUERY IN SQL?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 483
total_tokens: 714
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:22:29-05:00'
sources: []
---

## Clarify  
We’re asked: *What is a sub‑query in SQL?*  
Assumptions I’d confirm:  
- The database supports nested SELECTs (e.g., PostgreSQL, MySQL).  
- We’re discussing relational algebra rather than procedural extensions.

## Approach  
Explain the concept, give a concrete example, mention where it fits in query processing, and note its impact on performance and readability.

## Depth  

A **sub‑query** (or nested SELECT) is a SELECT statement that appears inside another SQL statement—typically within `WHERE`, `HAVING`, `FROM`, or `SELECT` clauses.  
- **Scalar sub‑query:** returns one value used in an expression:  
  ```sql
  SELECT name, (SELECT MAX(score) FROM exams WHERE student_id = s.id)
  FROM students s;
  ```
- **Row/Set sub‑query:** returns multiple rows/columns used with operators like `IN`, `ANY`, or as a derived table:  
  ```sql
  SELECT * FROM orders o
  WHERE o.customer_id IN (SELECT id FROM customers WHERE country = 'US');
  ```

During query planning, the engine may materialize the sub‑query once and reuse it, or inline it. Sub‑queries can be correlated (referencing outer query columns) or uncorrelated.

## Edge Cases  
- **Correlated sub‑queries** can be expensive; they run per row of the outer query.  
- **NULL handling**: `IN` with NULLs yields unknown unless explicitly handled.  
- **Empty result sets**: scalar sub‑queries returning no rows produce NULL, potentially altering logic.

## Optimize & Communicate  
To improve performance:  
1. Replace correlated sub‑queries with JOINs or EXISTS when possible.  
2. Use indexes on columns referenced in the sub‑query predicates.  
3. Prefer set operations (`EXISTS`, `IN`) over scalar sub‑queries for clarity.  

When explaining, I’d walk through a simple example, then discuss trade‑offs (readability vs. execution cost) and how to profile with `EXPLAIN`. This demonstrates structured thinking, depth, and communication—key FAANG interview signals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
