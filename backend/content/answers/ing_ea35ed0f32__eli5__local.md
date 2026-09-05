---
qid: ing_ea35ed0f32__eli5__local
question: 'Explain: this table we have to keep all — AWS re:Invent 2018: Amazon DynamoDB
  Under the Hood: How We Built a Hyper-Scale Database (DAT321)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 185
output_tokens: 239
total_tokens: 424
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:46:18-05:00'
sources: []
---

Think of a huge library that can grow forever, where every book is a *record* and each shelf is a *table*.  
In Amazon DynamoDB, a **table** holds many items (rows) that share the same set of attributes (columns). You never have to “keep all” tables in the sense of storing them on disk yourself—DynamoDB stores everything for you.  

When you create a table, you pick a **primary key** (like a book’s unique ID). DynamoDB splits the table into many small pieces called *partitions* and distributes them across thousands of servers so that reading or writing one item is as fast as flipping to a single page. If you need more space or speed, you simply tell DynamoDB to increase the **read/write capacity**; it will automatically add more partitions without you moving any books.

So, “keeping all tables” just means letting DynamoDB manage every partition and server behind the scenes—just like a library that auto‑adds shelves when new volumes arrive.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
