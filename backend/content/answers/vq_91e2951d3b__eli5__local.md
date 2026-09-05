---
qid: vq_91e2951d3b__eli5__local
question: What are the majorly used commands in Sqoop?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 267
total_tokens: 426
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:20:24-05:00'
sources: []
---

Think of **Sqoop** as a post‑man that shuttles data between two big libraries: your SQL database (like a library’s catalog) and Hadoop (the huge storage hall). The post‑man follows a few simple orders—commands—that tell him where to pick up, how to pack, and where to drop off the books.

| Command | What it does |
|---------|--------------|
| **import** | Picks one or more tables from the SQL library and drops them into Hadoop’s shelves. |
| **export** | Takes data from a Hadoop folder and returns it to a table in the SQL library. |
| **list-databases / list-tables** | Shows which databases or tables are available for pickup or drop‑off. |
| **import-all-tables** | Loads every table in a database at once, like bulk shipping. |
| **export-merged** | Sends data back to the SQL library while combining rows that share the same key (like merging duplicate books). |

These commands let you move large volumes of records smoothly, just as a reliable post‑man moves mail between post offices and homes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
