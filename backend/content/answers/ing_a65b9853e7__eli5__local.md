---
qid: ing_a65b9853e7__eli5__local
question: 'Explain: Introduction — Amazon''s Dynamo | All Things Distributed'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 209
total_tokens: 368
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:01:51-05:00'
sources: []
---

Imagine a huge library that never closes, where every book is copied and shared among many shelves across the world. When someone wants a page, they can ask any shelf—no single shelf owns the whole book. Amazon’s Dynamo is like this global library for data: it stores pieces of information (keys) on many servers (nodes). If one shelf breaks or loses its copy, another still has the same page, so the system keeps working. To keep track of where each page lives, Dynamo uses a clever “hash” that spreads pages evenly across shelves and a rotating list of owners called “consistent hashing.” This way, adding a new shelf or taking one down barely disrupts the library—just like customers can still find their books even if some shelves are busy. In short, Dynamo is a resilient, distributed data store that keeps information accessible no matter what happens to individual servers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
