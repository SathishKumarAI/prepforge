---
qid: ing_0ed314717c__eli5__local
question: 'Explain: Memory drift — Agent Memory And State'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 156
output_tokens: 248
total_tokens: 404
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:58:59-05:00'
sources: []
---

Imagine an agent as a chef who keeps a notebook of recipes (its “memory”) while cooking. Each time the chef tries a dish, they write down what worked and what didn’t. Over many meals, small scribbles—notes on spices, timing tweaks, or kitchen tools—accumulate. The notebook doesn’t stay exactly the same; pages get smudged, ink fades, and new notes overwrite old ones. This gradual change is **memory drift**: the agent’s stored information slowly shifts from its original form because it keeps adding new experiences and sometimes forgetting earlier ones.

In practice, an AI agent updates its internal state (like the chef’s current recipe list) as it interacts with the world. If updates are not carefully managed—say, by overwriting old data or letting unrelated events influence the same memory slots—the agent’s “recipe” can drift, causing it to behave inconsistently or lose useful knowledge. Keeping a clear structure and occasionally revisiting old entries helps prevent this drift, much like a chef reviews classic recipes before adding new variations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
