---
qid: ing_d85e28257f__eli5__local
question: 'Explain: Problem statement — Text To Sql Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 156
output_tokens: 216
total_tokens: 372
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:17:40-05:00'
sources: []
---

Imagine you’re at a library where every book is a database table, and the librarian’s job is to fetch exactly what you need. You, however, speak only in natural sentences like “Show me all customers who bought more than five items last month.” The **Text‑to‑SQL agent** is that smart librarian. Its problem statement is: *“Given a user’s plain English question and the layout of the database (tables, columns, relationships), automatically write a SQL query that returns the correct answer.”*  
In this analogy, the user’s sentence is the input text, the library catalog is the database schema, and the SQL code is the precise set of instructions the librarian uses to pull out the right books. The agent must understand the question, map words to table names or columns, decide which tables to join, and produce a syntactically correct query that delivers the data you asked for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
