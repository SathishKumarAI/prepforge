---
qid: vq_905eb6665b__eli5__local
question: What is ROWID and ROWNUM in SQL?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 184
total_tokens: 343
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:20:11-05:00'
sources: []
---

Think of a huge library where every book is on its own shelf and each shelf has a unique address.  
**ROWID** is that exact address: it tells the database the physical spot of a row in a table—like “row 5 on shelf 12.” It never changes unless you move the row to another shelf, so you can fetch or delete the record instantly.

**ROWNUM**, on the other hand, is like counting books as you walk down the aisle. The first book you pick up gets ROWNUM = 1, the next gets 2, and so on. It’s only meaningful in the current query; it doesn’t exist in the table itself.  

So, ROWID = permanent physical location; ROWNUM = temporary sequence number during a specific query.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
