---
qid: ing_06f77aa239__eli5__local
question: 'Explain: is 450 are consumed capacity is 450 — AWS re:Invent 2018: Amazon
  DynamoDB Under the Hood: How We Built a Hyper-Scale Database (DAT321)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 281
total_tokens: 468
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:46:42-05:00'
sources: []
---

Think of DynamoDB like a library that lets you check out books quickly.  
Each “checkout” (a read or write) uses up a bit of the library’s **capacity** – just as each book‑loan takes time from the librarian.  
In DynamoDB you set how many *units* of work the library can handle per second. A simple read costs 1 unit, a more detailed (strongly consistent) read costs 2 units, and a write costs 1 unit too.  

When you run a query that touches many items, all those small “unit‑costs” add up to a **consumed capacity** number. If your request consumes 450 units in one second, the library has used 450 out of its allotted capacity for that moment.  
So “450 are consumed capacity is 450” means: the operation ate 450 capacity units—exactly what you’d expect if you summed up every tiny read/write it performed.  

In short, **consumed capacity** = total work your request did, measured in DynamoDB’s unit system. It tells you how hard your query was on the database and whether you’re staying within your provisioned limits.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
