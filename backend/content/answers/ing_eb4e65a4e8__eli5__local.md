---
qid: ing_eb4e65a4e8__eli5__local
question: 'Explain: The Trade-Offs in the CAP Theorem — The CAP Theorem in DBMS -
  GeeksforGeeks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 257
total_tokens: 430
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:47:53-05:00'
sources: []
---

Imagine a busy restaurant that can only serve three things at once: **fast service** (Consistency), **always open** (Availability), and **a single menu for everyone** (Partition tolerance).  
The CAP theorem says a database can guarantee at most two of these at the same time.

* **Consistent** means every waiter sees exactly the same order book—no one gets wrong data.  
* **Available** means a customer can always place an order, even if the kitchen is busy.  
* **Partition‑tolerant** means the system keeps working even when a network cable breaks and the front‑desk talks to a different back‑office.

If you choose consistency + availability, you must give up partition tolerance: a broken network forces the restaurant to close or serve stale data.  
Pick consistency + partition tolerance, you sacrifice availability—customers may have to wait for the kitchen to recover.  
Choose availability + partition tolerance, you lose strict consistency—orders might differ between tables until the system syncs.

So CAP is like choosing which two of those three priorities your database will honor, knowing that the third must be softened or lost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
