---
qid: ing_5519501ab6__eli5__local
question: 'Explain: Replication — Availabilitypatterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 154
output_tokens: 214
total_tokens: 368
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:51:47-05:00'
sources: []
---

Think of a library that wants to keep books safe and always reachable, even if one shelf gets broken or the power goes out.  
**Replication** is like making exact copies of every book on several shelves spread across different rooms (or even buildings).  
When someone asks for a book, they can pick it from any room—so the library stays **available** no matter what happens to one spot.  

*Primary‑secondary replication:* One “master” shelf writes all new editions; the other shelves (“slaves”) copy them over and stay ready to serve if the master fails.  
*Multi‑primary (active‑active) replication:* Every shelf can accept new books at once, and they sync together afterward, so no single point of failure exists.

The key idea is: **duplicate data across locations** so that when one location goes down, others keep the service running smoothly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
