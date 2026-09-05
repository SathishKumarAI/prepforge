---
qid: vq_cd70262883__eli5__local
question: How to view table columns details in RDBMS from SQOOP..?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 240
total_tokens: 403
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:28:28-05:00'
sources: []
---

Imagine your database is a giant library and each table is a shelf full of books (rows). Every column on that shelf is like a label on the spine telling you what’s inside—“Author,” “Title,” or “Year.”  
When you use **Sqoop** to pull data from this library into Hadoop, it’s like sending a librarian to read those labels and write them down. To see which columns exist before you import, ask the database for the shelf’s spine list: run `SHOW COLUMNS FROM tablename;` (MySQL) or `DESCRIBE tablename;` (PostgreSQL).  
The command returns three simple pieces of information per column:  
1. **Field** – the column name.  
2. **Type** – what kind of data it holds (int, varchar, date…).  
3. **Null?** – whether the column can be left empty.  

With that list in hand, Sqoop knows exactly which “spines” to copy and how to map them into Hadoop’s tables.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
