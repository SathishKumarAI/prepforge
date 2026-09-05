---
qid: ing_e02cb04e9c__eli5__local
question: 'Explain: Availability Requirements — Strong vs. Eventual Consistency -
  by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 227
total_tokens: 394
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:30:36-05:00'
sources: []
---

Imagine a group of friends running a shared recipe book on their phones.  
**Strong consistency** is like everyone locking the book before they can look at or edit it. Only one friend can touch it at a time, so every reader always sees exactly what was last written—no surprises. The trade‑off: if the lock fails (phone goes offline), no one can read or write until the connection returns; the book is *unavailable*.

**Eventual consistency** lets friends copy the book locally and edit it whenever they want, even while offline. Each phone shows the latest changes it knows about immediately, so the book feels *always available*. Later, when phones sync, all copies converge to the same final version—this may take a moment, but everyone eventually sees the same recipe.

So: strong consistency = “lock everything, never miss a change” (but can be down), eventual consistency = “work locally, sync later” (always up, changes merge over time).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
