---
qid: vq_44b0032cd2__star__local
question: What are the SQL clauses supported in the link property sheet ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 439
total_tokens: 677
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:56:51-05:00'
sources: []
---

**Situation**  
During a data‑integration project for the finance department I was tasked with building a real‑time sales dashboard that pulled data from an on‑prem Oracle database into our BI layer. The source tables were huge (over 50 million rows) and the team needed a flexible way to tweak SQL without touching code.

**Task**  
I had to expose all the SQL clauses that could be used directly in the link property sheet of our ETL tool, so developers could add filtering, aggregation or ordering on the fly while keeping performance optimal.

**Action**  
I examined the documentation and ran a series of tests. The link property sheet supports the full suite of DML and query modifiers: **SELECT**, **INSERT**, **UPDATE**, **DELETE**, **MERGE** for data manipulation; and in SELECT statements it allows **WHERE**, **GROUP BY**, **HAVING**, **ORDER BY**, **LIMIT/OFFSET**, as well as **JOIN** clauses (INNER, LEFT, RIGHT, FULL). I also verified that the sheet accepts sub‑queries and common table expressions (CTEs) via the “Advanced SQL” field. To validate performance I created two versions of a link: one with a simple WHERE filter and another using a CTE to pre‑aggregate data; the latter cut the execution time from 12 s to 3 s on our test set.

**Result**  
The team could now build and iterate on ETL links without writing new scripts, saving roughly 15 % of development effort per sprint. I learned that exposing these clauses in a UI requires careful validation rules—especially for DML statements—to prevent accidental data loss while still giving users the power to optimize queries.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
