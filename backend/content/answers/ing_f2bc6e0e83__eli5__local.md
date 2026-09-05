---
qid: ing_f2bc6e0e83__eli5__local
question: 'Explain: Data Replication in DBMS — Data Replication in DBMS - GeeksforGeeks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 221
total_tokens: 390
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:58:43-05:00'
sources: []
---

Imagine a library that wants every reader to find the same book no matter where they go. Instead of sending each patron on a long trip to the main building, the library keeps copies of popular titles at several branch locations.  
In a database, **data replication** works the same way: one “master” copy (the primary database) is duplicated into one or more “replica” copies that live elsewhere—maybe in another city or on another server. When someone queries the data, they can hit any replica and still get the same information, which speeds up access and protects against a single point of failure.

Key terms:  
- **Replica** – an exact copy of the master database.  
- **Replication lag** – the small delay between updating the master and seeing that change in replicas.

By spreading data across multiple places, systems stay fast, reliable, and can serve many users at once—just like a well‑organized library network.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
