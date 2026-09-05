---
qid: ing_81c7a71205__eli5__local
question: Give one-liners on IPO, KTO, and ORPO - what problem does each solve, and
  when would you pick it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 485
total_tokens: 659
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:02:25-05:00'
sources: []
---

**Think of building a smart kitchen.**

- **IPO (Input‑Process‑Output)** is the simplest recipe: you put ingredients in, stir them on the stove, and get a dish out. It solves *“how do we turn raw data into results?”* Pick it when you just need a straight pipeline—data → model → answer.

- **KTO (Knowledge Transfer Object)** is like passing a handwritten cookbook from one chef to another. It moves learned patterns between models so the new one can start cooking faster and better. Use KTO when you want *“reuse expertise across projects”* or accelerate training on similar tasks.

- **ORPO (Output‑Request‑Process‑Output)** adds a feedback loop: after serving the dish, the waiter asks “Did you enjoy it?” The kitchen tweaks the recipe before the next plate. ORPO solves *“how to adapt output to user preferences in real time”*. Choose ORPO when the system must continuously refine its answers based on ongoing user signals.

In short: IPO is the basic flow, KTO re‑uses knowledge, and ORPO keeps the output tuned to what people actually want.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
