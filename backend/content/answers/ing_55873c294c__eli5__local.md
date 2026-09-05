---
qid: ing_55873c294c__eli5__local
question: 'Explain: Why geography affects latency — Understanding latency | ElevenLabs
  Documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 207
total_tokens: 368
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:52:23-05:00'
sources: []
---

Imagine you’re ordering a pizza from your favorite shop. The farther the delivery driver has to drive, the longer it takes for the crust to arrive hot and fresh. In computing, “latency” is the time it takes for data to travel from one place to another—just like that delivery time.

When a machine‑learning model runs on servers far away from you (say in Tokyo while you’re in New York), every request and response has to hop across oceans, through fiber cables, routers, and satellites. Each hop adds a tiny delay, and the total distance is much larger than if the server were nearby. That’s why a local model can answer faster: it’s like having the pizza delivered by a bike right next door.

So geography matters because data must physically travel; longer distances mean more “traffic lights” (network switches) to cross, which increases latency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
