---
qid: ing_d1a9d7e3c6__eli5__local
question: 'Explain: Importance of Cardinality for Database Performance'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 246
total_tokens: 403
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:07:28-05:00'
sources: []
---

Think of a database table as a giant library and each column as a shelf filled with books.  
**Cardinality** is the number of different titles on that shelf—how many unique values exist.  

If a shelf holds only one or two types of books (low cardinality), every time you ask for “all science‑fiction books,” the librarian has to scan almost the whole shelf because most items match.  
If a shelf has thousands of distinct titles (high cardinality), a request for a single title can be answered instantly by looking at a small index that points straight to the exact spot.

When a database query uses a column with high cardinality, indexes can narrow the search dramatically, saving time and memory. With low‑cardinality columns, even an index may not help much because many rows match, so the system still has to read most of them.  

Thus, knowing a column’s cardinality helps the database decide whether an index will speed up queries or not—just like choosing the right shelf in a library for quick book hunting.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
