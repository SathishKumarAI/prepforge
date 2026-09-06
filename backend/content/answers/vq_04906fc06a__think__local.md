---
qid: vq_04906fc06a__think__local
question: What is Correlated Subquery?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 485
total_tokens: 671
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:05:44-05:00'
sources: []
---

**Metacognition for explaining “Correlated Subquery”**

1. **Clarify the scope & assumptions**  
   *Assume the audience knows basic SQL (SELECT, WHERE) but not advanced query concepts.*  
   - Ask: Do they need examples in a specific DBMS?  
   - Assume standard ANSI‑SQL semantics; ignore vendor quirks unless asked.

2. **Choose a mental model**  
   Think of a correlated subquery as a *sub‑statement that depends on the outer query’s current row*.  
   - Visualize two nested loops: for each row in the outer table, evaluate the inner query with that row’s values plugged into its predicates.

3. **Step‑by‑step reasoning**  
   1. Define a simple example (e.g., `SELECT e.name FROM employees e WHERE EXISTS (SELECT * FROM salaries s WHERE s.emp_id = e.id AND s.amount > 100000)`).  
   2. Point out the reference to `e.id` inside the subquery—this is the correlation.  
   3. Explain that without such a reference, it would be an independent subquery evaluated once.  
   4. Discuss evaluation strategy: outer‑loop + inner query per row (or optimizer rewrites).  
   5. Mention use cases: filtering with aggregates over related rows, hierarchical queries, etc.

4. **Common traps to avoid**  
   - Don’t conflate correlated subqueries with correlated joins; the syntax differs but conceptually similar.  
   - Beware of performance pitfalls: naive execution can be O(n²).  
   - Remember that not all DBMS treat them identically—some optimize away correlation.

5. **Sanity‑check & verbalize**  
   *Ask*: “If I remove the reference to `e.id`, does the query still work?” – it should, but lose its intended filtering.  
   Conclude by summarizing: a correlated subquery is one that “correlates” each outer row with an inner query, making the inner query’s result specific to that row. Use clear code snippets and highlight the dependency point for clarity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
