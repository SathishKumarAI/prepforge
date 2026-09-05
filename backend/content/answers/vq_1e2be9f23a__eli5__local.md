---
qid: vq_1e2be9f23a__eli5__local
question: What is the difference between Table scan and seek ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 200
total_tokens: 358
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:04:40-05:00'
sources: []
---

Think of a library where every book has a table of contents.  
A **table scan** is like walking through every shelf, opening each book and reading page by page until you find the one you need. It touches all rows in the table, so it’s slow when the table is big.

A **seek** is like looking at the library’s catalog first. If the catalog tells you that “Book X” sits on shelf 7, aisle 3, you go straight there and open it—no need to read every book. In database terms, a seek uses an index (the catalog) so only the relevant rows are fetched.

**Table** = a structured collection of data;  
**Index** = a shortcut that points directly to the needed rows.  

So, scanning reads everything; seeking jumps straight to the target using an index.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
