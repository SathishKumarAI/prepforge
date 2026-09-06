---
qid: vq_6f171ccdcf__faang__local
question: WHAT ARE AGGREGATE FUNCTIONS IN SQL?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 481
total_tokens: 714
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:15:45-05:00'
sources: []
---

**Clarify**

> “What are aggregate functions in SQL?”  
> I’ll explain the purpose, typical examples, and how they work on grouped data.  
> Assumptions: you’re familiar with basic SELECT syntax and table schemas; we’ll focus on standard ANSI‑SQL aggregates.

**Approach**

1. Define aggregate functions as operators that collapse many rows into a single value per group.  
2. List the core set (`COUNT`, `SUM`, `AVG`, `MIN`, `MAX`).  
3. Show usage with and without `GROUP BY`.  
4. Mention NULL handling, DISTINCT support, and performance considerations.

**Depth**

Aggregate functions compute a single scalar from a column or expression:

| Function | Purpose | Example |
|----------|---------|---------|
| `COUNT([DISTINCT] col)` | Number of rows (or distinct values) | `SELECT COUNT(*) FROM orders;` |
| `SUM(col)` | Total of numeric values | `SELECT SUM(amount) FROM sales;` |
| `AVG(col)` | Mean value | `SELECT AVG(price) FROM products;` |
| `MIN(col)` / `MAX(col)` | Smallest / largest value | `SELECT MIN(grade), MAX(grade) FROM exams;` |

When paired with `GROUP BY`, each group yields its own aggregate:

```sql
SELECT dept_id, AVG(salary)
FROM employees
GROUP BY dept_id;
```

SQL guarantees that aggregates ignore `NULL`s unless explicitly handled. Performance hinges on indexes and statistics; large scans can be costly.

**Edge Cases**

- Aggregating over an empty set returns `NULL` (except `COUNT(*)`, which yields 0).  
- Using `DISTINCT` inside aggregates may trigger extra sorting or hashing.  
- Mixed data types (e.g., summing a string column) causes errors.

**Optimize & Communicate**

To improve speed, create covering indexes on the grouping and aggregate columns. In distributed systems (e.g., Spark SQL), pre‑aggregate locally before shuffling. When explaining, emphasize that aggregates transform row‑level data into summary statistics, enabling concise reporting and analytical queries. This structure—definition → examples → edge cases → optimization—aligns with FAANG interview expectations for clarity and depth.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
