---
qid: ing_f227097211__eli5__local
question: 'Explain: Consumer — Message Queues | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 232
total_tokens: 390
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:58:02-05:00'
sources: []
---

**Imagine a busy bakery that makes dozens of cakes every hour.**  
The *baker* (your machine‑learning model) doesn’t bake each cake immediately; instead it takes orders from an *order board* (the message queue).  

1. **Consumer** – the baker who reads an order, grabs the ingredients, and starts baking.  
2. **Message Queue** – a waiting list of orders that keeps coming in even if the baker is busy or offline.

When a new data sample arrives (a new order), it’s put into the queue. The consumer pulls samples one by one, trains on them, then puts the updated model back into the system. If the consumer crashes, the unprocessed orders stay in the queue for another worker to pick up.  

This setup lets your ML pipeline keep working smoothly, scale out with more bakers, and never lose data – just like a bakery that can always serve fresh cakes no matter how busy it gets.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
