---
qid: vq_0738707e6e__star__local
question: HOW DOES A RECURSIVE CTE WORK?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 314
total_tokens: 551
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:46:41-05:00'
sources: []
---

**Situation**  
At my last job I was tasked with generating a hierarchical view of product categories for the new e‑commerce platform. The database already had a self‑referencing `Categories` table, but the reporting team needed a flat list that included each category’s depth and full lineage path.  

**Task**  
I had to produce a single query that recursively traversed the parent–child relationships, outputting for every row its level in the tree and an aggregated string of ancestor names, all without writing a stored procedure or pulling data into application code.

**Action**  
I used a recursive Common Table Expression (CTE). The anchor part selected root categories (`ParentID IS NULL`) assigning level 0. The recursive term joined the CTE back to `Categories` on `ParentID = ID`, incremented the level, and concatenated the current name onto the path string using `||`. I added a safety `MAXRECURSION 1000` hint and a `WHERE NOT EXISTS` clause to guard against accidental cycles. The final SELECT pulled `CategoryID, Name, Level, Path`.

**Result**  
The query returned 1,237 rows in under 120 ms on our dev server, versus the previous 3‑minute batch job that required ETL scripts. I learned how CTE recursion can replace iterative loops and keep business logic inside SQL, improving maintainability and performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
