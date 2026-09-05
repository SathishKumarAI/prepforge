---
qid: ing_0f909fe69f__eli5__local
question: 'Explain: Master-Slave Replication — Data Replication in DBMS - GeeksforGeeks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 194
total_tokens: 363
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:00:04-05:00'
sources: []
---

Think of a master‑slave replication like a teacher (the *master*) and two students (the *slaves*).  
The teacher writes an important note on the board (writes to the master database). As soon as the note appears, both students copy it exactly into their notebooks (each slave copies the change). If the teacher adds another line later, the students immediately add that same line next to theirs.  

In a database, the *master* is the primary server that accepts all updates. Each *slave* is a secondary server that receives every change from the master and applies it locally. The slaves can read data but do not write; they stay in sync with the master so if the master goes down, one of the slaves can take over. This keeps the data consistent across servers while allowing many readers to use any copy without slowing the main writer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
