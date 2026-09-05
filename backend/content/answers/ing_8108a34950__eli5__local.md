---
qid: ing_8108a34950__eli5__local
question: 'Explain: How CDC Works — Change Data Capture (CDC) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 210
total_tokens: 373
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:01:20-05:00'
sources: []
---

Imagine a library where every book is a database record and the librarian’s job is to keep an up‑to‑date copy of each page for a reading club.  
When someone adds, edits, or deletes a page, the librarian doesn’t rewrite the whole book; instead she writes down only that one change in a tiny notebook called the **Change Log**.  

*Change Data Capture (CDC)* is exactly this: a system watches the database’s transaction log—the stream of every write operation—and records just the differences (“what changed, where, and when”).  
Later, another process reads that log and applies those small changes to a replica or data warehouse.  

So CDC turns a continuous stream of edits into a lightweight “diff file,” letting downstream systems stay fresh without re‑scanning everything.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
