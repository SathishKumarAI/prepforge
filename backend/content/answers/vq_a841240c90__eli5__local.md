---
qid: vq_a841240c90__eli5__local
question: How to view all the databases and tables in RDBMS from SQOOP..?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 310
total_tokens: 475
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:23:17-05:00'
sources: []
---

Imagine a library where each book is a **database** and each chapter inside the book is a **table**.  
Sqoop is like a librarian’s scanner that can read the library catalog (the JDBC URL) and point you to any book or chapter you want.

1. **Connect first** – give Sqoop the address of the library with `--connect jdbc:…`.  
2. **Ask for the books list** – run `sqoop list-databases` (or use `--list-databases`) and the scanner will print every database name, just like a shelf‑label list.  
3. **Pick a book, then ask for its chapters** – once you choose a database, run `sqop show-tables --database <name>` or `sqoop list-table` to see all tables inside it.

So Sqoop reads the catalog (JDBC) and lists databases, then drills down into each one to reveal its tables—just as a librarian shows every book and every chapter in a library.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
