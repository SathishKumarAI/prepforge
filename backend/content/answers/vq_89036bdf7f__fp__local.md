---
qid: vq_89036bdf7f__fp__local
question: What is the difference between Regular Subquery and Correlated Subquery?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 478
total_tokens: 652
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:44:42-05:00'
sources: []
---

**Regular vs. correlated subqueries**

A *regular* (or *non‑correlated*) subquery is a self‑contained SELECT that can be evaluated once, producing a set of values that the outer query merely consumes.  
Example:  

```sql
SELECT name
FROM employees e
WHERE dept_id IN (SELECT id FROM departments WHERE location = 'NY');
```

The inner SELECT runs independently; its result is cached and reused for every row of `employees`.

A *correlated* subquery, in contrast, contains columns from the outer query. Consequently it must be re‑executed for each row processed by the outer query because the inner predicate depends on that particular row’s values.  

```sql
SELECT e.name
FROM employees e
WHERE EXISTS (
    SELECT 1 FROM sales s
    WHERE s.emp_id = e.id AND s.amount > 1000);
```

Here `s.emp_id = e.id` forces a re‑evaluation per employee.

**Why the difference matters**

- **Execution plan**: Regular subqueries can be materialized or merged into joins, giving linear time complexity. Correlated ones typically become nested loops, yielding O(n·m) cost unless the DB rewrites them (e.g., via semi‑joins).
- **Optimization leverages independence**: A regular subquery allows predicate pushdown and indexing on its own columns; a correlated one couples the two relations, limiting such optimizations.

**Non‑obvious insight**

Correlated subqueries are *not* inherently worse; they can express constraints that a single join cannot without introducing unnecessary intermediate results. For instance, computing “employees who have sold more than their department’s average” is elegantly written as:

```sql
SELECT e.name
FROM employees e
WHERE EXISTS (
    SELECT 1 FROM sales s
    WHERE s.emp_id = e.id AND s.amount >
          (SELECT AVG(amount) FROM sales WHERE emp_id IN
               (SELECT id FROM employees WHERE dept_id = e.dept_id)));
```

A join‑based rewrite would require a self‑join and aggregation that is harder to maintain. Thus, while correlated subqueries can be expensive, they offer a concise way to express per‑row dependent logic that would otherwise need more complex relational algebra.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
