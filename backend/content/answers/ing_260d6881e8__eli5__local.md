---
qid: ing_260d6881e8__eli5__local
question: How to configure replication in Redis? — Redisleaderfollowreplication
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 239
total_tokens: 400
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:36:21-05:00'
sources: []
---

Imagine your favorite recipe book (the **Redis leader**) is on a shelf in the kitchen, and you want every other kitchen in the house to have an exact copy so guests can find it no matter which room they’re in.  
In Redis, that “copying” is called **replication**. The leader (called a *master* or *primary*) keeps all the data, and any number of followers (*slaves* or *replicas*) automatically receive every change.  

To set it up:  
1. On each replica server, edit its `redis.conf` file.  
2. Add the line `replicaof <leader‑IP> <leader‑port>` (the older name is `slaveof`).  
3. Restart that Redis instance.  
4. The replica will now connect to the leader, pull all existing data, and stay in sync as new writes happen.

That’s it—every time you add a new kitchen, just point its recipe book to the master, and it becomes an up‑to‑date copy automatically.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
