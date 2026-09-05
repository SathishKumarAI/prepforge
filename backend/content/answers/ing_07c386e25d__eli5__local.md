---
qid: ing_07c386e25d__eli5__local
question: 'Explain: Data Warehousing — Change Data Capture (CDC) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 215
total_tokens: 378
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:47:46-05:00'
sources: []
---

Think of a data warehouse as a giant library that keeps every book ever written about your business.  
**Change Data Capture (CDC)** is the librarian’s notebook: it records only the new or altered pages—new sales, updated customer details, deleted orders—so you can add them to the library without re‑printing the whole volume.

- **Data Warehouse** = central repository of cleaned, organized data.  
- **CDC** = real‑time log of changes (inserts, updates, deletes) from source systems.  

When a change happens in the source database, CDC writes a tiny “change record” to its log. A background job reads this log and applies each record to the warehouse: new rows are added, old ones updated or removed. This keeps the warehouse fresh with minimal effort, just like a librarian updating only the pages that changed instead of rewriting entire books.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
