---
qid: ing_e8d81f3c3e__eli5__local
question: 'Explain: Overlap Ratio. — Rethinking On-Policy Distillation of Large Language
  Models: Phenomenology, Mechanism, and Recipe'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 226
total_tokens: 403
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:43:49-05:00'
sources: []
---

**Overlap Ratio – the “recipe‑matching” score**

Imagine you’re a chef who wants to copy a famous soup recipe (the *large language model*). You taste your own batch and compare it with the original, noting how many ingredients line up. The **overlap ratio** is simply the fraction of matching ingredients:  
`(# of ingredients that are the same) ÷ (total ingredients in the reference recipe)`.

In machine‑learning terms, the reference recipe is a *policy*—a set of actions an agent would take. When we distill (“copy”) this policy into a smaller model, we run both models on the same situations and count how often they choose the same action. That fraction is the overlap ratio.  

A high ratio means your distilled model behaves almost exactly like the original; a low ratio signals it’s missing key behaviors. The goal in on‑policy distillation is to keep this ratio as close to one as possible while still training efficiently.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
