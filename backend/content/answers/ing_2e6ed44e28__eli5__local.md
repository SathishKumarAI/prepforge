---
qid: ing_2e6ed44e28__eli5__local
question: 'Explain: Vertical Scaling — System Design: How to Scale a Database'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 190
total_tokens: 351
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:49:16-05:00'
sources: []
---

Imagine your database is a single‑room kitchen that everyone shares for cooking meals. **Vertical scaling** means you upgrade the room itself—install a bigger stove, add more burners, install a larger refrigerator, or give it a high‑capacity oven. You’re making the same space work harder and faster by adding more power to its existing components.

In database terms, vertical scaling is adding CPU cores, RAM, or storage capacity to the server that hosts your data. The architecture stays unchanged; you just give that one machine more muscle so it can handle more queries or larger tables. It’s quick and simple—no need to split recipes across multiple kitchens (that would be horizontal scaling). The trade‑off is that eventually the single kitchen will hit a limit, after which you’ll need to move to a multi‑kitchen setup.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
