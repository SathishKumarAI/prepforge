---
qid: ing_fa6389c8fc__eli5__local
question: 'Explain: Consumer Groups and Shared Subscriptions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 156
output_tokens: 211
total_tokens: 367
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:11:24-05:00'
sources: []
---

Think of a streaming data platform as a bustling library that feeds fresh facts to your machine‑learning models.  
- **Consumer groups** are like study teams: each team (group) has several students (consumers) who split the library’s books (messages). Every book is read by only one student in that group, so the workload is shared and no duplicate learning occurs.  
- **Shared subscriptions** are a single book that all students in a group can borrow at once; they each get their own copy of the same page. This lets every model in the group see identical data, useful when you want every learner to start from the same point.

In short, consumer groups divide the stream among many readers, while shared subscriptions give every reader the exact same slice of it.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
