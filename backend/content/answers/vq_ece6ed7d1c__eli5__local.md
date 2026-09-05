---
qid: vq_ece6ed7d1c__eli5__local
question: What are ‘inserted’ and ‘deleted’ tables (aka. magic tables)?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 209
total_tokens: 374
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:32:59-05:00'
sources: []
---

Think of a data warehouse as a giant library that keeps copies of every book (record) from the source systems. When a new book arrives or an old one is removed, the library wants to know *what changed* without re‑reading the whole shelf. That’s where **inserted** and **deleted** tables—often called “magic” tables—come in.

- **Inserted table**: A temporary list of all rows that have just appeared in the source since the last refresh.  
- **Deleted table**: A temporary list of all rows that were present before but are gone now.

During a load, the warehouse reads these two small lists instead of comparing millions of rows. It simply “inserts” the new books and “deletes” the missing ones, keeping the library up to date with minimal effort. This trick saves time and processing power while still giving you an accurate, current view of your data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
