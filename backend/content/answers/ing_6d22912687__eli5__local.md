---
qid: ing_6d22912687__eli5__local
question: What is a partition key? — Choosing the Right DynamoDB Partition Key | AWS
  Database Blog
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 209
total_tokens: 375
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:29:18-05:00'
sources: []
---

Think of DynamoDB like a giant library that stores books (rows) on many shelves.  
The **partition key** is the book’s “section label” – it tells the library where to put the book so people can find it quickly.  
When you choose a partition key, you decide which shelf a book lands on. If every book has the same label (“AllBooks”), they all pile up on one shelf and anyone who wants any book will have to sift through the whole stack—slow and clunky.  

A good partition key spreads books across many shelves so each shelf stays light. For example, using “userID” as the key puts every user’s items on a different shelf, keeping reads fast and balanced.  
In short: the partition key is the attribute that DynamoDB uses to distribute data evenly across its storage blocks, just like a section label distributes books across library shelves.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
