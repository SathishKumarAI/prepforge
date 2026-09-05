---
qid: ing_aaa405a0e8__eli5__local
question: 'Explain: Handling Permanent Failures — Amazon Dynamo Architecture - by
  Neo Kim'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 200
total_tokens: 362
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:08:29-05:00'
sources: []
---

Imagine a library that keeps copies of every book in several branches, but some shelves can break permanently (a shelf that never holds a book again). In Dynamo’s world, each “book” is data, and each branch is a server. When a shelf breaks, the library doesn’t panic; it simply knows that the broken shelf will always fail to hold the book. The system marks that shelf as *permanently failed* and stops sending new copies there. All other shelves continue to share and update the book, so readers can still find it elsewhere.

**Permanent failure** (in Dynamo) means a node has crashed or is unreachable forever, and the system will treat it as permanently down until an admin brings it back. By ignoring that node for writes, Dynamo keeps the rest of the network healthy without being slowed by a stubborn, broken component.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
