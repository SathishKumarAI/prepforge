---
qid: ing_b9354f6367__eli5__local
question: 'Explain: 2.2 Service Level Agreements (SLA) — Amazon''s Dynamo | All Things
  Distributed'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 235
total_tokens: 404
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:30:48-05:00'
sources: []
---

Imagine a library that lets you borrow books from anywhere in the world, but it promises you two things:  
1️⃣ **Availability** – “You’ll always be able to find and check out a book.”  
2️⃣ **Consistency** – “When you return a book, everyone else will see the new copy right away.”

In Amazon’s Dynamo, those promises are called a *Service Level Agreement (SLA)*.  
*Availability* means the system stays online even if some servers fail—think of spare copies of books in backup branches.  
*Consistency* is about how fresh the data you read is; Dynamo can choose to give you the latest version or let you see an older one, like a library that sometimes shows a slightly out‑of‑date catalog.

Dynamo’s SLA lets developers pick the right balance: quick reads with possible staleness, or guaranteed up‑to‑date data at the cost of slower access. The agreement is simply the contract between Dynamo and its users about these trade‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
