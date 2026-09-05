---
qid: ing_a0bd995d31__eli5__local
question: 'Explain: What CDC Captures — Change Data Capture (CDC) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 217
total_tokens: 381
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:52:40-05:00'
sources: []
---

Imagine a library where every book has a tiny, invisible “tape recorder.” Whenever someone borrows, returns, or adds a new edition, the recorder writes down exactly what happened and when. Later, you can play back that tape to see the library’s history without looking at all the books again.

In data systems, **Change Data Capture (CDC)** is that invisible recorder for databases.  
* CDC watches tables for insertions, updates, or deletions.  
* When a change occurs, it writes a lightweight “event”—the before‑image and after‑image of the row, plus a timestamp.  
* These events can be streamed to other services (analytics, backups, machine‑learning pipelines) so they always see the latest data without re‑scanning the whole table.

Think of CDC as the library’s log that lets you replay every change, keeping downstream systems in sync with minimal effort.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
