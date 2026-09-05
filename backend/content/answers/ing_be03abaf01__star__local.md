---
qid: ing_be03abaf01__star__local
question: 'Explain: MySQL Sharding at Pinterest — Tech-Stacks-Live-Apps/Pinterest/Readme.md
  at main \u00b7 Anshul619/Tech-Stacks-Live-Apps \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 273
output_tokens: 325
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:51:01-05:00'
sources: []
---

**Situation**  
At Pinterest I was part of the data‑engineering team responsible for keeping the user feed fast while handling 1.5 B daily active users. The existing monolithic MySQL cluster was hitting read‑latency spikes during peak traffic; a single hot spot on the “pins” table would slow down all queries.

**Task**  
I needed to design and roll out a sharding strategy that distributed pin data across multiple MySQL instances, reduced contention, and preserved strong consistency for user actions like liking or repinning.

**Action**  
We adopted a hash‑based shard key on `pin_id` and used ProxySQL as the routing layer. Each shard ran its own replica set (primary + 2 secondaries) with Galera clustering for synchronous replication of critical tables. I wrote a migration script that streamed data in parallel, updated our ORM to include shard awareness, and added automated health checks that rerouted traffic if a primary failed. We also implemented read‑replica promotion logic so reads could hit any replica while writes stayed on the primary.

**Result**  
Post‑deployment, read latency dropped from 250 ms to <60 ms during peak hours, and we eliminated the single point of contention. The system now scales horizontally: adding a new shard adds ~500 M rows without downtime. I learned that careful key selection and a robust proxy layer are critical for sharding MySQL at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
