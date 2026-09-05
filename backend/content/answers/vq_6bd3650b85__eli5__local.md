---
qid: vq_6bd3650b85__eli5__local
question: What are the different sorts of Pandas Data Structures?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 208
total_tokens: 366
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:14:40-05:00'
sources: []
---

Think of pandas as a librarian that keeps books (data) in neat shelves and drawers so you can find what you need quickly.

* **Series** – One drawer holding a single column of items. It’s like a list with an index that tells you where each item sits.
* **DataFrame** – A whole bookshelf: many columns side by side, each a Series, all sharing the same rows (index). Imagine a spreadsheet or table of people with names, ages, and salaries.
* **Panel** – Rarely used now; think of it as a stack of bookshelves—three‑dimensional data where you have several DataFrames layered together.

So, a Series is a single column, a DataFrame is a tidy table, and a Panel is an older way to hold multiple tables at once. Each structure lets pandas keep your data organized and easy to fetch or modify.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
