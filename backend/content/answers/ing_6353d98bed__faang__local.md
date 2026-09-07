---
qid: ing_6353d98bed__faang__local
question: 'Explain: How SQL EXISTS Works and When to Use It — Data Science & AI Interview
  Prep | StrataScratch'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 469
total_tokens: 713
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:34:27-05:00'
sources: []
---

**Clarify**  
You’re asking how the `EXISTS` predicate works in SQL and when it’s preferable over joins or subqueries that return data. I’ll assume a relational DB (PostgreSQL/MySQL) and that you want to test existence of rows, not fetch them.

**Approach**  
1. Explain the syntax and semantics of `EXISTS`.  
2. Contrast with `IN`/`JOIN` on cardinality and performance.  
3. Give typical use‑cases in data‑science pipelines (e.g., flagging incomplete data, feature engineering).  
4. Discuss optimizer behavior and index usage.

**Depth**  
- `EXISTS(subquery)` returns true if the subquery yields **any row**; it stops scanning after the first match (`short‑circuit`).  
- The subquery can reference outer query columns (correlated) or be independent.  
- Because only existence matters, DB engines often use index seeks and can terminate early, yielding lower I/O than a full join that materializes all matches.  
- In contrast, `IN` evaluates the entire list before comparison; `JOIN` returns every matching row, potentially duplicating data.  
- Example: `SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id AND o.status='shipped');` flags users with at least one shipped order.

**Edge Cases**  
- Correlated subqueries can be slow if the outer row count is huge and no index on the join key.  
- `EXISTS` with a non‑indexed predicate forces full table scans.  
- Null handling: `EXISTS` ignores nulls in the tested column; `IN` treats null specially.

**Optimize & Communicate**  
- Ensure an index on the subquery’s filter column (`orders.user_id`).  
- Prefer `EXISTS` when you only need a boolean flag or to enforce referential integrity checks.  
- Explain that for large result sets where you need all matches, a join (or `IN`) is appropriate; for existence checks, `EXISTS` is typically faster and more readable.

*Word count: ~190.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
