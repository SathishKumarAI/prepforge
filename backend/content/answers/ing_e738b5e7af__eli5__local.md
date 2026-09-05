---
qid: ing_e738b5e7af__eli5__local
question: 'Explain: Features of Cassandra — Difference Between Cassandra and MongoDB
  - GeeksforGeeks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 314
total_tokens: 480
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:41:40-05:00'
sources: []
---

Think of a library that needs to hold millions of books in many countries at once.  
**Cassandra** is like a *distributed catalog* where each shelf (node) keeps its own copy of the index and can answer questions instantly, even if some shelves go offline. It writes data by appending new pages, so adding more copies never slows it down. Cassandra’s “features” are:  

- **Wide‑column store** – rows have flexible columns like a spreadsheet that can grow.  
- **Eventual consistency** – all shelves will agree eventually; you can choose how strict the agreement must be.  
- **Linear scalability** – add another shelf and you get more capacity with no downtime.

**MongoDB**, by contrast, is a *single‑owner database* that keeps everything in one place (the master). It stores documents as JSON‑like objects, so each record can have nested fields. MongoDB’s strengths are:  

- **Rich queries on nested data** – you can ask for “all books where the author wrote more than three titles.”  
- **Strong consistency by default** – every read sees the latest write.  
- **Easy to start** – a single server works well for small projects.

So, Cassandra is built for massive, fault‑tolerant writes across many nodes; MongoDB shines when you need complex queries and strong consistency on a smaller scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
