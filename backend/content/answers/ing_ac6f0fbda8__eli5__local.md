---
qid: ing_ac6f0fbda8__eli5__local
question: 'Explain: Sharded Counter — Distributed Counter System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 237
total_tokens: 398
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:11:02-05:00'
sources: []
---

Imagine you’re running a very popular online game where players can earn points every time they complete a quest. If all the players sent their point‑updates straight to one server, that server would soon get overwhelmed—like a single cashier at a busy grocery store.  

A **sharded counter** solves this by splitting the big “point total” into many small piles (the shards). Each shard lives on its own server and can handle a fraction of the updates independently. When you want to know the player’s total points, you simply add up all the piles—just like adding the cash from several registers to get the final bill.

**Key terms**

- **Shard**: A small, independent part of the whole counter that lives on its own server.  
- **Sharded counter**: The overall counter made up of many shards.  

Because each shard can be updated in parallel, the system scales linearly with more players. When you read the total, a quick sum across all shards gives you an accurate count. This design keeps the counter fast and reliable even under massive load.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
