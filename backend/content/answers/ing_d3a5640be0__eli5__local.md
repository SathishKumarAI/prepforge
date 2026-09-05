---
qid: ing_d3a5640be0__eli5__local
question: What's the difference between static and continuous batching, and why did
  continuous batching become universal?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 234
total_tokens: 398
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:10:30-05:00'
sources: []
---

Think of a kitchen that makes pizza.  
**Static batching** is like the chef making a big batch of dough all at once: he kneads one huge loaf, slices it, and then freezes each slice for later delivery. All pizzas come from the same dough roll; nothing changes while they’re baking.

**Continuous batching** is like the chef working on an endless conveyor belt. Fresh dough is added to the belt every minute, sliced, topped, baked, and delivered as soon as it’s ready—no waiting for a big batch to finish.

In AI, static batching feeds many inputs together into one “batch” before the model processes them, which can waste time if some are idle. Continuous batching streams data in small chunks over time, letting the model keep running without long pauses. It became universal because it keeps GPUs busy all the time, reduces latency, and scales better to varying workloads—just like a conveyor belt keeps pizzas coming nonstop instead of waiting for one big batch.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
