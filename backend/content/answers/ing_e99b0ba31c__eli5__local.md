---
qid: ing_e99b0ba31c__eli5__local
question: 'Explain: Least connection method — What is Load Balancing?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 192
total_tokens: 352
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:45:07-05:00'
sources: []
---

**Load balancing** is like a busy waiter at a restaurant who directs each new customer to the table that will serve them fastest. The waiter keeps track of how many people are already seated and eating at each table, so no one has to wait too long.

The **least‑connection method** is one way the waiter does this. Imagine each server on your computer network as a table. Every time a new request (a customer) comes in, the system looks at all tables and picks the one with the fewest people already eating—i.e., the server that currently has the fewest active connections. That server gets the new request, helping to spread traffic evenly so no single server becomes overloaded while others sit idle. This keeps response times short and makes the whole service run smoothly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
