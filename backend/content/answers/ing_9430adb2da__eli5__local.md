---
qid: ing_9430adb2da__eli5__local
question: 'Explain: Main Terms - SQL vs DynamoDB vs Document-DB vs Search-Index'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 312
total_tokens: 477
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:32:47-05:00'
sources: []
---

Think of data storage like a library, but with different “rooms” for the books you want to read.

* **SQL (relational database)** – Imagine a tidy filing cabinet where every book is labeled and can be found by its exact title or author. It’s great when you need precise, structured queries—like looking up a single record in a spreadsheet.

* **DynamoDB** – Picture a fast‑moving checkout line: items are stored in a flat list (a “table”) but each entry has a unique key (the ticket number). You can quickly pull one item out by its key, but you can’t do complex cross‑checks without extra work. It’s built for speed and scaling.

* **Document‑DB** – Envision a drawer full of folders that hold entire stories (JSON documents). Each folder is a single record; inside it can be nested chapters (fields) that don’t need to match every other folder. Good for flexible, semi‑structured data.

* **Search‑Index** – Think of a powerful search engine that scans all the books and gives you quick answers based on keywords or phrases. It’s not where the books live; it just points to them so you can find what you need fast.

Each “room” serves a different purpose: precise queries, rapid key lookups, flexible nested data, or speedy full‑text search.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
