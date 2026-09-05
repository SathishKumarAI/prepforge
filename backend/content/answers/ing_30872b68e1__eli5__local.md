---
qid: ing_30872b68e1__eli5__local
question: 'Explain: Basic Redis Commands — The Ultimate Redis 101'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 223
total_tokens: 382
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:52:46-05:00'
sources: []
---

Think of Redis as a super‑fast filing cabinet that keeps data in memory so you can grab it instantly.  
**SET key value** – put a file (value) into a drawer labeled “key.”  
**GET key** – pull out the file from that drawer.  
**DEL key** – empty the drawer, deleting its file.  
**EXPIRE key seconds** – set a timer on the drawer; after the time runs, Redis automatically throws the file away.  
**INCR key** – add one to the number inside the drawer (useful for counters).  
**HSET hash field value / HGET hash field** – treat the drawer as a small filing cabinet itself: you can store many labeled “fields” under one “hash” name and retrieve any one of them.  

These commands let you write, read, update, and clean up data in milliseconds—just like opening a drawer, grabbing what you need, and putting it back quickly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
