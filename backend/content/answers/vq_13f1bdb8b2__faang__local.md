---
qid: vq_13f1bdb8b2__faang__local
question: WHAT IS A CORRELATED SUBQUERY?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 502
total_tokens: 733
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:58:44-05:00'
sources: []
---

## Clarify  
A correlated subquery is a SELECT statement nested inside another query that **depends on columns from the outer query**. It executes once for each row processed by the outer query, allowing row‑by‑row comparison or aggregation.

*Assumptions to confirm:*  
- We’re working with SQL (ANSI/Oracle/PostgreSQL).  
- The database engine supports correlated subqueries and evaluates them per row.  

## Approach  
1. Identify columns in the inner SELECT that reference outer query tables.  
2. Explain evaluation: for each outer row, run the subquery, returning a scalar or set used by the outer clause (WHERE/SELECT/HAVING).  
3. Contrast with non‑correlated subqueries that can be executed once and materialized.

## Depth  
```sql
SELECT e.name,
       (SELECT COUNT(*) 
        FROM sales s 
        WHERE s.emp_id = e.id) AS total_sales
FROM employees e;
```
Here `s.emp_id` references `e.id`; the inner query runs per employee. It’s equivalent to a JOIN but can be slower if not indexed.  
Correlated subqueries often appear in predicates:

```sql
SELECT *
FROM orders o
WHERE EXISTS (
    SELECT 1 FROM shipments sh
    WHERE sh.order_id = o.id AND sh.status = 'delivered'
);
```

### Complexity & Trade‑offs  
- **Time:** O(n*m) if no indexes; each outer row triggers a subquery.  
- **Optimization:** Rewrite as JOIN or use indexed columns to reduce scans.  
- **Use cases:** When you need per‑row aggregation that can’t be expressed with GROUP BY alone.

## Edge Cases  
- Subquery returns multiple rows → error unless used in IN/ANY.  
- NULL handling: correlated conditions may produce unexpected results if outer column is NULL.  
- Performance regressions on large tables without proper indexes.

## Optimize & Communicate  
Explain that while correlated subqueries are expressive, they can be costly; recommend rewriting with JOINs or window functions when possible. Highlight how to test by comparing execution plans (`EXPLAIN`) and ensuring indexes on the referenced columns. This structured explanation shows clear problem understanding, technical depth, and awareness of performance trade‑offs—key signals for FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
