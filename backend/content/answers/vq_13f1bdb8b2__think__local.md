---
qid: vq_13f1bdb8b2__think__local
question: WHAT IS A CORRELATED SUBQUERY?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 427
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:11:35-05:00'
sources: []
---

**1️⃣ Clarify the question & set assumptions**  
   - Confirm we’re dealing with SQL *correlated subqueries* (not “correlation” in statistics).  
   - Assume a relational‑database context and that the user wants an intuitive, not just formal, definition.

**2️⃣ Mental model: nested queries & variable scope**  
   - Think of a query as a function. A correlated subquery is like an inner function that can see variables from its outer “caller.”  
   - The key idea: the inner SELECT references columns from the outer SELECT, so it must be re‑evaluated for each row.

**3️⃣ Step‑by‑step reasoning**  
   1. Start with a simple two‑table join to illustrate the need for a subquery.  
   2. Show how adding a condition that depends on the outer row turns a plain subquery into a *correlated* one.  
   3. Explain evaluation order: outer row → inner query runs with current row’s values → result feeds back to outer logic.

**4️⃣ Common traps to avoid**  
   - Confusing a correlated subquery with a non‑correlated one that merely uses the same tables.  
   - Forgetting that correlated subqueries can be performance‑heavy because they run repeatedly.  
   - Overlooking that some DBMSs rewrite correlated subqueries into joins for optimization.

**5️⃣ Sanity‑check & verbalize**  
   - Verify with a concrete example: `SELECT name FROM employees e WHERE salary > (SELECT AVG(salary) FROM employees WHERE department_id = e.department_id);`  
   - Explain aloud that the inner `AVG` sees `e.department_id`, so it’s correlated.  
   - Summarize: “A correlated subquery is a nested query that depends on columns from its outer query, causing it to be executed once per row of the outer result set.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
