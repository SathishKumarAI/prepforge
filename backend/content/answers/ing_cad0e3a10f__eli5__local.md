---
qid: ing_cad0e3a10f__eli5__local
question: 'Explain: 14 System Design - Load Balancing Algorithms'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 220
total_tokens: 378
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:56:31-05:00'
sources: []
---

Think of a busy pizza shop that must serve many orders at once.  
The *load balancer* is the manager who decides which oven each order goes to so no single oven gets stuck while others sit idle.

**Round‑Robin**: The manager hands each new order to the next oven in line, just like taking turns. It’s simple but doesn’t care if one oven has already baked a huge pizza; all ovens get used evenly.

**Least‑Connections (or Least‑Tasks)**: Here the manager looks at how many pizzas are still baking in each oven and sends the new order to the oven that is currently doing the least work. This keeps every oven busy without overloading any single one.

In AI, these “ovens” are servers or GPUs handling data batches. A good load‑balancing algorithm ensures all compute resources fire at full speed, preventing bottlenecks and keeping predictions fast.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
