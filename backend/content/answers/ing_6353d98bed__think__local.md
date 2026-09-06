---
qid: ing_6353d98bed__think__local
question: 'Explain: How SQL EXISTS Works and When to Use It — Data Science & AI Interview
  Prep | StrataScratch'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 200
output_tokens: 508
total_tokens: 708
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T07:35:09-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
   * Identify that the interviewer wants a conceptual explanation of `EXISTS` and practical use‑cases in data‑science queries (e.g., filtering rows based on related tables).  
   * Assume the candidate knows basic SQL syntax but may not have deep experience with correlated subqueries.  

**2️⃣ Adopt a mental model: “Existence as a predicate”**  
   * Treat `EXISTS` like an “is there at least one row?” check that returns TRUE/FALSE for each outer row.  
   * Think of it as a filter that keeps the current row only if the inner query yields any result, regardless of what data it returns.  

**3️⃣ Step‑by‑step reasoning**  
   1. Show a simple example: `SELECT … FROM A WHERE EXISTS (SELECT 1 FROM B WHERE B.id = A.id);`  
   2. Explain that the subquery is evaluated for each row in `A`.  
   3. Highlight correlation: the inner query references columns from the outer table.  
   4. Emphasize short‑circuiting—SQL stops scanning `B` as soon as one match is found, improving performance over `IN` or `JOIN` when only existence matters.  

**4️⃣ Common pitfalls to avoid**  
   * Confusing `EXISTS` with `IN`: the former doesn’t care about duplicates or nulls.  
   * Forgetting that the subquery’s SELECT list is irrelevant—`SELECT 1` is idiomatic but any constant works.  
   * Misunderstanding that `NOT EXISTS` flips the logic; it keeps rows where no match exists, not “missing data”.  

**5️⃣ Sanity‑check & verbalize**  
   * Ask: “If I run this query on a table with 100k rows and the subquery has an index, will it be faster than a JOIN?”  
   * Answer: yes, because `EXISTS` stops after finding one match.  
   * Summarize: use `EXISTS` when you need to filter based on the presence of related records without pulling any data from them—common in deduplication, feature flag checks, or ensuring referential integrity in ETL pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
