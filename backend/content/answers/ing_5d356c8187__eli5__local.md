---
qid: ing_5d356c8187__eli5__local
question: 'Explain: So that is remote procedure calls. So — System Design BASICS:
  Horizontal vs. Vertical Scaling'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 190
total_tokens: 359
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:04:05-05:00'
sources: []
---

Imagine you’re running a popular bakery that sells cupcakes. **Vertical scaling** is like buying a bigger, faster oven and adding more baking racks to the same kitchen. You keep everything in one place but make it stronger so it can bake more cupcakes at once.

**Horizontal scaling** is like opening additional bakeries next door, each with its own ovens and staff. Every new bakery handles a portion of the cupcake orders. If one bakery gets too busy, you simply open another, spreading the load across many spots instead of overloading one kitchen.

In cloud systems, vertical scaling means giving a single server more CPU or memory; horizontal scaling means adding more servers (or “nodes”) to share the work. The second approach is usually more flexible and fault‑tolerant because if one node fails, the others keep running.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
