---
qid: ing_c00a7c1b35__eli5__local
question: 'Explain: Using LISTEN / NOTIFY — GitHub - lib/pq: Go PostgreSQL driver
  for database/sql \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 221
total_tokens: 399
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:41:09-05:00'
sources: []
---

Think of a Postgres server as a radio station and your Go program as a listener who wants to know when something exciting happens.  
The **LISTEN** command is like telling the station, “Hey, I’m tuned into channel *updates*.” Your program opens a special socket that stays open for as long as you want.  

When another part of the system does something important—say it inserts a new row in the `orders` table—it can send a **NOTIFY** message on that same channel: “New order! Listen up!” The server instantly pushes this notification through all sockets that are LISTEN‑ing on that channel. Your Go code receives the message, wakes up from waiting, and can act right away (e.g., refresh a cache).  

So, LISTEN/NOTIFY lets multiple programs stay in sync without constantly polling the database—just like radios only play when the DJ turns it on.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
