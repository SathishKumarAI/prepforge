---
qid: vq_0531416db5__eli5__local
question: How can I discover what tables, columns, etc are there?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 208
total_tokens: 369
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:01:17-05:00'
sources: []
---

Imagine a library where every book (table) has a spine that tells you its title (name) and the chapters inside are like columns. To find out what books exist and what chapters they hold, you don’t need to open each one; you can look at the library’s catalog card deck.

In databases, this “catalog” lives in special tables called *metadata* or *information schema*. You run a simple query—something like `SELECT table_name FROM information_schema.tables`—and it returns every table. If you want the columns of a particular table, ask for them:  
`SELECT column_name, data_type FROM information_schema.columns WHERE table_name = 'your_table';`

These queries let you “browse” the database’s structure just as a librarian consults the card catalog, giving you a clear map without opening every file.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
