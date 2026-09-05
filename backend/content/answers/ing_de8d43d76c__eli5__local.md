---
qid: ing_de8d43d76c__eli5__local
question: 'Explain: Change Data Capture (CDC) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 190
total_tokens: 349
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:27:10-05:00'
sources: []
---

**Change Data Capture (CDC) is like a diary for your database.**  
Imagine you run a bakery that keeps a handwritten log of every loaf baked, sold, or returned. Instead of rewriting the whole log each day, you simply jot down *only* the new changes: “3 croissants added,” “1 baguette sold.” In system design, CDC does exactly this for data: it watches a database and records just the rows that change—inserted, updated, or deleted—along with a timestamp.  

This “diary” lets other parts of your application (analytics dashboards, backup services, or data warehouses) stay up‑to‑date without re‑reading everything. Think of CDC as a lightweight messenger that forwards only what’s new, keeping systems synchronized efficiently and reliably.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
