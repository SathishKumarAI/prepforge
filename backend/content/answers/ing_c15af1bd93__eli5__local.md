---
qid: ing_c15af1bd93__eli5__local
question: 'Explain: Like we said, scalability is being able — System Design BASICS:
  Horizontal vs. Vertical Scaling'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 222
total_tokens: 391
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:42:40-05:00'
sources: []
---

Imagine you’re running a bakery that sells cupcakes.  
*Vertical scaling* is like adding a bigger oven to your existing kitchen—one machine that can bake more cupcakes at once but still uses the same space and staff. It’s simple, but there’s a limit: when the oven gets too hot or too full, performance drops.

*Horizontal scaling* is like opening new bakeries in neighboring towns. Each new location has its own small oven, workers, and storefront. All of them produce cupcakes simultaneously, so you can keep up with more customers without overloading any single kitchen.

In computing, vertical scaling upgrades the power of one server (more CPU, memory), while horizontal scaling adds more servers to share the workload. Horizontal scaling gives you true flexibility: as demand grows, you just add more machines; as demand falls, you can close some. This is why most modern systems favor horizontal growth—like a chain of bakeries—over simply beefing up one giant oven.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
