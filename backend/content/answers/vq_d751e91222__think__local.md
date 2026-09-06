---
qid: vq_d751e91222__think__local
question: How do you get the second highest salary from a table?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 452
total_tokens: 643
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T02:28:43-05:00'
sources: []
---

**1. Clarify the problem and state assumptions**  
   - Identify the data source: a relational table (e.g., `employees`) with a salary column (`salary`).  
   - Assume salaries are numeric, may contain duplicates, and we want the *second distinct* highest value.  
   - Decide whether ties count as one rank or separate ranks; here assume distinct values.

**2. Choose an appropriate mental model**  
   - Think of ordering: sorting salaries descending gives the first, second, … highest.  
   - Use set semantics to eliminate duplicates if needed.  
   - Translate that into SQL constructs: `ORDER BY`, `LIMIT`/`OFFSET`, or window functions (`ROW_NUMBER`, `DENSE_RANK`).

**3. Reason step‑by‑step toward a solution**  
   1. Start with a subquery that selects distinct salaries: `SELECT DISTINCT salary FROM employees`.  
   2. Order that list descending: `ORDER BY salary DESC`.  
   3. Skip the top one and pick the next: use `LIMIT 1 OFFSET 1` (or `ROW_NUMBER() = 2`).  
   4. Return the resulting salary.

**4. Common traps to avoid**  
   - Forgetting `DISTINCT`, which would return a duplicate if the highest appears twice.  
   - Using `TOP 2` and then picking the smaller value, which is fragile across DBMSs.  
   - Misinterpreting “second highest” as “salary that is higher than exactly one other salary” (which is not standard).

**5. Sanity‑check and communicate clearly**  
   - Verify with a small sample dataset: `{100k, 90k, 90k, 80k}` → answer should be `90k`.  
   - Explain the logic in plain language before showing code: “We list unique salaries from largest to smallest and take the second entry.”  
   - Provide both a simple `LIMIT/OFFSET` version and a window‑function version for completeness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
