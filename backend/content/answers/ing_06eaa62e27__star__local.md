---
qid: ing_06eaa62e27__star__local
question: Design a Text2SQL agent for business users querying a warehouse with 5,000
  tables. What's hard, and how do you evaluate it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 418
total_tokens: 672
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:42:49-05:00'
sources: []
---

**Situation** – I was hired by a fintech startup that had a data warehouse with roughly 5,000 relational tables, all auto‑generated from various legacy systems. The business analytics team needed a way to run arbitrary ad‑hoc queries without writing SQL; their goal was to get insights within minutes rather than days of ETL.  

**Task** – Build a Text2SQL agent that could translate natural‑language questions into correct, efficient SQL against this massive schema, handle ambiguous wording, and expose an API for the BI tool. I also had to define clear success metrics: 90 % precision on query results, under 3 s latency per request, and zero critical errors in production.  

**Action** – I started by building a dynamic schema index that flattened table/column metadata into embeddings using Sentence‑BERT; this allowed the model to surface relevant tables even when names were cryptic. I fine‑tuned an LLaMA‑7B on a curated dataset of 20k real questions mapped to SQL, adding a custom decoding step that enforces syntactic validity and prevents dangerous clauses (e.g., `DROP`). For evaluation, I created a benchmark suite with 5,000 hand‑crafted queries covering joins, aggregations, window functions, and edge cases. I also set up an automated end‑to‑end pipeline that runs each generated query against the warehouse and compares results to ground truth using a diff algorithm.  

**Result** – The agent achieved 93 % result precision on the test set, with average latency of 2.4 s per query. In production, we cut the time for ad‑hoc analysis from 3 days to under an hour for 80 % of users. I learned that in a huge schema, embedding‑based table retrieval is far more robust than rule‑based heuristics, and that continuous monitoring with a synthetic benchmark is essential to catch regressions as new tables arrive.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
