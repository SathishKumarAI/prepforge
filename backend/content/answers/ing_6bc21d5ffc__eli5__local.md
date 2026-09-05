---
qid: ing_6bc21d5ffc__eli5__local
question: 'Explain: Partial or Filtered Indexes — Indexing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 198
total_tokens: 360
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:26:27-05:00'
sources: []
---

Think of a library that keeps only the books you actually read often.  
A **partial (or filtered) index** is like a “quick‑look shelf” that holds just those books whose titles start with a certain letter or contain a particular word.  

In a database, an index is a shortcut list that lets the computer find rows fast—just as the quick‑look shelf lets you grab a book without scanning the whole library.  
A partial index adds a rule: it only includes rows that satisfy a condition (e.g., `status = 'active'`). When you query for active records, the database can jump straight to this smaller list instead of sifting through every row.  

So, a filtered index is a selective shortcut: fast lookup for common queries, while keeping storage and maintenance light because it ignores irrelevant data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
