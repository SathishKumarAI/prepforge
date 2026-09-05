---
qid: ing_787dcae720__eli5__local
question: 'Explain: Golden-set construction and rotation — Eval Gated Cicd'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 221
total_tokens: 381
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:47:41-05:00'
sources: []
---

Imagine a secret recipe book that only opens when you put the right ingredients together, but you want to keep it safe while still letting people taste the dish.  
**Golden‑set construction** is like baking a batch of cookies with a special “golden” cookie hidden inside each box. The golden cookie is the only one that proves the recipe was made correctly. In software, we build a small, trusted set of test cases (the golden set) that guarantee our code works before it can be released.

**Rotation** is like swapping out which cookie is golden every few batches so no one can cheat by always using the same hidden piece. In CI/CD, we rotate the golden tests—changing them or adding new ones—so the system keeps catching new bugs and doesn’t become complacent.

Together, they let us automatically evaluate (“eval”) code with a trusted gate that changes over time, keeping our pipeline both safe and fresh.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
