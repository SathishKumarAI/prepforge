---
qid: ing_59067cea0d__eli5__local
question: 'Explain: Historical replication jobs — Log-based Incremental Replication
  | Stitch Documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 201
total_tokens: 364
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:57:23-05:00'
sources: []
---

Imagine you have a huge notebook (your database) and you want to copy only the pages that change each day into another notebook (the replica). Instead of re‑writing the whole book every night, you use a “log” – a diary that records every edit as it happens.  
**Historical replication** is like copying all the old pages at once so both notebooks start identical.  
**Log‑based incremental replication** is the daily routine: each day you look at the diary, read only the new entries (inserts, updates, deletes), and write those changes to the replica notebook.  

So Stitch’s “Historical + Log‑Based Incremental Replication” first copies the entire database once, then keeps both notebooks in sync by replaying just the log of daily edits. This saves time, bandwidth, and ensures the copy stays current without re‑transferring everything.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
