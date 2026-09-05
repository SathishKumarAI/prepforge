---
qid: ing_d6a1cbae46__eli5__local
question: 'Explain: Consistency, Availability & Partition Tolerance'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 279
total_tokens: 436
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:14:41-05:00'
sources: []
---

Think of a library that offers three services at the same time:

* **Consistency** – every visitor sees exactly the same catalog of books; if one person updates the list, everyone sees it instantly.  
* **Availability** – anyone can always ask for a book and get an answer right away, even if the system is busy.  
* **Partition tolerance** – the library stays functional even if part of its network (say, a branch) gets cut off by bad weather.

In real‑world computer systems this is called the *CAP theorem*. You can build a system that guarantees any two of those services at once, but you can’t get all three together.  
*If you choose Consistency + Availability, the library must wait for all branches to sync before answering, so it may be slow or even unresponsive when a branch is down.*  
*If you pick Availability + Partition tolerance, you let each branch answer on its own; some answers might be slightly out of date.*  
*If you go for Consistency + Partition tolerance, the library refuses service until all branches reconnect, keeping the catalog exact but occasionally unavailable.*

So CAP tells us: when a network splits, we must trade one of those qualities away.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
