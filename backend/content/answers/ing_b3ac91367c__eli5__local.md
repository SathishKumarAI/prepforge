---
qid: ing_b3ac91367c__eli5__local
question: 'Explain: Static vs. Dynamic Batching — Batching Strategies'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 209
total_tokens: 368
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:21:49-05:00'
sources: []
---

Imagine a bakery that makes custom cakes.  
**Static batching** is like the baker deciding, “Today I’ll bake ten cupcakes all at once.” The batch size (ten) is fixed before baking starts. Every cake in the batch must match the same recipe and size; if one customer wants something different, the baker has to start a new batch or waste ingredients.

**Dynamic batching** is more like the baker listening to orders as they come: “One chocolate, one vanilla, another with strawberries.” As soon as enough cakes are requested to fill a tray (say five), the baker groups whatever flavors fit together and bakes them simultaneously. The batch size changes with demand, saving time when orders are few or many.

In AI, static batching fixes how many data points are processed at once, while dynamic batching adapts the group size during runtime for efficiency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
