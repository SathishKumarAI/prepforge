---
qid: ing_cadc776176__eli5__local
question: 'Explain: Database Replication — System Design Resources'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 249
total_tokens: 406
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:56:38-05:00'
sources: []
---

**Database replication** is like a librarian who makes copies of every book and keeps them in several branches so readers can find the same story no matter where they go.  
*Replication* (the copy‑making process) ensures that each branch’s collection stays in sync with the original library. When you add, change or delete a page in one copy, the librarian updates all other copies automatically.

In system design, you decide **how many branches** (replicas) to keep and where to place them—close to users for fast reading (read replicas) or spread out for fault tolerance. You also choose the **update strategy**:  
- *Synchronous* – wait until every branch confirms the change before finishing the transaction (exact but slower).  
- *Asynchronous* – record the change locally and let other branches catch up later (faster, but temporary differences may appear).

Good replication design balances speed, consistency, and reliability—just as a well‑run library keeps its books accurate yet always available.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
