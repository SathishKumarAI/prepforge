---
qid: ing_087da45c83__eli5__local
question: 'Explain: Log Retention — Change Data Capture (CDC) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 185
total_tokens: 348
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:49:08-05:00'
sources: []
---

Imagine a library that keeps every book ever printed, but only wants to know which books changed last week so it can update its catalog quickly.  
**Log retention** is the rule that tells the library how long to keep the “change log” – the list of all edits made to each book.  
**Change Data Capture (CDC)** is the process that reads that log and turns each edit into a small note: *“Page 42 of ‘History’ was rewritten.”*  
In system design, you decide: keep the log for 30 days so you can replay recent changes if a database crashes, but discard older entries to save space. The log is like a diary of every edit; CDC is the librarian who reads that diary and updates the catalog instantly. This keeps data fresh without re‑scanning everything.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
