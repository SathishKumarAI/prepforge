---
qid: ing_fb5e874064__eli5__local
question: 'Explain: When to shard a collection across multiple shards'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 245
total_tokens: 403
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:13:10-05:00'
sources: []
---

Imagine you have a gigantic cookbook that contains every recipe ever written. If you try to find one dish, flipping through the whole book is slow and tiring. Instead, you split the book into several smaller volumes—one for desserts, one for soups, one for meats—so you can open the right volume instantly. In computing this “splitting” is called **sharding**.

You shard a collection (a database table) when it grows so large that searching, inserting, or updating records on a single machine becomes sluggish or impossible. By dividing the data into multiple shards and storing each on its own server, you keep the workload light for every machine, speed up queries, and avoid hitting storage limits.

Key terms:  
* **Shard** – a separate piece of the collection stored on its own server.  
* **Sharding** – the process of splitting a large collection into those pieces.  

Just as the cookbook’s volumes let chefs find recipes quickly, sharded databases let programs locate data fast even when the dataset is enormous.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
