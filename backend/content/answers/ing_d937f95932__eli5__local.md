---
qid: ing_d937f95932__eli5__local
question: 'Explain: Scaling Depends on the Layer — Vertical vs Horizontal Scaling
  | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 227
total_tokens: 390
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:18:39-05:00'
sources: []
---

Think of a machine‑learning model as a kitchen that makes pizzas (predictions).  
The **layers** are the stations—mixing dough, adding sauce, baking.  

*Vertical scaling* is like giving one station a bigger oven or more powerful mixer. You make each pizza faster, but you can’t add more ovens to the same station. It’s great when that station becomes a bottleneck (e.g., the neural‑network layer that needs heavy computation).  

*Horizontal scaling* is adding another identical station next to the first one. Now two ovens bake pizzas at once, so total output grows with each new station. Use this when the entire process can be split into independent parts (different model shards or batch inference jobs).  

In practice, you scale a layer vertically if its compute cost dominates and cannot be parallelized; you scale horizontally when the workload can be divided across many copies of that layer or across different layers. The key is matching the scaling method to how the layer behaves in the pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
