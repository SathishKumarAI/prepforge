---
qid: ing_7c78c738b2__eli5__local
question: 'Explain: Top- k k OPD. — Rethinking On-Policy Distillation of Large Language
  Models: Phenomenology, Mechanism, and Recipe'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 232
total_tokens: 412
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:54:02-05:00'
sources: []
---

Think of a huge language model as a master chef who can whip up any dish in the world. When we want to teach a smaller kitchen (the “student” model) how to cook, we give it a *menu* that lists only the best recipes the chef would recommend for each ingredient—this is **Top‑k**: we keep just the top *k* most confident suggestions and ignore the rest.

In **On‑Policy Distillation**, the student follows the same recipe steps (policy) as the master while learning. “Rethinking On‑Policy Distillation” says: instead of copying every single choice, let the student focus on those few *k* high‑probability actions that matter most for good taste. By repeatedly sampling these top choices and updating its own probabilities, the student learns to approximate the chef’s style efficiently. The recipe is simple: pick k, sample from the master’s distribution, train the student to match those samples—so it learns the essence without drowning in noise.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
