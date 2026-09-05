---
qid: ing_9e2fff8bad__eli5__local
question: 'Explain: Setup. — Rethinking On-Policy Distillation of Large Language Models:
  Phenomenology, Mechanism, and Recipe'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 235
total_tokens: 410
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:48:11-05:00'
sources: []
---

**Imagine a busy kitchen where chefs (the large language model) prepare dishes (answers).**  
In a traditional “on‑policy” recipe, the chefs only learn from their own cooking style—what they already know. Rethinking this means letting them taste *fresh* food that other chefs have made, but still in the same kitchen.  

The **setup** is:  
1. **Collect a stream of new dishes** (recent model outputs) while the chef is busy.  
2. **Teach the chef to mimic these fresh dishes** using a short‑term memory (a small “distillation” network).  
3. **Keep feeding back**—the chef’s own updated recipes become the next set of dishes to imitate, but we always keep a *small* version that is fast and light.

So, instead of learning only from its old menu, the model continually refines itself by copying its most recent creations, just as chefs improve by tasting their own latest plates. This keeps the learning loop tight, efficient, and always relevant to current “flavors.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
