---
qid: ing_3892c2782f__eli5__local
question: 'Explain: Consider Alternatives — Consistent Hashing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 200
total_tokens: 360
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:05:41-05:00'
sources: []
---

Imagine you’re building a large online store that needs to keep track of customers’ shopping carts across many computers. You want each cart to stay on the same computer even when new servers are added or old ones fail, and you don’t want to move all carts every time you change the hardware.

**Consistent hashing** is like giving every server a “slice” of an endless pizza ring. Each customer’s cart gets a number (a hash) that lands somewhere on the ring; the nearest clockwise slice owns that cart. When you add or remove a server, only the carts that were right next to it move to the new or neighboring slices—just a few pizzas, not the whole pie.

In machine‑learning system design, this keeps data and model shards stable while scaling, so training jobs can keep running smoothly with minimal re‑assignment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
