---
qid: ing_7fc603149c__eli5__local
question: 'Explain: Expression Indexes — Indexing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 233
total_tokens: 392
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:59:26-05:00'
sources: []
---

Think of an expression index as a **shortcut recipe book** for your database.  
When you ask the database, “Show me all customers whose last name starts with ‘S’ and who live in California,” it usually has to scan every customer record—like reading each page of a huge cookbook.  

An expression index pre‑computes the answer to that specific question: it stores the result of an **expression** (in this case, `concat(last_name, city)`) for every row. When you run the same query, the database can jump straight to the right “recipe” instead of sifting through all pages.

*Unavoidable terms:*  
- **Index:** a data structure that lets the database find rows quickly.  
- **Expression index:** an index built on the result of a formula (e.g., `LOWER(name)`), not just a single column.

So, expression indexes are like having a ready‑made, indexed list for complex search conditions—fast, efficient, and easy to maintain.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
