---
qid: ing_8c5e29629e__eli5__local
question: 'Explain: Snapshot Replication — Data Replication in DBMS - GeeksforGeeks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 171
total_tokens: 337
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:19:08-05:00'
sources: []
---

Think of a library that keeps a copy of every book on a spare shelf so readers can browse without disturbing the original collection. **Snapshot replication** works like that: a database takes a *snapshot*—a frozen picture—of all its data at a specific moment and copies it to another server (the replica). The replica stays unchanged until the next snapshot, so queries run there don’t interfere with updates happening on the main database. When the next snapshot is taken, the replica gets replaced with the new image.  

*Replication* means copying data from one place to another; *snapshot* means capturing a single instant in time. This method keeps read‑heavy workloads fast and isolated while the primary database continues writing normally.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
