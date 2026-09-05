---
qid: ing_e1daa9c95e__eli5__local
question: 'Explain: Multi-Master Replication — Data Replication in DBMS - GeeksforGeeks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 191
total_tokens: 359
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:33:28-05:00'
sources: []
---

**Imagine a group of friends who all keep the same recipe book, but each one can add or edit pages whenever they want.**  
In a database, that “recipe book” is the data set. **Multi‑master replication** means every computer (or “master”) in the system can read and write to its own copy of the data at the same time. When one friend adds a new recipe, it’s sent out so all other copies update too. If two friends edit the same page simultaneously, the database has rules—like *last‑write wins* or *merge strategies*—to decide which change stays, preventing confusion.

So, multi‑master replication lets many users work concurrently on the same data without a single bottleneck, just like several friends updating a shared notebook while still keeping everyone in sync.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
