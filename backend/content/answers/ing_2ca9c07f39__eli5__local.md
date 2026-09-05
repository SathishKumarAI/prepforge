---
qid: ing_2ca9c07f39__eli5__local
question: 'Explain: we''ll copy the B tree from one — AWS re:Invent 2018: Amazon DynamoDB
  Under the Hood: How We Built a Hyper-Scale Database (DAT321)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 185
output_tokens: 222
total_tokens: 407
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:46:06-05:00'
sources: []
---

Imagine your library has a huge book‑index that’s split into many small “pages” (the B‑tree nodes). When the library grows, you need to copy a whole page from one shelf to another so each shelf can handle more books. In DynamoDB, this is called **replication** of a B‑tree node: a chunk of data and its structure are duplicated on a different server (a “node”).  
*B‑tree*: a balanced tree that keeps data sorted for fast look‑ups.  
*Node*: one physical server in the cluster that stores part of the database.  

The copy happens automatically when DynamoDB scales: it reads the node’s data, writes an exact duplicate on another node, and then updates pointers so new requests can find the right copy. This keeps the system reliable and fast, just like a library that copies its index pages to extra shelves as readers arrive.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
