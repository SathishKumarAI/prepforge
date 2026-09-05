---
qid: ing_d82df3e1eb__eli5__local
question: 'Explain: Cons — Availability | System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 155
output_tokens: 220
total_tokens: 375
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:17:23-05:00'
sources: []
---

**Think of an AI service as a bakery that must always be open, but can’t bake too many cakes at once.**

*Availability* means the bakery never closes—customers (users) can place orders anytime. To keep it running, the bakers set up backup ovens and extra staff so a single oven failure doesn’t shut down the whole shop. In AI systems, this translates to building redundant servers, load balancers, and fail‑over mechanisms.

The *con* is that this safety net costs money and adds complexity. Every extra server or backup system needs power, maintenance, and careful coordination; if you don’t keep them in sync, one “backup” can become a source of bugs instead of help. So while availability keeps the AI online, it also makes the architecture heavier, harder to debug, and more expensive to run—just like a bakery that’s always open but must constantly manage many ovens and staff shifts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
