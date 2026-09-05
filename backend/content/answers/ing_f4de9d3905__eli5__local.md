---
qid: ing_f4de9d3905__eli5__local
question: 'Explain: up to five global secondary indexes so — AWS re:Invent 2018: Amazon
  DynamoDB Under the Hood: How We Built a Hyper-Scale Database (DAT321)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 185
output_tokens: 186
total_tokens: 371
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:02:33-05:00'
sources: []
---

Think of DynamoDB as a giant library where each book has one main address (the partition key).  
A **global secondary index (GSI)** is like an extra shelf that lets you find books by a different characteristic—say author instead of title.  

You can add up to five such shelves per table, but each shelf must be **independent**: it keeps its own copy of the selected attributes and is updated automatically when the book changes.  
If you need more than five ways to look up items, you’ll have to create a new table or redesign your data model.

So, imagine a library that lets you keep five extra organized stacks for quick lookup on different topics—each stack works in parallel with the main catalog but stays separate from it.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
