---
qid: vq_f8a528ef82__faang__local
question: WHAT DOES THE NULLIF() FUNCTION DO?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 420
total_tokens: 652
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:43:02-05:00'
sources: []
---

**Clarify**  
The interviewer asks about the SQL `NULLIF()` function. Confirm that we’re discussing relational databases (e.g., MySQL, PostgreSQL) and not a programming language’s null handling. Assume the goal is to understand its semantics and typical use‑cases.

**Approach**  
Explain: `NULLIF(expr1, expr2)` returns `expr1` if it differs from `expr2`; otherwise it yields SQL `NULL`. It’s essentially a safe “compare‑and‑return” helper used to avoid division by zero or unwanted zero values in calculations.

**Depth**  
```sql
SELECT NULLIF(colA, 0) AS result FROM table;
```
- If `colA` = 0 → returns `NULL`.  
- If `colA` ≠ 0 → returns the original value.  
This is handy when you want to treat a sentinel value (e.g., 0) as “unknown” before feeding it into another expression (`colB / NULLIF(colA, 0)` yields `NULL` instead of an error).  
Complexity: O(1) per row; no extra memory beyond the result.  
Trade‑off: You must anticipate downstream handling of `NULL` (e.g., in aggregates or joins).

**Edge Cases**  
- If either argument is already `NULL`, the function returns `NULL`.  
- Non‑numeric types work fine as long as comparison is defined.  
Test scenarios: equal values, different values, one value null, both null.

**Optimize & Communicate**  
Use `NULLIF()` instead of a CASE expression for brevity and clarity. It’s concise, self‑documenting, and lets the optimizer treat it as a simple predicate. When explaining, highlight that this function is a common idiom in SQL to guard against division errors or unwanted zeroes, making queries more robust and readable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
