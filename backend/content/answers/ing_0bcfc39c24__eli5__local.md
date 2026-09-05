---
qid: ing_0bcfc39c24__eli5__local
question: 'Explain: Cons — Scalability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 218
total_tokens: 375
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:54:10-05:00'
sources: []
---

Think of building a machine‑learning system as baking a huge cake for a growing crowd.  
**Scalability** is how the recipe adapts when you suddenly need to serve ten times more people. In ML, that means training data, model size, and inference speed must grow without breaking the kitchen (your hardware) or blowing up costs.

A **system design** is the set of tools and layout you choose: a single powerful oven (one GPU), many small ovens (distributed GPUs), or a cloud‑based bakery that adds more ovens on demand. The trade‑off is clear:

- A single oven can bake quickly but stalls when orders surge (poor scalability).  
- Many ovens spread the load, keeping pace as orders rise, but you pay for each extra oven and must coordinate them.

So, in ML, a well‑designed system scales by adding compute resources and efficient data pipelines, while a poor design chokes under larger workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
