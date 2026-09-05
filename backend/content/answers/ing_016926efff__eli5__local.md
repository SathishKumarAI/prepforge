---
qid: ing_016926efff__eli5__local
question: What Is Cardinality in a Database? — What Is Cardinality in a Database?
  - SolarWinds Blog
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 181
total_tokens: 351
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:37:10-05:00'
sources: []
---

**Cardinality** is simply the number of *unique* items that appear in a column (a “field”) of a table.  
Think of a library shelf: each book has an author’s name on its spine. If you ask, “How many different authors are on this shelf?” that answer is the cardinality of the *author* column.  

- **Low cardinality** = few distinct values (e.g., a column that only holds “Yes” or “No”).  
- **High cardinality** = many distinct values (e.g., each customer’s email address).  

Knowing cardinality helps the database decide how to store and search data efficiently, just as knowing whether a shelf has mostly one author or thousands guides how you organize it.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
