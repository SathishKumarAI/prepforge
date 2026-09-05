---
qid: ing_172e9344d7__eli5__local
question: 'Explain: Sharding — System Design: How to Scale a Database'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 237
total_tokens: 398
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:12:25-05:00'
sources: []
---

**Sharding is like splitting a big pizza into slices that can be handled by different chefs.**  
Imagine you run a huge pizzeria where customers order thousands of pizzas every hour. If one chef tries to make all the pies, they’ll choke on the workload. Instead, you give each chef a *slice* of the menu: one makes only pepperoni, another only veggie, and so on. Each chef has their own oven (database server) and keeps track of their own orders. When an order comes in, it goes straight to the right chef based on its type—no chef has to juggle every flavor.

In database terms, *sharding* divides a large table into smaller parts called **shards**. Each shard lives on its own server and holds only a portion of the data (e.g., users with IDs 1–100 000). Queries that need just one slice hit only that server, so the system can grow by adding more chefs—more servers—without overloading any single one. This keeps performance high even as data explodes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
