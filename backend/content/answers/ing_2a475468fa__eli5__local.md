---
qid: ing_2a475468fa__eli5__local
question: 'Explain: Shard — MongoDB Sharding | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 207
total_tokens: 367
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:42:32-05:00'
sources: []
---

Imagine your library is too big for one building. You split it into several branches, each holding a part of the books but all still part of the same collection. In MongoDB, **sharding** does exactly that: it divides a large database (the “collection”) across many servers called **shard nodes** so no single machine gets overloaded.

A **shard key** is like the book’s call number—MongoDB uses it to decide which branch holds each document. When you query, the system looks at the shard key and goes straight to the right branch, instead of searching every server. The **config servers** keep a map of where everything lives, while the **mongos router** is the librarian that translates your request into the correct branch call.

So sharding lets MongoDB grow smoothly: more data, more servers, but still behaves like one seamless database.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
