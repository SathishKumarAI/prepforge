---
qid: ing_0bd51c9949__eli5__local
question: 'Explain: 2.2 On-Policy Distillation — Rethinking On-Policy Distillation
  of Large Language Models: Phenomenology, Mechanism, and Recipe'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 204
total_tokens: 386
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:54:15-05:00'
sources: []
---

Imagine a master chef (the big language model) who has spent years cooking in a bustling kitchen. A new apprentice (a smaller model) wants to learn exactly how the chef prepares each dish without watching every single step in real time. **On‑policy distillation** is like giving the apprentice a “cookbook” that contains the chef’s *exact* recipes for all dishes they currently serve, but only when the chef is actually cooking those dishes.

The recipe works by letting the apprentice observe the chef’s finished meals (the outputs) while the chef follows their usual menu (policy). The apprentice then learns to mimic these outputs as if it were the chef itself. This method preserves the flavor of the current kitchen—no need to replay old menus or change the chef’s routine. It’s a direct, real‑time transfer of knowledge that keeps both models aligned with the same culinary style.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
