---
qid: ing_590251c513__eli5__local
question: 'Explain: Sort Key — Sortkey'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 155
output_tokens: 213
total_tokens: 368
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:57:22-05:00'
sources: []
---

Think of a library that wants to show books in the order people usually look for them.  
The **sort key** is like the librarian’s “search tag” – a single word or number that tells the computer exactly how to line up every book.

In machine‑learning data, each record (a row) has many columns: age, salary, score, etc. If you want the system to learn from the records in a particular order—say, oldest first—you give it a sort key: “age.” The algorithm will read the rows one after another sorted by that field.

So, a sort key is simply the column (or expression) you pick to arrange your data before feeding it into a model. It’s the same idea as sorting a playlist by song length or a spreadsheet by date—just choose the attribute that best suits what you’re trying to learn.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
