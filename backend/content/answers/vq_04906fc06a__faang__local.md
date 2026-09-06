---
qid: vq_04906fc06a__faang__local
question: What is Correlated Subquery?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 443
total_tokens: 673
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:55:41-05:00'
sources: []
---

**Clarify**  
A correlated sub‑query is a sub‑select that refers to columns from the outer query, making it re‑executed for each row processed by the outer statement. We assume the database supports ANSI SQL and that the interviewer wants both conceptual and practical insight.

**Approach**  
1. Define the term.  
2. Show a simple example (SELECT … WHERE col = (SELECT …)).  
3. Explain execution semantics: outer‑row dependency, repeated evaluation.  
4. Contrast with uncorrelated sub‑queries.  
5. Mention performance implications and optimizer strategies.

**Depth**  

> *Definition*: A correlated sub‑query contains a reference to a column from the enclosing query block; thus it cannot be evaluated independently.  
> *Example*:
> ```sql
> SELECT e.id, e.name,
>        (SELECT COUNT(*) FROM orders o WHERE o.customer_id = e.id) AS order_cnt
>   FROM customers e;
> ```
> Here `e.id` is referenced inside the sub‑query; for each customer row the count is recomputed.  
> *Execution*: The DB engine typically rewrites it as a semi‑join or uses a correlated scan, but fundamentally it runs once per outer row unless cached.  
> *Uncorrelated vs Correlated*: An uncorrelated sub‑query (no outer reference) can be materialized once; a correlated one cannot.  

**Edge Cases**  
- Sub‑queries that return multiple rows → error or first value depending on dialect.  
- NULL handling in predicates.  
- Extremely large outer result sets → performance bottleneck.

**Optimize & Communicate**  
To improve, rewrite as a JOIN/aggregate (e.g., `JOIN (SELECT customer_id, COUNT(*) AS cnt FROM orders GROUP BY customer_id)`). Explain that this reduces repeated scans and is usually faster. Emphasize to the interviewer how you would profile execution plans and discuss trade‑offs between readability (correlated sub‑query) and performance (join/aggregate).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
