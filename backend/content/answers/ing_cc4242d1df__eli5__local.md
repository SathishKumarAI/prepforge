---
qid: ing_cc4242d1df__eli5__local
question: 'Explain: Wish lists revisited — Use vertical partitioning to scale data
  efficiently in Amazon DynamoDB | AWS Database Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 242
total_tokens: 413
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:58:44-05:00'
sources: []
---

Think of a big library where every book has a front cover, a back cover, and a long list of chapters inside. If many people only want the cover to know what the book is about, it’s wasteful to let them pull the whole book each time. **Vertical partitioning** in DynamoDB does exactly that: it splits a table into two “shelves” – one shelf holds the *key* items (the covers) and another shelf holds the rest of the data (the chapters).  

When someone looks up a record, DynamoDB reads only the key shelf, which is tiny and fast. If they need more details, it fetches from the second shelf on demand. This keeps read traffic light, lets you store huge amounts of data without slowing down, and scales like adding more shelves instead of enlarging each book.  

*Key item*: the unique identifier that locates a record (like a book’s ISBN). *Partition key*: the attribute used to spread items across many storage “shelves” for balance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
